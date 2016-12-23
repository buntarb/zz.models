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

goog.provide( 'zz.models.events.DatarowUpdateTest' );
goog.setTestOnly( 'zz.models.events.DatarowUpdateTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.events.BaseEvent' );
goog.require( 'zz.models.events.DatarowUpdate' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.models.Message' );
goog.require( 'zz.models.models.testModel' );

var event, message, dataset, datarow;

function setUp( ){

    dataset = new zz.models.models.testModel( );
    dataset.createLast( );
    datarow = dataset.lastDatarow( );
    message = new zz.models.Message(

        zz.models.enums.EventType.DATAROW_UPDATE,
        dataset,
        datarow
    );
    event = new zz.models.events.DatarowUpdate( message );
}

function testConstructor( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        event instanceof zz.models.events.DatarowUpdate
    );
}

function testInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
        event instanceof zz.events.BaseEvent
    );
}

function testType( ){

    assertEquals(

        'Expected type should be equal for type from enums',
        event.type,
        zz.models.enums.EventType.DATAROW_UPDATE
    );
}