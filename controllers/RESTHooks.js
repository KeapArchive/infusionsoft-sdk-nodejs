'use strict';

var utils = require('../utils/writer.js');
var RESTHooks = require('../service/RESTHooksService');

module.exports.create_a_hook_subscription = function create_a_hook_subscription (req, res, next) {
  var restHookRequest = req.swagger.params['restHookRequest'].value;
  RESTHooks.create_a_hook_subscription(restHookRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_a_hook_subscription = function delete_a_hook_subscription (req, res, next) {
  var key = req.swagger.params['key'].value;
  RESTHooks.delete_a_hook_subscription(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list_hook_event_types = function list_hook_event_types (req, res, next) {
  RESTHooks.list_hook_event_types()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list_stored_hook_subscriptions = function list_stored_hook_subscriptions (req, res, next) {
  RESTHooks.list_stored_hook_subscriptions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve_a_hook_subscription = function retrieve_a_hook_subscription (req, res, next) {
  var key = req.swagger.params['key'].value;
  RESTHooks.retrieve_a_hook_subscription(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_a_hook_subscription = function update_a_hook_subscription (req, res, next) {
  var key = req.swagger.params['key'].value;
  var restHookRequest = req.swagger.params['restHookRequest'].value;
  RESTHooks.update_a_hook_subscription(key,restHookRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verify_a_hook_subscription = function verify_a_hook_subscription (req, res, next) {
  var key = req.swagger.params['key'].value;
  RESTHooks.verify_a_hook_subscription(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
