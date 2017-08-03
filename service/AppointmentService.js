'use strict';


/**
 * List Appointments
 * Retrieves all appointments for the authenticated user
 *
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns AppointmentList
 **/
exports.appointmentsUsingGET = function(since,until,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "appointments" : [ {
    "end_date" : "2000-01-23T04:56:07.000+00:00",
    "remind_time" : 0,
    "description" : "description",
    "location" : "location",
    "title" : "title",
    "start_date" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "end_date" : "2000-01-23T04:56:07.000+00:00",
    "remind_time" : 0,
    "description" : "description",
    "location" : "location",
    "title" : "title",
    "start_date" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create an Appointment
 * Creates a new appointment as the authenticated user
 *
 * appointment Appointment appointment
 * returns Appointment
 **/
exports.createAppointmentUsingPOST = function(appointment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "remind_time" : 0,
  "description" : "description",
  "location" : "location",
  "title" : "title",
  "start_date" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve an Appointment
 * Retrieves a specific appointment belonging to the authenticated user
 *
 * appointmentId String appointmentId
 * returns Appointment
 **/
exports.loadAppointmentUsingGET = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "remind_time" : 0,
  "description" : "description",
  "location" : "location",
  "title" : "title",
  "start_date" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an Appointment
 * Deletes the specified appointment
 *
 * appointmentId String appointmentId
 * no response value expected for this operation
 **/
exports.removeAppointmentUsingDELETE = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace an Appointment
 * Replaces all values of a given appointment
 *
 * appointmentId String appointmentId
 * appointment Appointment appointment
 * returns Appointment
 **/
exports.replaceAppointmentUsingPUT = function(appointmentId,appointment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "remind_time" : 0,
  "description" : "description",
  "location" : "location",
  "title" : "title",
  "start_date" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search Appointments
 * Retrieves all appointments belonging to the authenticated user for the specified date range
 *
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns AppointmentList
 **/
exports.searchUsingGET = function(since,until,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "appointments" : [ {
    "end_date" : "2000-01-23T04:56:07.000+00:00",
    "remind_time" : 0,
    "description" : "description",
    "location" : "location",
    "title" : "title",
    "start_date" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "end_date" : "2000-01-23T04:56:07.000+00:00",
    "remind_time" : 0,
    "description" : "description",
    "location" : "location",
    "title" : "title",
    "start_date" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Synced Appointments
 * The Sync endpoint returns a set of appointments that have been updated or created since the last result set was retrieved, minus any appointments that have been deleted
 *
 * sync_token String sync_token (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns AppointmentStatusList
 **/
exports.syncUsingGET = function(sync_token,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 0,
  "appointment_statuses" : [ {
    "appointment" : {
      "end_date" : "2000-01-23T04:56:07.000+00:00",
      "remind_time" : 0,
      "description" : "description",
      "location" : "location",
      "title" : "title",
      "start_date" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : "CREATED"
  }, {
    "appointment" : {
      "end_date" : "2000-01-23T04:56:07.000+00:00",
      "remind_time" : 0,
      "description" : "description",
      "location" : "location",
      "title" : "title",
      "start_date" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : "CREATED"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an Appointment
 * Updates the provided values of a given appointment
 *
 * appointmentId String appointmentId
 * appointment Appointment appointment
 * returns Appointment
 **/
exports.updateAppointmentUsingPATCH = function(appointmentId,appointment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "remind_time" : 0,
  "description" : "description",
  "location" : "location",
  "title" : "title",
  "start_date" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

