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

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class FilesService {

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
	 * Download attachment file from the attachment with the specified Jama URL
	 *
	 * @param url
	 */
	public downloadFile(url: string): Observable<{}> {
		if (url === null || url === undefined) {
			throw new Error('Required parameter url was null or undefined when calling downloadFile.');
		}

		let queryParameters = new HttpParams();
		if (url !== undefined) {
			queryParameters = queryParameters.set('url', <any>url);
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

		return this.httpClient.get<any>(`${this.basePath}/files`, {
			params:          queryParameters,
			headers:         headers,
			withCredentials: this.configuration.withCredentials,
		});
	}

}
