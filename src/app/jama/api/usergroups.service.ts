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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import '../rxjs-operators';

import { AbstractRestResponse } from '../model/abstractRestResponse';
import { CreatedResponse } from '../model/createdResponse';
import { RequestGroupUser } from '../model/requestGroupUser';
import { RequestUserGroup } from '../model/requestUserGroup';
import { UserDataListWrapper } from '../model/userDataListWrapper';
import { UserGroupDataListWrapper } from '../model/userGroupDataListWrapper';
import { UserGroupDataWrapper } from '../model/userGroupDataWrapper';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class UsergroupsService {

	protected basePath = 'https://jama.systelab.net/contour/rest/latest';
	public defaultHeaders = new HttpHeaders();
	public configuration = new Configuration();

	constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
		if (basePath) {
			this.basePath = basePath;
		}
		if (configuration) {
			this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
		}
	}

	/**
	 * @param consumes string[] mime-types
	 * @return true: consumes contains 'multipart/form-data', false: otherwise
	 */
	private canConsumeForm(consumes: string[]): boolean {
		const form = 'multipart/form-data';
		for (let consume of consumes) {
			if (form === consume) {
				return true;
			}
		}
		return false;
	}

	public isJsonMime(mime: string): boolean {
		const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
		return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
	}

	/**
	 * Create a new user group
	 *
	 * @param body
	 */
	public addUserGroup(body: RequestUserGroup): Observable<CreatedResponse> {
		if (body === null || body === undefined) {
			throw new Error('Required parameter body was null or undefined when calling addUserGroup.');
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.post<any>(`${this.configuration.basePath}/usergroups`, body, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Add an existing user to the user group with the specified ID
	 *
	 * @param body
	 * @param id
	 */
	public addUserToGroup(body: RequestGroupUser, id: number): Observable<CreatedResponse> {
		if (body === null || body === undefined) {
			throw new Error('Required parameter body was null or undefined when calling addUserToGroup.');
		}
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling addUserToGroup.');
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.post<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}/users`, body, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Delete the user group with the specified ID
	 *
	 * @param id
	 */
	public deleteItem(id: number): Observable<AbstractRestResponse> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling deleteItem.');
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.delete<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}`, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Get the user group with the specified ID
	 *
	 * @param id
	 * @param include Links to include as full objects in the linked map
	 */
	public getGroup(id: number, include?: Array<string>): Observable<UserGroupDataWrapper> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling getGroup.');
		}

		let queryParameters = new HttpParams();
		if (include) {
			include.forEach((element) => {
				queryParameters = queryParameters.append('include', <any>element);
			})
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.get<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Get all users for the user group with the specified ID
	 *
	 * @param id
	 * @param startAt
	 * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
	 * @param include Links to include as full objects in the linked map
	 */
	public getGroupUsers(id: number, startAt?: number, maxResults?: number, include?: Array<string>): Observable<UserDataListWrapper> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling getGroupUsers.');
		}

		let queryParameters = new HttpParams();
		if (startAt !== undefined) {
			queryParameters = queryParameters.set('startAt', <any>startAt);
		}
		if (maxResults !== undefined) {
			queryParameters = queryParameters.set('maxResults', <any>maxResults);
		}
		if (include) {
			include.forEach((element) => {
				queryParameters = queryParameters.append('include', <any>element);
			})
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.get<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}/users`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Get all user groups
	 *
	 * @param project
	 * @param startAt
	 * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
	 * @param include Links to include as full objects in the linked map
	 */
	public getUsers(project?: number, startAt?: number, maxResults?: number, include?: Array<string>): Observable<UserGroupDataListWrapper> {

		let queryParameters = new HttpParams();
		if (project !== undefined) {
			queryParameters = queryParameters.set('project', <any>project);
		}
		if (startAt !== undefined) {
			queryParameters = queryParameters.set('startAt', <any>startAt);
		}
		if (maxResults !== undefined) {
			queryParameters = queryParameters.set('maxResults', <any>maxResults);
		}
		if (include) {
			include.forEach((element) => {
				queryParameters = queryParameters.append('include', <any>element);
			})
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.get<any>(`${this.configuration.basePath}/usergroups`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Remove an existing user from the user group with the specified ID
	 *
	 * @param userId
	 * @param id
	 */
	public removeUserFromGroup(userId: number, id: number): Observable<AbstractRestResponse> {
		if (userId === null || userId === undefined) {
			throw new Error('Required parameter userId was null or undefined when calling removeUserFromGroup.');
		}
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling removeUserFromGroup.');
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.delete<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}/users/${encodeURIComponent(String(userId))}`, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Update the user group with the specified ID
	 *
	 * @param body
	 * @param id
	 */
	public updateUserGroup(body: RequestUserGroup, id: number): Observable<AbstractRestResponse> {
		if (body === null || body === undefined) {
			throw new Error('Required parameter body was null or undefined when calling updateUserGroup.');
		}
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling updateUserGroup.');
		}

		let headers = this.defaultHeaders;

		// authentication (basic) required
		if (this.configuration.username || this.configuration.password) {
			headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
		}

		// authentication (oauth2) required
		if (this.configuration.accessToken) {
			let accessToken = typeof this.configuration.accessToken === 'function'
				? this.configuration.accessToken()
				: this.configuration.accessToken;
			headers = headers.set('Authorization', 'Bearer ' + accessToken);
		}

		return this.httpClient.put<any>(`${this.configuration.basePath}/usergroups/${encodeURIComponent(String(id))}`, body, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

}
