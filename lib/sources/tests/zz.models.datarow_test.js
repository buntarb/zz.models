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

goog.provide( 'zz.models.DatarowTest' );
goog.setTestOnly( 'zz.models.DatarowTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.models.testModel' );

var zz_models_Datarow_Dataset, zz_models_Datarow_Datarow;


function testDatarowConstructor( ){

    zz_models_Datarow_Dataset = new zz.models.models.testModel( );
    zz_models_Datarow_Dataset.createLast( );
    zz_models_Datarow_Datarow = zz_models_Datarow_Dataset.lastDatarow( );

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_Datarow_Datarow instanceof zz.models.Datarow
    );
}

function testDatarowMethodGetUid( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Datarow_Datarow.getUid )
    );

    assertEquals(

        'Expected Uid should be equal',
        zz_models_Datarow_Datarow.getUid( ),
        goog.getUid( zz_models_Datarow_Datarow )
    );
}