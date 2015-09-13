'use strict';
angular.module('plipApiAdminApp')
  .config(function(RestangularProvider, configuration) {
  RestangularProvider.setBaseUrl(configuration.apiEndpoint);
  RestangularProvider.addRequestInterceptor(function(element, operation, what, url) {
    var params, wrapper;
    params = element;
    if (operation === 'post' || operation === 'put') {
      wrapper = {};
      wrapper[_.singularize(what)] = element;
      params = wrapper;
    }
    return params;
  });
  RestangularProvider.setDefaultHttpFields({
    cache: false
  });
  return RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;
    extractedData = {};
    if (operation === 'getList') {
      extractedData = data[what];
      extractedData.meta = data.meta;
    } else {
      extractedData = data;
    }
    return extractedData;
  });
});
