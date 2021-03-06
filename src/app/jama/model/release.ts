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

export interface Release {
	id: number;

	name: string;

	description: string;

	/**
	 * ID of a project
	 */
	project: number;

	releaseDate: Date;

	active: boolean;

	archived: boolean;

	itemCount: number;

}


