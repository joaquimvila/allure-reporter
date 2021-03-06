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

import { AllowedResource } from './allowedResource';

export interface TestRun {
	id: number;

	documentKey: string;

	globalId: string;

	/**
	 * ID of a project
	 */
	project: number;

	/**
	 * ID of an item type
	 */
	itemType: number;

	createdDate: Date;

	modifiedDate: Date;

	lastActivityDate: Date;

	/**
	 * ID of a user
	 */
	createdBy: number;

	/**
	 * ID of a user
	 */
	modifiedBy: number;

	/**
	 * The version of the test case at the time of test run creation
	 */
	testCaseVersionNumber: number;

	/**
	 * The current version of the test case that the test run is based on
	 */
	testCaseCurrentVersionNumber?: number;

	/**
	 * The sort order within the test group at the time of test cycle creation
	 */
	sortOrderFromTestGroup: number;

	/**
	 * ID of a test cycle and ID of a test group
	 */
	testGroup: Array<number>;

	/**
	 * A set of resources and allowed permissions
	 */
	resources: { [key: string]: AllowedResource; };

	/**
	 * A map of field names to field values e.g. {\"name\":\"Sample Item\", \"status\": 292, \"release\": 2, \"assigned\": 23}
	 */
	fields: { [key: string]: any; };

}


