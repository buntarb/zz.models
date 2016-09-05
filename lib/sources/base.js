/**
 * @fileoverview Provide zz.models. Provide zz.models.Message.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models' );
goog.provide( 'zz.models.Message' );
goog.require( 'goog.async.run' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.models.events.DatarowUpdate' );

/**
 * Check is specified field exist in specified item, call an exception if true.
 * @param {!zz.models.Datarow} datarow
 * @param {string} datafield
 */
zz.models.checkIfFieldExist = function( datarow, datafield ){

	if( goog.isDef( datarow[datafield] ) ) throw new TypeError( zz.models.enums.ErrorType.FIELD_EXIST );
};

/**
 * Check is required field filled or not.
 * @param {boolean} required
 * @param {*} value
 */
zz.models.checkRequiredField = function( required, value ){

	if( required && ( goog.isNull( value ) || value === '' ) )

		throw new TypeError( zz.models.enums.ErrorType.FIELD_REQUIRED );
};

/**
 * Check is specified value is a boolean. Throw an exception if it not.
 * @param {*} value
 */
zz.models.checkBooleanType = function( value ){

	if( !goog.isBoolean( value ) && !goog.isNull( value ) ) {

		throw new TypeError( zz.models.enums.ErrorType.TYPE_MISMATCH_BOOLEAN );
	}
};

/**
 * Check is specified value is a number. Throw an exception if it not.
 * @param {*} value
 */
zz.models.checkNumberType = function( value ){

	if( ( !goog.isNumber( value ) && !goog.isNull( value ) ) || value !== value ){

		throw new TypeError( zz.models.enums.ErrorType.TYPE_MISMATCH_NUMBER );
	}
};

/**
 * Check is specified value is a string. Throw an exception if it not.
 * @param {*} value
 */
zz.models.checkStringType = function( value ){

	if( !goog.isString( value ) && !goog.isNull( value ) ) {

		throw new TypeError( zz.models.enums.ErrorType.TYPE_MISMATCH_STRING );
	}
};

/**
 * Setting up data item field with boolean type.
 * @param {!zz.models.Dataset} dataset
 * @param {!zz.models.Datarow} datarow
 * @param {!string} datafield
 * @param {boolean} required
 * @param {?*} opt_value
 */
zz.models.setupBooleanField = function( dataset, datarow, datafield, required, opt_value ){

	if( goog.isDef( opt_value) )

		zz.models.checkBooleanType( opt_value );

	zz.models.checkIfFieldExist( datarow, datafield );

	var value = goog.isDef( opt_value ) ? opt_value : null;

	Object.defineProperty( datarow, datafield, {

		get: function( ){

			return value;
		},
		set: function( val ){

			zz.models.checkBooleanType( val );
			zz.models.checkRequiredField( required, val );
			if( value !== val ){

				var message = new zz.models.Message(

					zz.models.enums.EventType.DATAROW_UPDATE,
					dataset,
					datarow,
					datafield,
					value,
					val
				);
				dataset.publish( message );
				goog.async.run( function( ){

					dataset.dispatchEvent( new zz.models.events.DatarowUpdate( message ) );
				} );
				value = val;
			}
		},
		enumerable: true,
		configurable: false
	} );
};

/**
 * Setting up data item field with number type.
 * @param {!zz.models.Dataset} dataset
 * @param {!zz.models.Datarow} datarow
 * @param {!string} datafield
 * @param {boolean} required
 * @param {?*} opt_value
 */
zz.models.setupNumberField = function( dataset, datarow, datafield, required, opt_value ){

	if( goog.isDef( opt_value) )

		zz.models.checkNumberType( opt_value );

	zz.models.checkIfFieldExist( datarow, datafield );
	var value = goog.isDef( opt_value ) ? opt_value : null;
	Object.defineProperty( datarow, datafield, {

		get: function( ){

			return value;
		},
		set: function( val ){

			zz.models.checkNumberType( val );
			zz.models.checkRequiredField( required, val );
			if( value !== val ){

				var message = new zz.models.Message(

					zz.models.enums.EventType.DATAROW_UPDATE,
					dataset,
					datarow,
					datafield,
					value,
					val
				);
				dataset.publish( message );
				goog.async.run( function( ){

					dataset.dispatchEvent( new zz.models.events.DatarowUpdate( message ) );
				} );
				value = val;
			}
		},
		enumerable: true,
		configurable: false
	} );
};

