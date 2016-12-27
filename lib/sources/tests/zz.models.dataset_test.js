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

goog.provide( 'zz.models.DatasetTest' );
goog.setTestOnly( 'zz.models.DatasetTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.models.Dataset' );
goog.require( 'goog.events.EventTarget' );
goog.require( 'zz.models.models.testModel' );

var zz_models_Dataset_dataset;


function testDatasetConstructor( ){

    zz_models_Dataset_dataset = new zz.models.models.testModel( );
    zz_models_Dataset_dataset.createLast( );

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_Dataset_dataset instanceof zz.models.Dataset
    );
}

function testDatasetInheritance( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_Dataset_dataset instanceof goog.events.EventTarget
    );
}

function testDatasetMethodGetUid( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.getUid )
    );
    assertEquals(

        'Expected Uid should be equal',
        zz_models_Dataset_dataset.getUid( ),
        goog.getUid( zz_models_Dataset_dataset )
    );
}

function testDatasetMethodDatarowConstructor( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.DatarowConstructor )
    );

    assertTrue(

        'Instance must be non-null and have the expected class',
        new zz_models_Dataset_dataset.DatarowConstructor( zz_models_Dataset_dataset ) instanceof

        zz.models.models.testModelDatarow
    );
}

function testDatasetMethodGetDatarowSchema( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.getDatarowSchema )
    );

    assertTrue(

        'Method must return an object',
        goog.isObject( zz_models_Dataset_dataset.getDatarowSchema( ) )
    );
}

function testDatasetMethodSerializeDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.serializeDatarow )
    );
    assertTrue(

        'Method must return an array',
        goog.isArray( zz_models_Dataset_dataset.serializeDatarow( 0 ) )
    );

    assertTrue(

        'Method must return an object',
        goog.isObject( zz_models_Dataset_dataset.serializeDatarow( 0, {} ) )
    );
}

function testDatasetMethodSerializeDataset( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.serializeDataset )
    );
}

function testDatasetMethodDisposeInternal( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.disposeInternal )
    );
}

function testDatasetMethodGetEventHandler( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.getEventHandler )
    );
}

function testDatasetMethodSyncView( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.syncView )
    );
}

function testDatasetMethodCreateFirst( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.createFirst )
    );
}

function testDatasetMethodCreateLast( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.createLast )
    );
}

function testDatasetMethodCreateAt( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.createAt )
    );
}

function testDatasetMethodDeleteFirst( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteFirst )
    );
}

function testDatasetMethodDeleteLast( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteLast )
    );
}

function testDatasetMethodDeleteCurrent( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteCurrent )
    );
}

function testDatasetMethodDeleteAt( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteAt )
    );
}

function testDatasetMethodFirstDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.firstDatarow )
    );
}

function testDatasetMethodLastDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.lastDatarow )
    );
}

function testDatasetMethodCurrentDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.currentDatarow )
    );
}

function testDatasetMethodNextDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.nextDatarow )
    );
}

function testDatasetMethodPreviousDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.previousDatarow )
    );
}