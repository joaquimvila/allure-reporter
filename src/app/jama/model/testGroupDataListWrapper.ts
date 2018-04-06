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

import { Link } from './link';
import { MetaListWrapper } from './metaListWrapper';
import { TestGroup } from './testGroup';

export interface TestGroupDataListWrapper {
	data?: Array<TestGroup>;

	links?: { [key: string]: Link; };

	linked?: { [key: string]: { [key: string]: any; }; };

	meta?: MetaListWrapper;

}


