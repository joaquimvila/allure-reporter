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

import { Baseline } from './baseline';
import { Link } from './link';
import { MetaListWrapper } from './metaListWrapper';

export interface BaselineDataListWrapper {
	data?: Array<Baseline>;

	links?: { [key: string]: Link; };

	linked?: { [key: string]: { [key: string]: any; }; };

	meta?: MetaListWrapper;

}


