/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ItemTypeField {
	id: number;

	name: string;

	label: string;

	fieldType: ItemTypeField.FieldTypeEnum;

	readOnly: boolean;

	readOnlyAllowApiOverwrite?: boolean;

	required: boolean;

	triggerSuspect: boolean;

	synchronize: boolean;

	/**
	 * ID of a pick list
	 */
	pickList: number;

	textType: ItemTypeField.TextTypeEnum;

	/**
	 * ID of an item type
	 */
	itemType: number;

}

export namespace ItemTypeField {
	export type FieldTypeEnum =
		'INTEGER'
		| 'STRING'
		| 'TEXT'
		| 'LOOKUP'
		| 'DATE'
		| 'USER'
		| 'RELEASE'
		| 'BOOLEAN'
		| 'GROUP'
		| 'MULTI_LOOKUP'
		| 'DOCUMENT_TYPE_ITEM_LOOKUP'
		| 'URL_STRING'
		| 'DOCUMENT_TYPE'
		| 'PROJECT'
		| 'STEPS'
		| 'TIME'
		| 'TEST_RUN_STATUS'
		| 'DOCUMENT_TYPE_CATEGORY_ITEM_LOOKUP'
		| 'TEST_CASE_STATUS'
		| 'ACTIONS'
		| 'ROLLUP'
		| 'RELATIVE_DATE_RANGE'
		| 'CALCULATED'
		| 'RELATIONSHIP_STATUS';
	export type TextTypeEnum = 'TEXTAREA' | 'RICHTEXT' | 'KEY' | 'ATTACHMENT';
}


