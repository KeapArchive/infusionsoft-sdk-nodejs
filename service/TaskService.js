'use strict';


/**
 * Create a Task
 * Creates a new task as the authenticated user. NB: Contact must contain at least one item in the fields `title` and `due_date`. All other attributes are optional
 *
 * task Task task
 * returns Task
 **/
exports.createTaskUsingPOST = function(task) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 5,
  "contact" : {
    "last_name" : "last_name",
    "id" : 6,
    "first_name" : "first_name",
    "email" : "email"
  },
  "modification_date" : "modification_date",
  "due_date" : "due_date",
  "description" : "description",
  "completion_date" : "completion_date",
  "completed" : true,
  "creation_date" : "creation_date",
  "priority" : 1,
  "title" : "title",
  "type" : "type",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a Task
 * Retrieves a single task
 *
 * taskId String taskId
 * returns Task
 **/
exports.loadTaskUsingGET = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 5,
  "contact" : {
    "last_name" : "last_name",
    "id" : 6,
    "first_name" : "first_name",
    "email" : "email"
  },
  "modification_date" : "modification_date",
  "due_date" : "due_date",
  "description" : "description",
  "completion_date" : "completion_date",
  "completed" : true,
  "creation_date" : "creation_date",
  "priority" : 1,
  "title" : "title",
  "type" : "type",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Task
 * Permanently deletes a task
 *
 * taskId String taskId
 * no response value expected for this operation
 **/
exports.removeTaskUsingDELETE = function(taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace a Task
 * Replaces a task with the values provided in the request
 *
 * taskId String taskId
 * task Task task
 * returns Task
 **/
exports.replaceTaskUsingPUT = function(taskId,task) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 5,
  "contact" : {
    "last_name" : "last_name",
    "id" : 6,
    "first_name" : "first_name",
    "email" : "email"
  },
  "modification_date" : "modification_date",
  "due_date" : "due_date",
  "description" : "description",
  "completion_date" : "completion_date",
  "completed" : true,
  "creation_date" : "creation_date",
  "priority" : 1,
  "title" : "title",
  "type" : "type",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search Tasks
 * Retrieves Tasks belonging to the authenticated user using the specified search criteria
 *
 * contact_id Long Returns tasks for the provided contact id (optional)
 * has_due_date Boolean Returns tasks that have an 'action date' when set to true (optional)
 * user_id Long Returns tasks for the provided user id (optional)
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * completed Boolean Sets completed status of items to return (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * order String Attribute to order items by (optional)
 * returns TaskList
 **/
exports.searchUsingGET_4 = function(contact_id,has_due_date,user_id,since,until,completed,limit,offset,order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 0,
  "tasks" : [ {
    "user_id" : 5,
    "contact" : {
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "due_date" : "due_date",
    "description" : "description",
    "completion_date" : "completion_date",
    "completed" : true,
    "creation_date" : "creation_date",
    "priority" : 1,
    "title" : "title",
    "type" : "type",
    "url" : "url"
  }, {
    "user_id" : 5,
    "contact" : {
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "due_date" : "due_date",
    "description" : "description",
    "completion_date" : "completion_date",
    "completed" : true,
    "creation_date" : "creation_date",
    "priority" : 1,
    "title" : "title",
    "type" : "type",
    "url" : "url"
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
 * Retrieve Synced Tasks
 * The Sync endpoint returns a set of tasks that have been updated or created since the last result set was retrieved, minus any tasks that have been deleted.
 *
 * sync_token String sync_token (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns TaskStatusList
 **/
exports.syncUsingGET_2 = function(sync_token,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "task_statuses" : [ {
    "task" : {
      "user_id" : 5,
      "contact" : {
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "due_date" : "due_date",
      "description" : "description",
      "completion_date" : "completion_date",
      "completed" : true,
      "creation_date" : "creation_date",
      "priority" : 1,
      "title" : "title",
      "type" : "type",
      "url" : "url"
    },
    "status" : "CREATED"
  }, {
    "task" : {
      "user_id" : 5,
      "contact" : {
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "due_date" : "due_date",
      "description" : "description",
      "completion_date" : "completion_date",
      "completed" : true,
      "creation_date" : "creation_date",
      "priority" : 1,
      "title" : "title",
      "type" : "type",
      "url" : "url"
    },
    "status" : "CREATED"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Tasks
 * Retrieves a list of all tasks using the specified search criteria
 *
 * contact_id Long contact_id (optional)
 * has_due_date Boolean has_due_date (optional)
 * user_id Long user_id (optional)
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * completed Boolean Sets completed status of items to return (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * order String Attribute to order items by (optional)
 * returns TaskList
 **/
exports.tasksUsingGET = function(contact_id,has_due_date,user_id,since,until,completed,limit,offset,order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 0,
  "tasks" : [ {
    "user_id" : 5,
    "contact" : {
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "due_date" : "due_date",
    "description" : "description",
    "completion_date" : "completion_date",
    "completed" : true,
    "creation_date" : "creation_date",
    "priority" : 1,
    "title" : "title",
    "type" : "type",
    "url" : "url"
  }, {
    "user_id" : 5,
    "contact" : {
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "due_date" : "due_date",
    "description" : "description",
    "completion_date" : "completion_date",
    "completed" : true,
    "creation_date" : "creation_date",
    "priority" : 1,
    "title" : "title",
    "type" : "type",
    "url" : "url"
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
 * Update a Task
 * Updates a task with only the values provided in the request
 *
 * taskId String taskId
 * task Task task
 * returns Task
 **/
exports.updateTaskUsingPATCH = function(taskId,task) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 5,
  "contact" : {
    "last_name" : "last_name",
    "id" : 6,
    "first_name" : "first_name",
    "email" : "email"
  },
  "modification_date" : "modification_date",
  "due_date" : "due_date",
  "description" : "description",
  "completion_date" : "completion_date",
  "completed" : true,
  "creation_date" : "creation_date",
  "priority" : 1,
  "title" : "title",
  "type" : "type",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

