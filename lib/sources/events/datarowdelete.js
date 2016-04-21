/**
 * @fileoverview Provide zz.models.events.DatarowDelete.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models.events.DatarowDelete' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.events.BaseEvent' );

/**
 * @constructor
 * @extends {zz.events.BaseEvent}
 * @param {!zz.models.Message} message
 */
zz.models.events.DatarowDelete = function( message ){

	/**
	 * Model message.
	 * @type {!zz.models.Datarow}
	 */
	this.message = message;
	goog.base( this, zz.models.enums.EventType.DATAROW_DELETE, message.dataset );
};
goog.inherits( zz.models.events.DatarowDelete, zz.events.BaseEvent );