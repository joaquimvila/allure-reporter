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

export interface TestRunGenerationConfig {
	/**
	 * The Test Group IDs of the Test Groups from which you would like to generate Test Runs. Do not specify anything to include all groups.
	 */
	testGroupsToInclude?: Array<number>;

	/**
	 * Only valid after generating the first Test Cycle, you may choose to only generate Test Runs that were a specified status in the previous cycle. Do not specify anything to include all statuses
	 */
	testRunStatusesToInclude?: Array<TestRunGenerationConfig.TestRunStatusesToIncludeEnum>;

}

export namespace TestRunGenerationConfig {
	export type TestRunStatusesToIncludeEnum = 'PASSED' | 'NOT_RUN' | 'INPROGRESS' | 'FAILED' | 'BLOCKED';
}

