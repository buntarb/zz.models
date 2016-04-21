/**
 * @fileoverview Provide zz.models.enums.EventType.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models.enums.EventType' );
goog.require( 'goog.events' );

/**
 * Constants for model events types.
 * @enum {string}
 */
zz.models.enums.EventType = {

	DATAROW_CREATE: goog.events.getUniqueId( 'datarow_create' ),
	DATAROW_UPDATE: goog.events.getUniqueId( 'datarow_update' ),
	DATAROW_DELETE: goog.events.getUniqueId( 'datarow_delete' )
};