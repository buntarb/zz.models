/**
 * @fileoverview Provide zz.models.events.DatarowCreate.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models.events.DatarowCreate' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.events.BaseEvent' );

/**
 * @constructor
 * @extends {zz.events.BaseEvent}
 * @param {!zz.models.Message} message
 */
zz.models.events.DatarowCreate = function( message ){

	/**
	 * Model message.
	 * @type {!zz.models.Datarow}
	 */
	this.message = message;
	goog.base( this, zz.models.enums.EventType.DATAROW_DELETE, message.dataset );
};
goog.inherits( zz.models.events.DatarowCreate, zz.events.BaseEvent );