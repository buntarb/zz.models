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

goog.provide( 'zz.models.events.DatarowCreate' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.events.BaseEvent' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * @constructor
 * @extends {zz.events.BaseEvent}
 * @param {!zz.models.Message} message
 */
zz.models.events.DatarowCreate = function( message ){

	var node = zz.environment.services.MVCRegistry
		.getInstance( )
		.get( message.datarow.getUid( ) );

	/**
	 * Model message.
	 * @type {!zz.models.Message}
	 */
	this.message = message;

	/**
	 * Controller, related with current event by
	 * created datarow uid, null if relation was not found.
	 * @type {zz.controllers.FEBase|null}
	 */
	this.controller = node ? node.controller : null;

	/**
	 * Created datarow.
	 * @type {zz.models.Datarow}
	 */
	this.model = message.datarow;

	/**
	 * DOM elements, related with current event by
	 * created datarow uid, null if relation was not found.
	 * @type {Array}
	 */
	this.elements = node ? node.elements : null;

	goog.base( this, zz.models.enums.EventType.DATAROW_CREATE, message.dataset );
};
goog.inherits( zz.models.events.DatarowCreate, zz.events.BaseEvent );