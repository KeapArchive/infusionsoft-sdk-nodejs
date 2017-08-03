'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

module.exports.applyTagsToContactIdUsingPOST = function applyTagsToContactIdUsingPOST (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  var tagIds = req.swagger.params['tagIds'].value;
  Contact.applyTagsToContactIdUsingPOST(contactId,tagIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createContactUsingPOST = function createContactUsingPOST (req, res, next) {
  var contact = req.swagger.params['contact'].value;
  Contact.createContactUsingPOST(contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createOrUpdateContactUsingPUT = function createOrUpdateContactUsingPUT (req, res, next) {
  var contact = req.swagger.params['contact'].value;
  Contact.createOrUpdateContactUsingPUT(contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteContactUsingDELETE = function deleteContactUsingDELETE (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  Contact.deleteContactUsingDELETE(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAppliedTagsUsingGET = function listAppliedTagsUsingGET (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Contact.listAppliedTagsUsingGET(contactId,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listContactsUsingGET = function listContactsUsingGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var email = req.swagger.params['email'].value;
  var given_name = req.swagger.params['given_name'].value;
  var family_name = req.swagger.params['family_name'].value;
  var order = req.swagger.params['order'].value;
  Contact.listContactsUsingGET(limit,offset,email,given_name,family_name,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCustomFieldsUsingGET = function listCustomFieldsUsingGET (req, res, next) {
  Contact.listCustomFieldsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadUsingGET = function loadUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var optional_properties = req.swagger.params['optional_properties'].value;
  Contact.loadUsingGET(id,optional_properties)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTagsFromContactUsingDELETE = function removeTagsFromContactUsingDELETE (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  var tagId = req.swagger.params['tagId'].value;
  Contact.removeTagsFromContactUsingDELETE(contactId,tagId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTagsFromContactUsingDELETE_1 = function removeTagsFromContactUsingDELETE_1 (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  var ids = req.swagger.params['ids'].value;
  Contact.removeTagsFromContactUsingDELETE_1(contactId,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContactUsingPATCH = function updateContactUsingPATCH (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  var contact = req.swagger.params['contact'].value;
  Contact.updateContactUsingPATCH(contactId,contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
