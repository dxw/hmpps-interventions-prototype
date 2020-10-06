/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BasicSentencePlanDto', 'model/FullSentencePlanDto', 'model/FullSentencePlanSummaryDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BasicSentencePlanDto'), require('../model/FullSentencePlanDto'), require('../model/FullSentencePlanSummaryDto'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.SentencePlansApi = factory(root.HmppsOffenderAssessmentApi.ApiClient, root.HmppsOffenderAssessmentApi.BasicSentencePlanDto, root.HmppsOffenderAssessmentApi.FullSentencePlanDto, root.HmppsOffenderAssessmentApi.FullSentencePlanSummaryDto);
  }
}(this, function(ApiClient, BasicSentencePlanDto, FullSentencePlanDto, FullSentencePlanSummaryDto) {
  'use strict';

  /**
   * SentencePlans service.
   * @module api/SentencePlansApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SentencePlansApi. 
   * @alias module:api/SentencePlansApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * getFullSentencePlanForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Number} oasysSetPk oasysSetPk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FullSentencePlanDto} and HTTP response
     */
    this.getFullSentencePlanForOffenderUsingGETWithHttpInfo = function(identity, identityType, oasysSetPk) {
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getFullSentencePlanForOffenderUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getFullSentencePlanForOffenderUsingGET");
      }

      // verify the required parameter 'oasysSetPk' is set
      if (oasysSetPk === undefined || oasysSetPk === null) {
        throw new Error("Missing the required parameter 'oasysSetPk' when calling getFullSentencePlanForOffenderUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType,
        'oasysSetPk': oasysSetPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = FullSentencePlanDto;

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/fullSentencePlans/{oasysSetPk}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getFullSentencePlanForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Number} oasysSetPk oasysSetPk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FullSentencePlanDto}
     */
    this.getFullSentencePlanForOffenderUsingGET = function(identity, identityType, oasysSetPk) {
      return this.getFullSentencePlanForOffenderUsingGETWithHttpInfo(identity, identityType, oasysSetPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getFullSentencePlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FullSentencePlanDto>} and HTTP response
     */
    this.getFullSentencePlansForOffenderUsingGETWithHttpInfo = function(identity, identityType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getFullSentencePlansForOffenderUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getFullSentencePlansForOffenderUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType
      };
      var queryParams = {
        'assessmentStatus': opts['assessmentStatus'],
        'assessmentType': opts['assessmentType'],
        'historicStatus': opts['historicStatus'],
        'voided': opts['voided'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [FullSentencePlanDto];

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/fullSentencePlans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getFullSentencePlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FullSentencePlanDto>}
     */
    this.getFullSentencePlansForOffenderUsingGET = function(identity, identityType, opts) {
      return this.getFullSentencePlansForOffenderUsingGETWithHttpInfo(identity, identityType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getLatestBasicSentencePlanForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BasicSentencePlanDto} and HTTP response
     */
    this.getLatestBasicSentencePlanForOffenderUsingGETWithHttpInfo = function(identity, identityType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getLatestBasicSentencePlanForOffenderUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getLatestBasicSentencePlanForOffenderUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType
      };
      var queryParams = {
        'assessmentStatus': opts['assessmentStatus'],
        'assessmentType': opts['assessmentType'],
        'historicStatus': opts['historicStatus'],
        'voided': opts['voided'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = BasicSentencePlanDto;

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/basicSentencePlans/latest', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getLatestBasicSentencePlanForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BasicSentencePlanDto}
     */
    this.getLatestBasicSentencePlanForOffenderUsingGET = function(identity, identityType, opts) {
      return this.getLatestBasicSentencePlanForOffenderUsingGETWithHttpInfo(identity, identityType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getSentenceBasicPlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BasicSentencePlanDto>} and HTTP response
     */
    this.getSentenceBasicPlansForOffenderUsingGETWithHttpInfo = function(identity, identityType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getSentenceBasicPlansForOffenderUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getSentenceBasicPlansForOffenderUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType
      };
      var queryParams = {
        'assessmentStatus': opts['assessmentStatus'],
        'assessmentType': opts['assessmentType'],
        'historicStatus': opts['historicStatus'],
        'voided': opts['voided'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [BasicSentencePlanDto];

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/basicSentencePlans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getSentenceBasicPlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BasicSentencePlanDto>}
     */
    this.getSentenceBasicPlansForOffenderUsingGET = function(identity, identityType, opts) {
      return this.getSentenceBasicPlansForOffenderUsingGETWithHttpInfo(identity, identityType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getSummarySentencePlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FullSentencePlanSummaryDto>} and HTTP response
     */
    this.getSummarySentencePlansForOffenderUsingGETWithHttpInfo = function(identity, identityType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getSummarySentencePlansForOffenderUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getSummarySentencePlansForOffenderUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType
      };
      var queryParams = {
        'assessmentStatus': opts['assessmentStatus'],
        'assessmentType': opts['assessmentType'],
        'historicStatus': opts['historicStatus'],
        'voided': opts['voided'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [FullSentencePlanSummaryDto];

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/fullSentencePlans/summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getSummarySentencePlansForOffender
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @param {Object} opts Optional parameters
     * @param {String} opts.assessmentStatus assessmentStatus
     * @param {String} opts.assessmentType assessmentType
     * @param {String} opts.historicStatus historicStatus
     * @param {Boolean} opts.voided voided
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FullSentencePlanSummaryDto>}
     */
    this.getSummarySentencePlansForOffenderUsingGET = function(identity, identityType, opts) {
      return this.getSummarySentencePlansForOffenderUsingGETWithHttpInfo(identity, identityType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));