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

import { RequestLocation } from './requestLocation';

export interface RequestItem {
	/**
	 * Must use override if you want to set this value on POST.
	 */
	globalId?: string;

	/**
	 * Only required when creating a new item (POST).
	 */
	project: number;

	/**
	 * ID of an item type
	 */
	itemType: number;

	/**
	 * ID of an item type
	 */
	childItemType: number;

	location: RequestLocation;

	/**
	 * A map of field names to field values e.g. {\"name\":\"Sample Item\", \"status\": 292, \"release\": 2, \"assigned\": 23}
	 */
	fields: { [key: string]: any; };

}


