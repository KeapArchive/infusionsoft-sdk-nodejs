'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.createTaskUsingPOST = function createTaskUsingPOST (req, res, next) {
  var task = req.swagger.params['task'].value;
  Task.createTaskUsingPOST(task)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadTaskUsingGET = function loadTaskUsingGET (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.loadTaskUsingGET(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTaskUsingDELETE = function removeTaskUsingDELETE (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.removeTaskUsingDELETE(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceTaskUsingPUT = function replaceTaskUsingPUT (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  var task = req.swagger.params['task'].value;
  Task.replaceTaskUsingPUT(taskId,task)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchUsingGET_4 = function searchUsingGET_4 (req, res, next) {
  var contact_id = req.swagger.params['contact_id'].value;
  var has_due_date = req.swagger.params['has_due_date'].value;
  var user_id = req.swagger.params['user_id'].value;
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var completed = req.swagger.params['completed'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var order = req.swagger.params['order'].value;
  Task.searchUsingGET_4(contact_id,has_due_date,user_id,since,until,completed,limit,offset,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncUsingGET_2 = function syncUsingGET_2 (req, res, next) {
  var sync_token = req.swagger.params['sync_token'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Task.syncUsingGET_2(sync_token,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksUsingGET = function tasksUsingGET (req, res, next) {
  var contact_id = req.swagger.params['contact_id'].value;
  var has_due_date = req.swagger.params['has_due_date'].value;
  var user_id = req.swagger.params['user_id'].value;
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var completed = req.swagger.params['completed'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var order = req.swagger.params['order'].value;
  Task.tasksUsingGET(contact_id,has_due_date,user_id,since,until,completed,limit,offset,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTaskUsingPATCH = function updateTaskUsingPATCH (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  var task = req.swagger.params['task'].value;
  Task.updateTaskUsingPATCH(taskId,task)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
