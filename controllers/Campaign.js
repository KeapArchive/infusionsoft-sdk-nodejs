'use strict';

var utils = require('../utils/writer.js');
var Campaign = require('../service/CampaignService');

module.exports.addContactsToCampaignSequenceUsingPOST = function addContactsToCampaignSequenceUsingPOST (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var sequenceId = req.swagger.params['sequenceId'].value;
  var contactId = req.swagger.params['contactId'].value;
  Campaign.addContactsToCampaignSequenceUsingPOST(campaignId,sequenceId,contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addContactsToCampaignSequenceUsingPOST_1 = function addContactsToCampaignSequenceUsingPOST_1 (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var sequenceId = req.swagger.params['sequenceId'].value;
  var ids = req.swagger.params['ids'].value;
  Campaign.addContactsToCampaignSequenceUsingPOST_1(campaignId,sequenceId,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCampaignsUsingGET = function getAllCampaignsUsingGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Campaign.getAllCampaignsUsingGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCampaignUsingGET = function getCampaignUsingGET (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var optional_properties = req.swagger.params['optional_properties'].value;
  Campaign.getCampaignUsingGET(campaignId,optional_properties)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeContactsFromCampaignSequenceUsingDELETE = function removeContactsFromCampaignSequenceUsingDELETE (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var sequenceId = req.swagger.params['sequenceId'].value;
  var contactId = req.swagger.params['contactId'].value;
  Campaign.removeContactsFromCampaignSequenceUsingDELETE(campaignId,sequenceId,contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeContactsFromCampaignSequenceUsingDELETE_1 = function removeContactsFromCampaignSequenceUsingDELETE_1 (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var sequenceId = req.swagger.params['sequenceId'].value;
  var ids = req.swagger.params['ids'].value;
  Campaign.removeContactsFromCampaignSequenceUsingDELETE_1(campaignId,sequenceId,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
