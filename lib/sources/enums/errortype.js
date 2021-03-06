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

goog.provide( 'zz.models.enums.ErrorType' );

/**
 * Enum for model errors messages.
 * @enum {string}
 */
zz.models.enums.ErrorType = {

	DATAROW_TYPE_UNDEFINED: 'Dataset row type is undefined.',
	DATAROW_SCHEMA_UNDEFINED: 'Dataset row schema is undefined.',
	FIELD_EXIST: 'Field already exist.',
	FIELD_REQUIRED: 'Missing required field.',
	TYPE_MISMATCH_BOOLEAN: 'Type mismatch: boolean expected.',
	TYPE_MISMATCH_NUMBER: 'Type mismatch: number expected.',
	TYPE_MISMATCH_STRING: 'Type mismatch: string expected.',
	TYPE_MISMATCH_DATASET: 'Type mismatch: zz.models.Dataset child expected.',
	TYPE_MISMATCH_DATASET_RESET: 'Type mismatch. Can\'t reset field with dataset type.'
};