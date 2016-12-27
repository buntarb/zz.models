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

goog.provide( 'zz.modelsTest' );
goog.setTestOnly( 'zz.modelsTest' );

goog.require( 'goog.testing.jsunit' );

goog.require( 'zz.models' );
goog.require( 'zz.models.models.testModel' );
goog.require( 'zz.tests' );

var zz_models_dataset, zz_models_datarow;

var zz_models_members = [

    'checkIfFieldExist',
    'checkRequiredField',
    'checkBooleanType',
    'checkNumberType',
    'checkStringType',
    'setupBooleanField',
    'setupNumberField',
    'setupStringField',
    'setupDatasetField'
];

function test_zz_models_availableMembers( ){

    zz.tests.checkMembers(

        zz_models_members,
        zz.models,
        true
    );
}

function test_zz_models_checkIfFieldExist( ){

    zz_models_dataset = new zz.models.models.testModel( );
    zz_models_dataset.createLast( [ 'string', 1, true ]);
    zz_models_datarow = zz_models_dataset.lastDatarow( );

    assertThrows(

        'Function must throw error',
        function( ){

            zz.models.checkIfFieldExist( zz_models_datarow, 'string' );
        }
    );
}

function test_zz_models_checkRequiredField( ){

    assertThrows(

        'Function must throw error',
        function( ){

            zz.models.checkRequiredField( true, '' );
        }
    );
}

function test_zz_models_checkBooleanType( ){

    assertThrows(

        'Function must throw error',
        function( ){

            zz.models.checkBooleanType( 'string' );
        }
    );

    assertNotThrows(

        'Function must throw error',
        function( ){

            zz.models.checkBooleanType( true );
        }
    );
}

function test_zz_models_checkNumberType( ){

    assertThrows(

        'Function must throw error',
        function( ){

            zz.models.checkNumberType( 'string' );
        }
    );

    assertNotThrows(

        'Function must throw error',
        function( ){

            zz.models.checkNumberType( 1 );
        }
    );
}

function test_zz_models_checkStringType( ){

    assertThrows(

        'Function must throw error',
        function( ){

            zz.models.checkStringType( 1 );
        }
    );

    assertNotThrows(

        'Function must throw error',
        function( ){

            zz.models.checkStringType( 'string' );
        }
    );
}