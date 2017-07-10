/**
 * Created by sumragen on 05.07.17.
 */
import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import {ApiUrlDict} from './api-url-dict';

import {Request} from './request.model';
import {RequestConfig} from './request-config.model';

@Injectable()
export class ApiResolverService {
  constructor(private apiUrlDict: ApiUrlDict) {
  }

  buildUrl(url: string, params: object[]): string {
    let urlParams = '';
    _.each(params, function (value: string, key: string) {
      if (_.isNull(value) || _.isUndefined(value)) {
        return;
      }
      urlParams += `${key}=${encodeURIComponent(value)}&`;
    });
    if (!_.isEmpty(urlParams)) {
      // remove last '&' char
      urlParams = urlParams.substring(0, urlParams.length - 1);
      url += '?' + urlParams;
    }
    return url;
  }

  get(apiName: string, conf?: RequestConfig): { url: string, request: Request } {
    const apiEndpoint = this.apiUrlDict[apiName].apply(null, (conf || {endpointParams: null}).endpointParams);
    if (!!conf && !!conf.body) {
      apiEndpoint['body'] = conf.body;
    }
    const url = apiEndpoint.url;
    const request = Object.assign({}, apiEndpoint);
    delete request.url;
    return {url: this.buildUrl(url, (conf || {params: []}).params), request: request};
  }
}
