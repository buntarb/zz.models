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

goog.provide( 'zz.models.Datarow' );
goog.require( 'goog.object' );
goog.require( 'zz.models' );
goog.require( 'zz.models.enums.ErrorType' );
goog.require( 'zz.models.enums.FieldType' );

/**
 * @constructor
 * @param {!zz.models.Dataset} dataset
 * @param {?Array} opt_data
 */
zz.models.Datarow = function( dataset, opt_data ){

	goog.getUid( this );
	goog.object.forEach( dataset.getDatarowSchema( ), function( meta, name ){

		var idx = /** @type {number} */ (meta.index);
		var typ = /** @type {zz.models.enums.FieldType|Function} */ (meta.type);
		var req = /** @type {boolean} */ (meta.required);

		if( goog.isDef( opt_data ) && req && !goog.isDefAndNotNull( opt_data[idx] ) )

			throw new TypeError( zz.models.enums.ErrorType.FIELD_REQUIRED );

		if( typ === zz.models.enums.FieldType.BOOLEAN )

			zz.models.setupBooleanField( dataset, this, name, req, opt_data ? opt_data[idx] : undefined );

		if( typ === zz.models.enums.FieldType.NUMBER )

			zz.models.setupNumberField( dataset, this, name, req, opt_data ? opt_data[idx] : undefined );

		if( typ === zz.models.enums.FieldType.STRING )

			zz.models.setupStringField( dataset, this, name, req, opt_data ? opt_data[idx] : undefined );

		if( goog.isFunction( typ ) )

			zz.models.setupDatasetField( dataset, this, name, typ, opt_data ? opt_data[idx] : undefined );

	}, this );
};

/**
* Return current datarow unique ID.
* @returns {number}
*/
zz.models.Datarow.prototype.getUid = function( ){

	return goog.getUid( this );
};