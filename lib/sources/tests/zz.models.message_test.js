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

goog.provide( 'zz.models.MessageTest' );
goog.setTestOnly( 'zz.models.MessageTest' );

goog.require( 'goog.testing.jsunit' );

goog.require( 'zz.models.Message' );
goog.require( 'zz.models.models.testModel' );
goog.require( 'zz.tests' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.Datarow' );

var zz_models_message_dataset = new zz.models.models.testModel( );
var zz_models_message_parentDataset = new zz.models.models.testModel( );
var parentString = 'string';
zz_models_message_dataset.createLast( );
zz_models_message_parentDataset.createLast( [ parentString ] );
var zz_models_message_datarow = zz_models_message_dataset.lastDatarow( );

var zz_models_message = new zz.models.Message(

    'eventtype',
    zz_models_message_dataset,
    zz_models_message_datarow,
    'string'
);

var zz_models_message_members = [

    'eventtype',
    'sourceDataset',
    'dataset',
    'datarow',
    'datafield',
    'old_value',
    'new_value',
    'setParentDataset'
];

function test_zz_models_message_availableMembers( ){

    zz.tests.checkMembers(

        zz_models_message_members,
        zz_models_message,
        false
    );
}


function test_zz_models_message_availableMethods( ){

    zz.tests.checkMembers(

        [ 'setParentDataset' ],
        zz_models_message,
        true
    );
}

function test_zz_models_message_memberEventtype( ){

    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_message.eventtype )
    );
}

function test_zz_models_message_memberSourceDataset( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_message.sourceDataset instanceof zz.models.Dataset
    );
}

function test_zz_models_message_memberDataset( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_message.dataset instanceof zz.models.Dataset
    );
}

function test_zz_models_message_memberDatarow( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_message.datarow instanceof zz.models.Datarow
    );
}

function test_zz_models_message_memberDatafield( ){

    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_message.datafield )
    );
}


function test_zz_models_message_methodSetParentDataset( ){

    zz_models_message.setParentDataset( zz_models_message_parentDataset );
    assertEquals(

        'Expected values should be equal',
        zz_models_message.dataset.lastDatarow( ).string,
        parentString
    );
    zz_models_message.setParentDataset( zz_models_message_dataset );
}