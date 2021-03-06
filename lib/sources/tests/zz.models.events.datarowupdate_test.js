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
goog.require( 'zz.models.Datarow' );
goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.models.models.testModel' );

var datarowUpdate, datarowUpdateMessage, datarowUpdateDataset, datarowUpdateDatarow;


function testDatarowUpdateConstructor( ){

    datarowUpdateDataset = new zz.models.models.testModel( );
    datarowUpdateDataset.createLast( );
    datarowUpdateDatarow = datarowUpdateDataset.lastDatarow( );
    datarowUpdateMessage = new zz.models.Message(

        zz.models.enums.EventType.DATAROW_UPDATE,
        datarowUpdateDataset,
        datarowUpdateDatarow
    );
    datarowUpdate = new zz.models.events.DatarowUpdate( datarowUpdateMessage );

    assertTrue(

        'Instance must be non-null and have the expected class',
        datarowUpdate instanceof zz.models.events.DatarowUpdate
    );
}

function testDatarowUpdateInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
        datarowUpdate instanceof zz.events.BaseEvent
    );
}

function testDatarowUpdateType( ){

    assertEquals(

        'Expected type should be equal for type from enums',
        datarowUpdate.type,
        zz.models.enums.EventType.DATAROW_UPDATE
    );
}

function testDatarowUpdatePropertyMessage( ){

    assertTrue(

        'Property message must be non-null and have the expected class',
        datarowUpdate.message instanceof zz.models.Message
    );
}

function testDatarowUpdatePropertyModel( ){

    assertTrue(

        'Property model must be non-null and have the expected class',
        datarowUpdate.model instanceof zz.models.Datarow
    );
}

function testDatarowUpdatePropertyController( ){

    if( datarowUpdate.controller ){

        assertTrue(

            'if property controller is non-null it have the expected class',
            datarowUpdate.controller instanceof zz.controllers.FEBase
        );
    }
}

function testDatarowUpdatePropertyElements( ){

    if( datarowUpdate.elements ){

        assertTrue(

            'Property elements must to have a type of Array',
            goog.isArray(datarowUpdate.elements)
        );
    }
}