'use strict';


/**
 * Create an Opportunity
 * Creates a new opportunity as the authenticated user. NB: Opportunity must contain values for `opportunity_title`, `contact`, and `stage`.
 *
 * opportunity Opportunity opportunity (optional)
 * returns Opportunity
 **/
exports.createOpportunityUsingPOST = function(opportunity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "opportunity_notes" : "opportunity_notes",
  "opportunity_title" : "opportunity_title",
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
  "next_action_notes" : "next_action_notes",
  "stage" : {
    "reasons" : [ "reasons", "reasons" ],
    "name" : "name",
    "details" : {
      "stage_order" : 4,
      "probability" : 2,
      "target_num_days" : 7,
      "check_list_items" : [ {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      }, {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      } ]
    },
    "id" : 1
  },
  "next_action_date" : "2000-01-23T04:56:07.000+00:00",
  "contact" : {
    "company_name" : "company_name",
    "last_name" : "last_name",
    "phone_number" : "phone_number",
    "id" : 6,
    "first_name" : "first_name",
    "job_title" : "job_title",
    "email" : "email"
  },
  "projected_revenue_low" : 2.3021358869347655,
  "include_in_forecast" : 5,
  "id" : 1,
  "projected_revenue_high" : 5.637376656633329,
  "user" : {
    "last_name" : "last_name",
    "id" : 1,
    "first_name" : "first_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve an Opportunity
 * Retrives a single opportunity
 *
 * opportunityId Long opportunityId
 * returns Opportunity
 **/
exports.getOpportunityUsingGET = function(opportunityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "opportunity_notes" : "opportunity_notes",
  "opportunity_title" : "opportunity_title",
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
  "next_action_notes" : "next_action_notes",
  "stage" : {
    "reasons" : [ "reasons", "reasons" ],
    "name" : "name",
    "details" : {
      "stage_order" : 4,
      "probability" : 2,
      "target_num_days" : 7,
      "check_list_items" : [ {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      }, {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      } ]
    },
    "id" : 1
  },
  "next_action_date" : "2000-01-23T04:56:07.000+00:00",
  "contact" : {
    "company_name" : "company_name",
    "last_name" : "last_name",
    "phone_number" : "phone_number",
    "id" : 6,
    "first_name" : "first_name",
    "job_title" : "job_title",
    "email" : "email"
  },
  "projected_revenue_low" : 2.3021358869347655,
  "include_in_forecast" : 5,
  "id" : 1,
  "projected_revenue_high" : 5.637376656633329,
  "user" : {
    "last_name" : "last_name",
    "id" : 1,
    "first_name" : "first_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Opportunity Stage Pipeline
 * Retrieves a list of all opportunity stages with pipeline details
 *
 * returns List
 **/
exports.getStagePipelineUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "stage_order" : 1,
  "stage_id" : 6,
  "stage_name" : "stage_name",
  "is_default" : true,
  "end_stage" : true,
  "stage_count" : 0
}, {
  "stage_order" : 1,
  "stage_id" : 6,
  "stage_name" : "stage_name",
  "is_default" : true,
  "end_stage" : true,
  "stage_count" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Opportunities
 * Retrieves a list of all opportunities
 *
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * user_id Long Returns opportunities for the provided user id (optional)
 * stage_id Long Returns opportunities for the provided stage id (optional)
 * search_term String Returns opportunities that match any of the contact's `given_name`, `family_name`, `company_name`, and `email_addresses` (searches `EMAIL1` only) fields as well as `opportunity_title` (optional)
 * order String Attribute to order items by (optional)
 * returns OpportunityList
 **/
exports.listOpportunitiesUsingGET = function(limit,offset,user_id,stage_id,search_term,order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 0,
  "opportunities" : [ {
    "last_updated" : "2000-01-23T04:56:07.000+00:00",
    "opportunity_notes" : "opportunity_notes",
    "opportunity_title" : "opportunity_title",
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
    "next_action_notes" : "next_action_notes",
    "stage" : {
      "reasons" : [ "reasons", "reasons" ],
      "name" : "name",
      "details" : {
        "stage_order" : 4,
        "probability" : 2,
        "target_num_days" : 7,
        "check_list_items" : [ {
          "instance_id" : 9,
          "done_date" : "2000-01-23T04:56:07.000+00:00",
          "description" : "description",
          "id" : 7,
          "required" : true,
          "item_order" : 3
        }, {
          "instance_id" : 9,
          "done_date" : "2000-01-23T04:56:07.000+00:00",
          "description" : "description",
          "id" : 7,
          "required" : true,
          "item_order" : 3
        } ]
      },
      "id" : 1
    },
    "next_action_date" : "2000-01-23T04:56:07.000+00:00",
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "phone_number" : "phone_number",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "projected_revenue_low" : 2.3021358869347655,
    "include_in_forecast" : 5,
    "id" : 1,
    "projected_revenue_high" : 5.637376656633329,
    "user" : {
      "last_name" : "last_name",
      "id" : 1,
      "first_name" : "first_name"
    }
  }, {
    "last_updated" : "2000-01-23T04:56:07.000+00:00",
    "opportunity_notes" : "opportunity_notes",
    "opportunity_title" : "opportunity_title",
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
    "next_action_notes" : "next_action_notes",
    "stage" : {
      "reasons" : [ "reasons", "reasons" ],
      "name" : "name",
      "details" : {
        "stage_order" : 4,
        "probability" : 2,
        "target_num_days" : 7,
        "check_list_items" : [ {
          "instance_id" : 9,
          "done_date" : "2000-01-23T04:56:07.000+00:00",
          "description" : "description",
          "id" : 7,
          "required" : true,
          "item_order" : 3
        }, {
          "instance_id" : 9,
          "done_date" : "2000-01-23T04:56:07.000+00:00",
          "description" : "description",
          "id" : 7,
          "required" : true,
          "item_order" : 3
        } ]
      },
      "id" : 1
    },
    "next_action_date" : "2000-01-23T04:56:07.000+00:00",
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "phone_number" : "phone_number",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "projected_revenue_low" : 2.3021358869347655,
    "include_in_forecast" : 5,
    "id" : 1,
    "projected_revenue_high" : 5.637376656633329,
    "user" : {
      "last_name" : "last_name",
      "id" : 1,
      "first_name" : "first_name"
    }
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
 * Replace an Opportunity
 * Replaces all values of a given opportunity
 *
 * opportunity Opportunity opportunity (optional)
 * returns Opportunity
 **/
exports.replaceOpportunityUsingPUT = function(opportunity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "opportunity_notes" : "opportunity_notes",
  "opportunity_title" : "opportunity_title",
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
  "next_action_notes" : "next_action_notes",
  "stage" : {
    "reasons" : [ "reasons", "reasons" ],
    "name" : "name",
    "details" : {
      "stage_order" : 4,
      "probability" : 2,
      "target_num_days" : 7,
      "check_list_items" : [ {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      }, {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      } ]
    },
    "id" : 1
  },
  "next_action_date" : "2000-01-23T04:56:07.000+00:00",
  "contact" : {
    "company_name" : "company_name",
    "last_name" : "last_name",
    "phone_number" : "phone_number",
    "id" : 6,
    "first_name" : "first_name",
    "job_title" : "job_title",
    "email" : "email"
  },
  "projected_revenue_low" : 2.3021358869347655,
  "include_in_forecast" : 5,
  "id" : 1,
  "projected_revenue_high" : 5.637376656633329,
  "user" : {
    "last_name" : "last_name",
    "id" : 1,
    "first_name" : "first_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an Opportunity
 * Updates an opportunity with only the values provided in the request.
 *
 * opportunityId Long opportunityId
 * opportunity Opportunity opportunity (optional)
 * returns Opportunity
 **/
exports.updateOpportunityUsingPATCH = function(opportunityId,opportunity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "opportunity_notes" : "opportunity_notes",
  "opportunity_title" : "opportunity_title",
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "estimated_close_date" : "2000-01-23T04:56:07.000+00:00",
  "next_action_notes" : "next_action_notes",
  "stage" : {
    "reasons" : [ "reasons", "reasons" ],
    "name" : "name",
    "details" : {
      "stage_order" : 4,
      "probability" : 2,
      "target_num_days" : 7,
      "check_list_items" : [ {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      }, {
        "instance_id" : 9,
        "done_date" : "2000-01-23T04:56:07.000+00:00",
        "description" : "description",
        "id" : 7,
        "required" : true,
        "item_order" : 3
      } ]
    },
    "id" : 1
  },
  "next_action_date" : "2000-01-23T04:56:07.000+00:00",
  "contact" : {
    "company_name" : "company_name",
    "last_name" : "last_name",
    "phone_number" : "phone_number",
    "id" : 6,
    "first_name" : "first_name",
    "job_title" : "job_title",
    "email" : "email"
  },
  "projected_revenue_low" : 2.3021358869347655,
  "include_in_forecast" : 5,
  "id" : 1,
  "projected_revenue_high" : 5.637376656633329,
  "user" : {
    "last_name" : "last_name",
    "id" : 1,
    "first_name" : "first_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

