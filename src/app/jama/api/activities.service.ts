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

import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

import { AbstractRestResponse } from '../model/abstractRestResponse';
import { ActivityDataListWrapper } from '../model/activityDataListWrapper';
import { ActivityDataWrapper } from '../model/activityDataWrapper';
import { ItemDataListWrapper } from '../model/itemDataListWrapper';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ActivitiesService {

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
	 * Get all activities in the project with the specified ID
	 *
	 * @param project
	 * @param eventType Event type to filter on. More than one event type can be chosen
	 * @param objectType Object type to filter on. More than one object type can be chosen
	 * @param itemType ID of item type to filter on. More than one item type can be chosen
	 * @param date Filter datetime fields after a single date or within a range of values. Provide one or two values in ISO8601 format (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
	 * @param deleteEvents Get item delete events only
	 * @param startAt
	 * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
	 * @param include Links to include as full objects in the linked map
	 */
	public getActivities(project: number, eventType?: Array<string>, objectType?: Array<string>, itemType?: Array<number>, date?: Array<string>, deleteEvents?: boolean, startAt?: number, maxResults?: number, include?: Array<string>): Observable<ActivityDataListWrapper> {
		if (project === null || project === undefined) {
			throw new Error('Required parameter project was null or undefined when calling getActivities.');
		}

		let queryParameters = new HttpParams();
		if (project !== undefined) {
			queryParameters = queryParameters.set('project', <any>project);
		}
		if (eventType) {
			eventType.forEach((element) => {
				queryParameters = queryParameters.append('eventType', <any>element);
			})
		}
		if (objectType) {
			objectType.forEach((element) => {
				queryParameters = queryParameters.append('objectType', <any>element);
			})
		}
		if (itemType) {
			itemType.forEach((element) => {
				queryParameters = queryParameters.append('itemType', <any>element);
			})
		}
		if (date) {
			date.forEach((element) => {
				queryParameters = queryParameters.append('date', <any>element);
			})
		}
		if (deleteEvents !== undefined) {
			queryParameters = queryParameters.set('deleteEvents', <any>deleteEvents);
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

		return this.httpClient.get<any>(`${this.basePath}/activities`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Get the activity with the specified ID
	 *
	 * @param activityId
	 * @param include Links to include as full objects in the linked map
	 */
	public getActivityById(activityId: number, include?: Array<string>): Observable<ActivityDataWrapper> {
		if (activityId === null || activityId === undefined) {
			throw new Error('Required parameter activityId was null or undefined when calling getActivityById.');
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

		return this.httpClient.get<any>(`${this.basePath}/activities/${encodeURIComponent(String(activityId))}`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Get all items affected by the activity with the specified ID
	 *
	 * @param activityId
	 * @param startAt
	 * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
	 * @param include Links to include as full objects in the linked map
	 */
	public getAffectedItems(activityId: number, startAt?: number, maxResults?: number, include?: Array<string>): Observable<ItemDataListWrapper> {
		if (activityId === null || activityId === undefined) {
			throw new Error('Required parameter activityId was null or undefined when calling getAffectedItems.');
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

		return this.httpClient.get<any>(`${this.basePath}/activities/${encodeURIComponent(String(activityId))}/affecteditems`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

	/**
	 * Restore item(s) associated with a delete activity.
	 *
	 * @param activityId
	 */
	public restoreItems(activityId: number): Observable<AbstractRestResponse> {
		if (activityId === null || activityId === undefined) {
			throw new Error('Required parameter activityId was null or undefined when calling restoreItems.');
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

		return this.httpClient.post<any>(`${this.basePath}/activities/${encodeURIComponent(String(activityId))}/restore`, {
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

}
