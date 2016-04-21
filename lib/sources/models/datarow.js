/**
 * @fileoverview Provide zz.models.Datarow.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
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