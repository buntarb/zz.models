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

goog.require( 'goog.events.EventTarget' );
goog.require( 'goog.events.EventHandler' );

goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.models.testModel' );

var zz_models_Dataset_dataset;


function testDatasetConstructor( ){

    zz_models_Dataset_dataset = new zz.models.models.testModel( );
    zz_models_Dataset_dataset.createLast( [ 'string', 1, true ]);

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

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset.serializeDatarow( 0 )[ 0 ] )
    );
    assertTrue(

        'Value must be a number',
        goog.isNumber( zz_models_Dataset_dataset.serializeDatarow( 0 )[ 1 ] )
    );
    assertTrue(

        'Value must be zzboolean',
        goog.isBoolean( zz_models_Dataset_dataset.serializeDatarow( 0 )[ 2 ] )
    );

    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset.serializeDatarow( 0, true ).string )
    );
    assertTrue(

        'Value must be a number',
        goog.isNumber( zz_models_Dataset_dataset.serializeDatarow( 0, true ).number )
    );
    assertTrue(

        'Value must be a boolean',
        goog.isBoolean( zz_models_Dataset_dataset.serializeDatarow( 0, true ).boolean )
    );
}

function testDatasetMethodSerializeDataset( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.serializeDataset )
    );

    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset.serializeDataset( )[ 0 ][ 0 ] )
    );
    assertTrue(

        'Value must be a number',
        goog.isNumber( zz_models_Dataset_dataset.serializeDataset( )[ 0 ][ 1 ] )
    );
    assertTrue(

        'Value must be a boolean',
        goog.isBoolean( zz_models_Dataset_dataset.serializeDataset( )[ 0 ][ 2 ] )
    );
}


function testDatasetMethodGetEventHandler( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.getEventHandler )
    );

    assertTrue(

        'Instance must be non-null and have the expected class',
        zz_models_Dataset_dataset.getEventHandler( ) instanceof goog.events.EventHandler
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

    var data = 'string1';
    zz_models_Dataset_dataset.createFirst( [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset[ 0 ].string,
        data
    );
    zz_models_Dataset_dataset.deleteFirst( );
}

function testDatasetMethodCreateLast( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.createLast )
    );

    var data = 'string1';
    zz_models_Dataset_dataset.createLast( [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset[ zz_models_Dataset_dataset.length - 1 ].string,
        data
    );
    zz_models_Dataset_dataset.deleteLast( );
}

function testDatasetMethodCreateAt( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.createAt )
    );
    var data = 'string1';
    var index = 1;
    zz_models_Dataset_dataset.createAt( index, [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset[ index ].string,
        data
    );
    zz_models_Dataset_dataset.deleteAt( index );
}

function testDatasetMethodDeleteFirst( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteFirst )
    );
    zz_models_Dataset_dataset.createFirst( );
    zz_models_Dataset_dataset.deleteFirst( );
    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset[ 0 ].string )
    );
}

function testDatasetMethodDeleteLast( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteLast )
    );

    zz_models_Dataset_dataset.createLast( );
    zz_models_Dataset_dataset.deleteLast( );
    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset[ zz_models_Dataset_dataset.length - 1 ].string )
    );
}

function testDatasetMethodDeleteCurrent( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteCurrent )
    );
    zz_models_Dataset_dataset.createLast( );
    zz_models_Dataset_dataset.deleteCurrent( );
    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset[ zz_models_Dataset_dataset.length - 1 ].string )
    );
}

function testDatasetMethodDeleteAt( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.deleteAt )
    );
    var index = 0;
    zz_models_Dataset_dataset.createAt( index );
    zz_models_Dataset_dataset.deleteAt( index );
    assertTrue(

        'Value must be a string',
        goog.isString( zz_models_Dataset_dataset[ 0 ].string )
    );
}

function testDatasetMethodFirstDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.firstDatarow )
    );
    var data = 'string1';
    zz_models_Dataset_dataset.createFirst( [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset.firstDatarow( ).string,
        data
    );
    zz_models_Dataset_dataset.deleteFirst( );
}

function testDatasetMethodLastDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.lastDatarow )
    );
    var data = 'string1';
    zz_models_Dataset_dataset.createLast( [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset.lastDatarow( ).string,
        data
    );
    zz_models_Dataset_dataset.deleteLast( );
}

function testDatasetMethodCurrentDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.currentDatarow )
    );

    var data = 'string1';
    zz_models_Dataset_dataset.createLast( [ data ] );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset.currentDatarow( ).string,
        data
    );
    zz_models_Dataset_dataset.deleteLast( );
}

function testDatasetMethodNextDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.nextDatarow )
    );
    zz_models_Dataset_dataset.createFirst( );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset.nextDatarow( ).string,
        'string'
    );
    zz_models_Dataset_dataset.deleteFirst( );
}

function testDatasetMethodPreviousDatarow( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.previousDatarow )
    );

    zz_models_Dataset_dataset.createLast( );
    assertEquals(

        'Values must be equal',
        zz_models_Dataset_dataset.previousDatarow( ).string,
        'string'
    );
    zz_models_Dataset_dataset.deleteLast( );
}

function testDatasetMethodDisposeInternal( ){

    assertTrue(

        'Method must be a function',
        goog.isFunction( zz_models_Dataset_dataset.disposeInternal )
    );

    zz_models_Dataset_dataset.disposeInternal( );
    assertUndefined(

        'Value must be true after run method disposeInternal',
        zz_models_Dataset_dataset.handler_
    );
}