/**
 * Setting up data item field with string type.
 * @param {!zz.models.Dataset} dataset
 * @param {!zz.models.Datarow} datarow
 * @param {!string} datafield
 * @param {boolean} required
 * @param {*} opt_value
 */
zz.models.setupStringField = function( dataset, datarow, datafield, required, opt_value ){

	if( goog.isDef( opt_value) )

		zz.models.checkStringType( opt_value );

	zz.models.checkIfFieldExist( datarow, datafield );
	var value = goog.isDef( opt_value ) ? opt_value : null;
	Object.defineProperty( datarow, datafield, {

		get: function( ){

			return value;
		},
		set: function( val ){

			zz.models.checkStringType( val );
			zz.models.checkRequiredField( required, val );
			if( value !== val ){

				var message = new zz.models.Message(

					zz.models.enums.EventType.DATAROW_UPDATE,
					dataset,
					datarow,
					datafield,
					value,
					val
				);
				dataset.publish( message );
				goog.async.run( function( ){

					dataset.dispatchEvent( new zz.models.events.DatarowUpdate( message ) );
				} );
				value = val;
			}
		},
		enumerable: true,
		configurable: false
	} );
};

/**
 * @param {!zz.models.Dataset} dataset
 * @param {!zz.models.Datarow} datarow
 * @param {!string} datafield
 * @param {!Function} datatype
 * @param {*} opt_value
 */
zz.models.setupDatasetField = function( dataset, datarow, datafield, datatype, opt_value ){

	zz.models.checkIfFieldExist( datarow, datafield );
	if( goog.typeOf( datatype ) === 'function' && goog.isDef( datatype.prototype.DatarowConstructor ) ){

		var value = new datatype( dataset, opt_value );
		Object.defineProperty( datarow, datafield, {

			get: function( ){

				return value;
			},
			set: function( ){

				throw new TypeError( zz.models.enums.ErrorType.TYPE_MISMATCH_DATASET_RESET );
			},
			enumerable: true,
			configurable: false
		} );
	}else{

		throw new TypeError( zz.models.enums.ErrorType.TYPE_MISMATCH_DATASET );
	}
};

/**
 * zz.models.Message class .
 * @param {!string} eventtype
 * @param {!zz.models.Dataset} dataset
 * @param {!zz.models.Datarow} datarow
 * @param {string=} opt_datafield
 * @param {*=} opt_old
 * @param {*=} opt_new
 * @constructor
 */
zz.models.Message = function( eventtype, dataset, datarow, opt_datafield, opt_old, opt_new ){

	/**
	 * Current message event type.
	 * @type {string}
	 */
	this.eventtype = eventtype;

	/**
	 * Message source dataset.
	 * @type {!zz.models.Dataset}
	 */
	this.sourceDataset = dataset;

	/**
	 * Message dataset.
	 * @type {!zz.models.Dataset}
	 */
	this.dataset = dataset;

	/**
	 * Message datarow.
	 * @type {!zz.models.Datarow}
	 */
	this.datarow = datarow;

	/**
	 * Message datafield.
	 * @type {string}
	 */
	this.datafield = opt_datafield;

	/**
	 * Message datafield old value.
	 * @type {*}
	 */
	this.old_value = opt_old;

	/**
	 * Message datafield new value.
	 * @type {*}
	 */
	this.new_value = opt_new;
};

/**
 * Setting up parent dataset for existing message. Used for messages bubbling.
 * @param {!zz.models.Dataset} dataset
 */
zz.models.Message.prototype.setParentDataset = function( dataset ){

	this.dataset = dataset;
};
