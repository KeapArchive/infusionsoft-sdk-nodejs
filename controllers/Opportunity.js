'use strict';

var utils = require('../utils/writer.js');
var Opportunity = require('../service/OpportunityService');

module.exports.createOpportunityUsingPOST = function createOpportunityUsingPOST (req, res, next) {
  var opportunity = req.swagger.params['opportunity'].value;
  Opportunity.createOpportunityUsingPOST(opportunity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpportunityUsingGET = function getOpportunityUsingGET (req, res, next) {
  var opportunityId = req.swagger.params['opportunityId'].value;
  Opportunity.getOpportunityUsingGET(opportunityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStagePipelineUsingGET = function getStagePipelineUsingGET (req, res, next) {
  Opportunity.getStagePipelineUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listOpportunitiesUsingGET = function listOpportunitiesUsingGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var user_id = req.swagger.params['user_id'].value;
  var stage_id = req.swagger.params['stage_id'].value;
  var search_term = req.swagger.params['search_term'].value;
  var order = req.swagger.params['order'].value;
  Opportunity.listOpportunitiesUsingGET(limit,offset,user_id,stage_id,search_term,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceOpportunityUsingPUT = function replaceOpportunityUsingPUT (req, res, next) {
  var opportunity = req.swagger.params['opportunity'].value;
  Opportunity.replaceOpportunityUsingPUT(opportunity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOpportunityUsingPATCH = function updateOpportunityUsingPATCH (req, res, next) {
  var opportunityId = req.swagger.params['opportunityId'].value;
  var opportunity = req.swagger.params['opportunity'].value;
  Opportunity.updateOpportunityUsingPATCH(opportunityId,opportunity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
