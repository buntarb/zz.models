/**
 * @fileoverview Provide zz.models.enums.ErrorType.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
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