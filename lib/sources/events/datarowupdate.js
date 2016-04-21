/**
 * @fileoverview Provide zz.models.events.DatarowUpdate.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models.events.DatarowUpdate' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.events.BaseEvent' );

/**
 * @constructor
 * @extends {zz.events.BaseEvent}
 * @param {!zz.models.Message} message
 */
zz.models.events.DatarowUpdate = function( message ){

	/**
	 * Model message.
	 * @type {!zz.models.Datarow}
	 */
	this.message = message;
	goog.base( this, zz.models.enums.EventType.DATAROW_UPDATE, message.dataset );
};
goog.inherits( zz.models.events.DatarowUpdate, zz.events.BaseEvent );