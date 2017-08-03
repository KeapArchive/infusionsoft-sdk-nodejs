'use strict';


/**
 * Add to Campaign Sequence
 * Adds a single contact to a campaign sequence
 *
 * campaignId Long campaignId
 * sequenceId Long sequenceId
 * contactId Long contactId
 * no response value expected for this operation
 **/
exports.addContactsToCampaignSequenceUsingPOST = function(campaignId,sequenceId,contactId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add Multiple to Campaign Sequence
 * Adds a list of contacts to a campaign sequence
 *
 * campaignId Long campaignId
 * sequenceId Long sequenceId
 * ids SetOfIds ids
 * no response value expected for this operation
 **/
exports.addContactsToCampaignSequenceUsingPOST_1 = function(campaignId,sequenceId,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Campaigns
 * Retrieves all campaigns for the authenticated user
 *
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns CampaignList
 **/
exports.getAllCampaignsUsingGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "campaigns" : [ {
    "error_message" : "error_message",
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "active_contact_count" : 0,
    "completed_contact_count" : 6,
    "id" : 9,
    "published_status" : true,
    "published_time_zone" : "published_time_zone",
    "sequences" : [ {
      "active_contact_count_completed" : 2,
      "historical_contact_count" : {
        "30_days" : 5,
        "24_hours" : 1
      },
      "paths" : [ {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      }, {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      } ],
      "name" : "name",
      "active_contact_count" : 3,
      "id" : 4
    }, {
      "active_contact_count_completed" : 2,
      "historical_contact_count" : {
        "30_days" : 5,
        "24_hours" : 1
      },
      "paths" : [ {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      }, {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      } ],
      "name" : "name",
      "active_contact_count" : 3,
      "id" : 4
    } ],
    "time_zone" : "time_zone",
    "published_date" : "2000-01-23T04:56:07.000+00:00",
    "goals" : [ {
      "previous_sequence_ids" : [ 7, 7 ],
      "name" : "name",
      "id" : 5,
      "type" : "WebForm",
      "next_sequence_ids" : [ 2, 2 ],
      "historical_contact_counts" : {
        "30_days" : 5,
        "24_hours" : 1
      }
    }, {
      "previous_sequence_ids" : [ 7, 7 ],
      "name" : "name",
      "id" : 5,
      "type" : "WebForm",
      "next_sequence_ids" : [ 2, 2 ],
      "historical_contact_counts" : {
        "30_days" : 5,
        "24_hours" : 1
      }
    } ]
  }, {
    "error_message" : "error_message",
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "active_contact_count" : 0,
    "completed_contact_count" : 6,
    "id" : 9,
    "published_status" : true,
    "published_time_zone" : "published_time_zone",
    "sequences" : [ {
      "active_contact_count_completed" : 2,
      "historical_contact_count" : {
        "30_days" : 5,
        "24_hours" : 1
      },
      "paths" : [ {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      }, {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      } ],
      "name" : "name",
      "active_contact_count" : 3,
      "id" : 4
    }, {
      "active_contact_count_completed" : 2,
      "historical_contact_count" : {
        "30_days" : 5,
        "24_hours" : 1
      },
      "paths" : [ {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      }, {
        "id" : 7,
        "items" : [ {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        }, {
          "name" : "name",
          "next_item_id" : 1,
          "id" : 1,
          "previous_item_id" : 1,
          "type" : "NULL"
        } ]
      } ],
      "name" : "name",
      "active_contact_count" : 3,
      "id" : 4
    } ],
    "time_zone" : "time_zone",
    "published_date" : "2000-01-23T04:56:07.000+00:00",
    "goals" : [ {
      "previous_sequence_ids" : [ 7, 7 ],
      "name" : "name",
      "id" : 5,
      "type" : "WebForm",
      "next_sequence_ids" : [ 2, 2 ],
      "historical_contact_counts" : {
        "30_days" : 5,
        "24_hours" : 1
      }
    }, {
      "previous_sequence_ids" : [ 7, 7 ],
      "name" : "name",
      "id" : 5,
      "type" : "WebForm",
      "next_sequence_ids" : [ 2, 2 ],
      "historical_contact_counts" : {
        "30_days" : 5,
        "24_hours" : 1
      }
    } ]
  } ],
  "previous" : "previous",
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
 * Retrieve a Campaign
 * Retrieves a single campaign
 *
 * campaignId Long campaignId
 * optional_properties List Comma-delimited list of Campaign properties to include in the response. (The fields `goals` and `sequences` aren't included, by default.) (optional)
 * returns Campaign
 **/
exports.getCampaignUsingGET = function(campaignId,optional_properties) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "error_message" : "error_message",
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "active_contact_count" : 0,
  "completed_contact_count" : 6,
  "id" : 9,
  "published_status" : true,
  "published_time_zone" : "published_time_zone",
  "sequences" : [ {
    "active_contact_count_completed" : 2,
    "historical_contact_count" : {
      "30_days" : 5,
      "24_hours" : 1
    },
    "paths" : [ {
      "id" : 7,
      "items" : [ {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      }, {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      } ]
    }, {
      "id" : 7,
      "items" : [ {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      }, {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      } ]
    } ],
    "name" : "name",
    "active_contact_count" : 3,
    "id" : 4
  }, {
    "active_contact_count_completed" : 2,
    "historical_contact_count" : {
      "30_days" : 5,
      "24_hours" : 1
    },
    "paths" : [ {
      "id" : 7,
      "items" : [ {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      }, {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      } ]
    }, {
      "id" : 7,
      "items" : [ {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      }, {
        "name" : "name",
        "next_item_id" : 1,
        "id" : 1,
        "previous_item_id" : 1,
        "type" : "NULL"
      } ]
    } ],
    "name" : "name",
    "active_contact_count" : 3,
    "id" : 4
  } ],
  "time_zone" : "time_zone",
  "published_date" : "2000-01-23T04:56:07.000+00:00",
  "goals" : [ {
    "previous_sequence_ids" : [ 7, 7 ],
    "name" : "name",
    "id" : 5,
    "type" : "WebForm",
    "next_sequence_ids" : [ 2, 2 ],
    "historical_contact_counts" : {
      "30_days" : 5,
      "24_hours" : 1
    }
  }, {
    "previous_sequence_ids" : [ 7, 7 ],
    "name" : "name",
    "id" : 5,
    "type" : "WebForm",
    "next_sequence_ids" : [ 2, 2 ],
    "historical_contact_counts" : {
      "30_days" : 5,
      "24_hours" : 1
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
 * Remove from Campaign Sequence
 * Removes a single contact from a campaign sequence
 *
 * campaignId Long campaignId
 * sequenceId Long sequenceId
 * contactId Long contactId
 * no response value expected for this operation
 **/
exports.removeContactsFromCampaignSequenceUsingDELETE = function(campaignId,sequenceId,contactId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove Multiple from Campaign Sequence
 * Removes a list of contacts from a campaign sequence
 *
 * campaignId Long campaignId
 * sequenceId Long sequenceId
 * ids SetOfIds ids
 * no response value expected for this operation
 **/
exports.removeContactsFromCampaignSequenceUsingDELETE_1 = function(campaignId,sequenceId,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

