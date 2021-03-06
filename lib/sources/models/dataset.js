// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 */

goog.provide( 'zz.models.Dataset' );
goog.require( 'goog.array' );
goog.require( 'goog.object' );
goog.require( 'goog.async.run' );
goog.require( 'goog.events.EventTarget' );
goog.require( 'goog.events.EventHandler' );
goog.require( 'zz.environment.services.MVCRegistry' );
goog.require( 'zz.models' );
goog.require( 'zz.models.Message' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.models.enums.ErrorType' );
goog.require( 'zz.models.events.DatarowCreate' );
goog.require( 'zz.models.events.DatarowDelete' );

/**
 * @param {?zz.models.Dataset} opt_parent
 * @param {?Array<Array>} opt_data
 * @constructor
 * @extends {goog.events.EventTarget}
 */
zz.models.Dataset = function( opt_parent, opt_data ){

	goog.base( this );

	/**
	 * Dataset cursor current position.
	 * @type {number}
	 * @private
	 */
	this.index_ = undefined;

	/**
	 * Current dataset fields.
	 * @type {{string:goog.pubsub.TopicId}}
	 */
	this.datafield = { };

	// Generating UID.
	goog.getUid( this );

	// Creating PubSub topics.
	goog.object.forEach( this.getDatarowSchema( ), function( meta, name ){

		this.datafield[ name ] = name;

	}, this );

	// Setting up parent event target.
	if( opt_parent ){

		this.setParentEventTarget( opt_parent );
	}

	// De-serialize incoming array.
	goog.array.forEach( opt_data || [ ], function( datarow ){

		this.createLast( datarow );

	}, this );

	// Go to first datarow if exist.
	this.index_ = this.length > 0 ? 0 : undefined;
};
goog.inherits( zz.models.Dataset, goog.events.EventTarget );

/**
 * Return current dataset unique ID.
 * @returns {number}
 */
zz.models.Dataset.prototype.getUid = function( ){

	return goog.getUid( this );
};

/**
 * Current dataset row type.
 * @constructor
 * @type {zz.models.Datarow}
 * @param {zz.models.Dataset} dataset
 * @param {Array} data
 */
zz.models.Dataset.prototype.DatarowConstructor = function( dataset, data ){

	throw new TypeError( zz.models.enums.ErrorType.DATAROW_TYPE_UNDEFINED );
};

/**
 * Return schema object.
 * @return {Object} Item Schema object.
 * @override
 */
zz.models.Dataset.prototype.getDatarowSchema = function( ){

	throw new TypeError( zz.models.enums.ErrorType.DATAROW_SCHEMA_UNDEFINED );
};

/**
 * Serialize specified datarow.
 * @param {number} index
 * @param {boolean=} opt_object
 * @returns {Object|Array}
 */
zz.models.Dataset.prototype.serializeDatarow = function( index, opt_object ){

	var res = opt_object ? { } : [ ];
	goog.object.forEach( this.getDatarowSchema( ), function( meta, name ){

		var indx = /** @type {number} */ (meta.index);
		var type = /** @type {zz.models.enums.FieldType|Function} */ (meta.type);

		res[ opt_object ? name : indx ] = !goog.isFunction( type ) ?

			this[ index ][ name ] :
			this[ index ][ name ].serializeDataset( opt_object );

	}, this );
	return res;
};

/**
 * Serialize current dataset.
 * @param {boolean=} opt_object
 * @returns {Array}
 */
zz.models.Dataset.prototype.serializeDataset = function( opt_object ){

	var res = [ ];
	for( var i = 0; i < this.length; i++ ){

		res.push( this.serializeDatarow( i, opt_object ) );
	}
	return res;
};

/** @inheritDoc */
zz.models.Dataset.prototype.disposeInternal = function( ){

	zz.models.Dataset.superClass_.disposeInternal.call( this );
	if( this.handler_ ){

		this.handler_.dispose( );
		delete this.handler_;
	}
};

/**
 * Returns the event handler for this dataset, lazily created the first time this method is called.
 * @return {!goog.events.EventHandler} Event handler for this dataset.
 */
zz.models.Dataset.prototype.getEventHandler = function( ){

	if( !this.handler_ ){

		/**
		 * Dataset event handler.
		 * @type {goog.events.EventHandler}
		 * @private
		 */
		this.handler_ = new goog.events.EventHandler( this );
	}
	return this.handler_;
};

/**
 * Suncronize model view.
 * @param {zz.models.Message} message
 */
zz.models.Dataset.prototype.syncView = function( message ){

	var mvcRegistry = zz.environment.services.MVCRegistry.getInstance( );
	if( mvcRegistry.get( message.dataset.getUid( ) ) ){

		if( message.eventtype == zz.models.enums.EventType.DATAROW_CREATE ){

			mvcRegistry.get( message.dataset.getUid( ) )

				.controller
				.getView( )
				.renderDatarow( message );
		}
		if( message.eventtype == zz.models.enums.EventType.DATAROW_UPDATE &&
			mvcRegistry.get( message.datarow.getUid( ) ) ){

			mvcRegistry.get( message.datarow.getUid( ) )

				.controller
				.getView( )
				.updateDatarow( message );
		}
		if( message.eventtype == zz.models.enums.EventType.DATAROW_DELETE ){

			mvcRegistry.get( message.dataset.getUid( ) )

				.controller
				.getView( )
				.removeDatarow( message );
		}
	}
};

/**
 * Create new row at the first position.
 * @param {Array=} opt_data
 * @returns {zz.models.Datarow}
 */
zz.models.Dataset.prototype.createFirst = function( opt_data ){

	return this.createAt( 0, opt_data );
};

/**
 * Create new row at the first position.
 * @param {Array=} opt_data
 * @returns {zz.models.Datarow}
 */
zz.models.Dataset.prototype.createLast = function( opt_data ){

	return this.createAt( this.length || 0, opt_data );
};

/**
 * Create new datarow with specified index.
 * @param {number} index
 * @param {Array=} opt_data
 * @returns {zz.models.Datarow}
 */
zz.models.Dataset.prototype.createAt = function( index, opt_data ){

	var datarow = /** @type {zz.models.Datarow} */ ( new this.DatarowConstructor( this, opt_data ) );
	var message = new zz.models.Message(

		zz.models.enums.EventType.DATAROW_CREATE,
		this,
		datarow
	);
	this.index_ = index < 0 ? 0 : index > this.length ? this.length : index;
	Array.prototype.splice.call( this, this.index_, 0, datarow );
	this.syncView( message );
	goog.async.run( function( ){

		this.dispatchEvent( new zz.models.events.DatarowCreate( message ) );

	}, this );
	return datarow;
};

/**
 * Delete first datarow from dataset if it exist.
 * @returns {boolean}
 */
zz.models.Dataset.prototype.deleteFirst = function( ){

	return this.deleteAt( 0 );
};

/**
 * Delete last datarow from dataset if it exist.
 * @returns {boolean}
 */
zz.models.Dataset.prototype.deleteLast = function( ){

	return this.deleteAt( this.length - 1 );
};

/**
 * Delete current datarow from dataset if exist.
 * @returns {boolean}
 */
zz.models.Dataset.prototype.deleteCurrent = function( ){

	return this.deleteAt( this.index_ );
};

/**
 * Delete datarow with specified index.
 * @param {number} index
 * @returns {boolean}
 */
zz.models.Dataset.prototype.deleteAt = function( index ){

	if( this.length > 0 && index >= 0 && index < this.length ){

		var datarow = Array.prototype.splice.call( this, index, 1 )[ 0 ];
		var message = new zz.models.Message(

			zz.models.enums.EventType.DATAROW_DELETE,
			this,
			datarow
		);
		this.index_ = this.length > index ? index : this.length > 0 ? this.length - 1 : undefined;
		this.syncView( message );
		goog.async.run( function( ){

			this.dispatchEvent( new zz.models.events.DatarowDelete( message ) );

		}, this );
		return true;

	}else{

		return false;
	}
};

/**
 * Return first datarow from current dataset if it exists, false otherwise.
 * @returns {zz.models.Datarow|boolean}
 */
zz.models.Dataset.prototype.firstDatarow = function( ){

	this.index_ = this.length > 0 ? 0 : undefined;

	if( goog.isDef( this.index_ ) ){

		return this[this.index_];

	}else{

		return false;
	}
};

/**
 * Return last datarow from current dataset if it exists, false otherwise.
 * @returns {zz.models.Datarow|boolean}
 */
zz.models.Dataset.prototype.lastDatarow = function( ){

	this.index_ = this.length > 0 ? this.length - 1 : undefined;

	if( goog.isDef( this.index_ ) ){

		return this[this.index_];

	}else{

		return false;
	}
};

/**
 * Return current datarow from dataset if it exists, false otherwise.
 * @returns {zz.models.Datarow|boolean}
 */
zz.models.Dataset.prototype.currentDatarow = function( ){

	if( goog.isDef( this.index_ ) ){

		return this[this.index_];

	}else{

		return false;
	}
};

/**
 * Return next datarow from current dataset if it exists, false otherwise.
 * @returns {zz.models.Datarow|boolean}
 */
zz.models.Dataset.prototype.nextDatarow = function( ){

	if( this.length > 0 && this.index_ < ( this.length - 1 ) ){

		this.index_++;
		return this[this.index_];

	}else{

		return false;
	}
};

/**
 * Return next datarow from current dataset if it exists, false otherwise.
 * @returns {zz.models.Datarow|boolean}
 */
zz.models.Dataset.prototype.previousDatarow = function( ){

	if( this.length > 0 && this.index_ > 0 ){

		this.index_--;
		return this[this.index_];

	}else{

		return false;
	}
};