'use strict';

var utils = require('../utils/writer.js');
var Appointment = require('../service/AppointmentService');

module.exports.appointmentsUsingGET = function appointmentsUsingGET (req, res, next) {
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Appointment.appointmentsUsingGET(since,until,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAppointmentUsingPOST = function createAppointmentUsingPOST (req, res, next) {
  var appointment = req.swagger.params['appointment'].value;
  Appointment.createAppointmentUsingPOST(appointment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadAppointmentUsingGET = function loadAppointmentUsingGET (req, res, next) {
  var appointmentId = req.swagger.params['appointmentId'].value;
  Appointment.loadAppointmentUsingGET(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeAppointmentUsingDELETE = function removeAppointmentUsingDELETE (req, res, next) {
  var appointmentId = req.swagger.params['appointmentId'].value;
  Appointment.removeAppointmentUsingDELETE(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceAppointmentUsingPUT = function replaceAppointmentUsingPUT (req, res, next) {
  var appointmentId = req.swagger.params['appointmentId'].value;
  var appointment = req.swagger.params['appointment'].value;
  Appointment.replaceAppointmentUsingPUT(appointmentId,appointment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchUsingGET = function searchUsingGET (req, res, next) {
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Appointment.searchUsingGET(since,until,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncUsingGET = function syncUsingGET (req, res, next) {
  var sync_token = req.swagger.params['sync_token'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Appointment.syncUsingGET(sync_token,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAppointmentUsingPATCH = function updateAppointmentUsingPATCH (req, res, next) {
  var appointmentId = req.swagger.params['appointmentId'].value;
  var appointment = req.swagger.params['appointment'].value;
  Appointment.updateAppointmentUsingPATCH(appointmentId,appointment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
