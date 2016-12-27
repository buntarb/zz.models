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

goog.provide( 'zz.models.events.DatarowCreateTest' );
goog.setTestOnly( 'zz.models.events.DatarowCreateTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.events.BaseEvent' );
goog.require( 'zz.models.events.DatarowCreate' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.models.Message' );
goog.require( 'zz.models.Datarow' );
goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.models.models.testModel' );

var zz_models_events_DatarowCreate,
    zz_models_events_DatarowCreate_Message,
    zz_models_events_DatarowCreate_Dataset,
    zz_models_events_DatarowCreate_Datarow;

function testDatarowCreateConstructor( ){

    zz_models_events_DatarowCreate_Dataset = new zz.models.models.testModel( );
    zz_models_events_DatarowCreate_Dataset.createLast( );
    zz_models_events_DatarowCreate_Datarow = zz_models_events_DatarowCreate_Dataset.lastDatarow( );
    zz_models_events_DatarowCreate_Message = new zz.models.Message(

        zz.models.enums.EventType.DATAROW_CREATE,
        zz_models_events_DatarowCreate_Dataset,
        zz_models_events_DatarowCreate_Datarow
    );
    zz_models_events_DatarowCreate = new zz.models.events.DatarowCreate( zz_models_events_DatarowCreate_Message );
    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_events_DatarowCreate instanceof zz.models.events.DatarowCreate
    );
}

function testDatarowCreateInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
       zz_models_events_DatarowCreate instanceof zz.events.BaseEvent
    );
}

function testDatarowCreateType( ){

    assertEquals(

        'Expected type should be equal for type from enums',
        zz_models_events_DatarowCreate.type,
        zz.models.enums.EventType.DATAROW_CREATE
    );
}

function testDatarowCreatePropertyMessage( ){

    assertTrue(

        'Property message must be non-null and have the expected class',
        zz_models_events_DatarowCreate.message instanceof zz.models.Message
    );
}

function testDatarowCreatePropertyModel( ){

    assertTrue(

        'Property model must be non-null and have the expected class',
        zz_models_events_DatarowCreate.model instanceof zz.models.Datarow
    );
}

function testDatarowCreatePropertyController( ){
    
    if( zz_models_events_DatarowCreate.controller ){

        assertTrue(

            'if property controller is non-null it have the expected class',
            zz_models_events_DatarowCreate.controller instanceof zz.controllers.FEBase
        );
    }
}

function testDatarowCreatePropertyElements( ){

    if( zz_models_events_DatarowCreate.elements ){

        assertTrue(

            'Property elements must to have a type of Array',
            goog.isArray(zz_models_events_DatarowCreate.elements)
        );
    }
}