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

goog.provide( 'zz.models.events.DatarowDeleteTest' );
goog.setTestOnly( 'zz.models.events.DatarowDeleteTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.events.BaseEvent' );
goog.require( 'zz.models.events.DatarowDelete' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.models.Message' );
goog.require( 'zz.models.Datarow' );
goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.models.models.testModel' );

var DatarowDelete, DatarowDeleteMessage, DatarowDeleteDataset, DatarowDeleteDatarow;


function testDatarowDeleteConstructor( ){

    DatarowDeleteDataset = new zz.models.models.testModel( );
    DatarowDeleteDataset.createLast( );
    DatarowDeleteDatarow = DatarowDeleteDataset.lastDatarow( );
    DatarowDeleteMessage = new zz.models.Message(

        zz.models.enums.EventType.DATAROW_DELETE,
        DatarowDeleteDataset,
        DatarowDeleteDatarow
    );

    DatarowDelete = new zz.models.events.DatarowDelete( DatarowDeleteMessage );
    assertTrue(

        'Instance must be non-null and have the expected class',
        DatarowDelete instanceof zz.models.events.DatarowDelete
    );
}

function testDatarowDeleteInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
       DatarowDelete instanceof zz.events.BaseEvent
    );
}

function testDatarowDeleteType( ){

    assertEquals(

        'Expected type should be equal for type from enums',
        DatarowDelete.type,
        zz.models.enums.EventType.DATAROW_DELETE
    );
}
function testDatarowDeletePropertyMessage( ){

    assertTrue(

        'Property message must be non-null and have the expected class',
        DatarowDelete.message instanceof zz.models.Message
    );
}

function testDatarowDeletePropertyModel( ){

    assertTrue(

        'Property model must be non-null and have the expected class',
        DatarowDelete.model instanceof zz.models.Datarow
    );
}

function testDatarowDeletePropertyController( ){

    if( DatarowDelete.controller ){

        assertTrue(

            'if property controller is non-null it have the expected class',
            DatarowDelete.controller instanceof zz.controllers.FEBase
        );
    }
}

function testDatarowDeletePropertyElements( ){

    if( DatarowDelete.elements ){

        assertTrue(

            'Property elements must to have a type of Array',
            goog.isArray(DatarowDelete.elements)
        );
    }
}