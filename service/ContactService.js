'use strict';


/**
 * Apply Tags
 * Apply a list of tags to a given contact record
 *
 * contactId Long contactId
 * tagIds TagId tagIds
 * returns List
 **/
exports.applyTagsToContactIdUsingPOST = function(contactId,tagIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "key" : "SUCCESS"
}, {
  "key" : "SUCCESS"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Contact
 * Creates a new contact as the authenticated user. NB: Contact must contain at least one item in `email_addresses` or `phone_numbers`. NB: `country_code` is required if `region` is specified.
 *
 * contact FullContact contact (optional)
 * returns FullContact
 **/
exports.createContactUsingPOST = function(contact) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "preferred_locale" : "en_US",
  "addresses" : [ {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  }, {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  } ],
  "notes" : "notes",
  "owner_id" : 5,
  "prefix" : "prefix",
  "suffix" : "suffix",
  "relationships" : [ {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  }, {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  } ],
  "contact_type" : "contact_type",
  "company" : {
    "company_name" : "company_name",
    "id" : 0
  },
  "job_title" : "job_title",
  "opt_in_reason" : "opt_in_reason",
  "email_addresses" : [ {
    "field" : "EMAIL1",
    "email" : "email"
  }, {
    "field" : "EMAIL1",
    "email" : "email"
  } ],
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "tag_ids" : [ 9, 9 ],
  "website" : "website",
  "custom_fields" : [ {
    "id" : 6,
    "content" : "{}"
  }, {
    "id" : 6,
    "content" : "{}"
  } ],
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "source_type" : "WEBFORM",
  "given_name" : "given_name",
  "middle_name" : "middle_name",
  "time_zone" : "time_zone",
  "fax_numbers" : [ {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  }, {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  } ],
  "lead_source_id" : 1,
  "phone_numbers" : [ {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  }, {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  } ],
  "family_name" : "family_name",
  "preferred_name" : "preferred_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create or Update a Contact
 * Creates a new contact or updates a contact as the authenticated user. NB: New Contacts must contain at least one item in `email_addresses` or `phone_numbers`. NB: `country_code` is required if `region` is specified. Existing Contacts are updated with only the values provided in the request. Accepts a `duplicate_option` which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`, if a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created
 *
 * contact UpsertContact contact (optional)
 * returns FullContact
 **/
exports.createOrUpdateContactUsingPUT = function(contact) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "preferred_locale" : "en_US",
  "addresses" : [ {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  }, {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  } ],
  "notes" : "notes",
  "owner_id" : 5,
  "prefix" : "prefix",
  "suffix" : "suffix",
  "relationships" : [ {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  }, {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  } ],
  "contact_type" : "contact_type",
  "company" : {
    "company_name" : "company_name",
    "id" : 0
  },
  "job_title" : "job_title",
  "opt_in_reason" : "opt_in_reason",
  "email_addresses" : [ {
    "field" : "EMAIL1",
    "email" : "email"
  }, {
    "field" : "EMAIL1",
    "email" : "email"
  } ],
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "tag_ids" : [ 9, 9 ],
  "website" : "website",
  "custom_fields" : [ {
    "id" : 6,
    "content" : "{}"
  }, {
    "id" : 6,
    "content" : "{}"
  } ],
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "source_type" : "WEBFORM",
  "given_name" : "given_name",
  "middle_name" : "middle_name",
  "time_zone" : "time_zone",
  "fax_numbers" : [ {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  }, {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  } ],
  "lead_source_id" : 1,
  "phone_numbers" : [ {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  }, {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  } ],
  "family_name" : "family_name",
  "preferred_name" : "preferred_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Contact
 * Deletes the specified contact
 *
 * contactId Long contactId
 * no response value expected for this operation
 **/
exports.deleteContactUsingDELETE = function(contactId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Applied Tags
 * Retrieves a list of tags applied to a given contact
 *
 * contactId Long contactId
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns ContactTagList
 **/
exports.listAppliedTagsUsingGET = function(contactId,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 0,
  "tags" : [ {
    "date_applied" : "2000-01-23T04:56:07.000+00:00",
    "tag" : {
      "name" : "name",
      "id" : 6,
      "category" : "category"
    }
  }, {
    "date_applied" : "2000-01-23T04:56:07.000+00:00",
    "tag" : {
      "name" : "name",
      "id" : 6,
      "category" : "category"
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
 * List Contacts
 * Retrieves a list of all contacts
 *
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * email String Optional email address to query on (optional)
 * given_name String Optional first name or forename to query on (optional)
 * family_name String Optional last name or surname to query on (optional)
 * order String Attribute to order items by (optional)
 * returns ContactList
 **/
exports.listContactsUsingGET = function(limit,offset,email,given_name,family_name,order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 3,
  "contacts" : [ {
    "birthday" : "2000-01-23T04:56:07.000+00:00",
    "preferred_locale" : "en_US",
    "addresses" : [ {
      "country_code" : "country_code",
      "field" : "BILLING",
      "locality" : "locality",
      "postal_code" : "postal_code",
      "region" : "region",
      "line2" : "line2",
      "line1" : "line1"
    }, {
      "country_code" : "country_code",
      "field" : "BILLING",
      "locality" : "locality",
      "postal_code" : "postal_code",
      "region" : "region",
      "line2" : "line2",
      "line1" : "line1"
    } ],
    "notes" : "notes",
    "owner_id" : 5,
    "prefix" : "prefix",
    "suffix" : "suffix",
    "relationships" : [ {
      "linked_contact_id" : 2,
      "relationship_type_id" : 7,
      "id" : 5
    }, {
      "linked_contact_id" : 2,
      "relationship_type_id" : 7,
      "id" : 5
    } ],
    "contact_type" : "contact_type",
    "company" : {
      "company_name" : "company_name",
      "id" : 0
    },
    "job_title" : "job_title",
    "opt_in_reason" : "opt_in_reason",
    "email_addresses" : [ {
      "field" : "EMAIL1",
      "email" : "email"
    }, {
      "field" : "EMAIL1",
      "email" : "email"
    } ],
    "last_updated" : "2000-01-23T04:56:07.000+00:00",
    "tag_ids" : [ 9, 9 ],
    "website" : "website",
    "custom_fields" : [ {
      "id" : 6,
      "content" : "{}"
    }, {
      "id" : 6,
      "content" : "{}"
    } ],
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "source_type" : "WEBFORM",
    "given_name" : "given_name",
    "middle_name" : "middle_name",
    "time_zone" : "time_zone",
    "fax_numbers" : [ {
      "number" : "number",
      "field" : "FAX1",
      "type" : "type"
    }, {
      "number" : "number",
      "field" : "FAX1",
      "type" : "type"
    } ],
    "lead_source_id" : 1,
    "phone_numbers" : [ {
      "number" : "number",
      "extension" : "extension",
      "field" : "PHONE1",
      "type" : "type"
    }, {
      "number" : "number",
      "extension" : "extension",
      "field" : "PHONE1",
      "type" : "type"
    } ],
    "family_name" : "family_name",
    "preferred_name" : "preferred_name"
  }, {
    "birthday" : "2000-01-23T04:56:07.000+00:00",
    "preferred_locale" : "en_US",
    "addresses" : [ {
      "country_code" : "country_code",
      "field" : "BILLING",
      "locality" : "locality",
      "postal_code" : "postal_code",
      "region" : "region",
      "line2" : "line2",
      "line1" : "line1"
    }, {
      "country_code" : "country_code",
      "field" : "BILLING",
      "locality" : "locality",
      "postal_code" : "postal_code",
      "region" : "region",
      "line2" : "line2",
      "line1" : "line1"
    } ],
    "notes" : "notes",
    "owner_id" : 5,
    "prefix" : "prefix",
    "suffix" : "suffix",
    "relationships" : [ {
      "linked_contact_id" : 2,
      "relationship_type_id" : 7,
      "id" : 5
    }, {
      "linked_contact_id" : 2,
      "relationship_type_id" : 7,
      "id" : 5
    } ],
    "contact_type" : "contact_type",
    "company" : {
      "company_name" : "company_name",
      "id" : 0
    },
    "job_title" : "job_title",
    "opt_in_reason" : "opt_in_reason",
    "email_addresses" : [ {
      "field" : "EMAIL1",
      "email" : "email"
    }, {
      "field" : "EMAIL1",
      "email" : "email"
    } ],
    "last_updated" : "2000-01-23T04:56:07.000+00:00",
    "tag_ids" : [ 9, 9 ],
    "website" : "website",
    "custom_fields" : [ {
      "id" : 6,
      "content" : "{}"
    }, {
      "id" : 6,
      "content" : "{}"
    } ],
    "date_created" : "2000-01-23T04:56:07.000+00:00",
    "source_type" : "WEBFORM",
    "given_name" : "given_name",
    "middle_name" : "middle_name",
    "time_zone" : "time_zone",
    "fax_numbers" : [ {
      "number" : "number",
      "field" : "FAX1",
      "type" : "type"
    }, {
      "number" : "number",
      "field" : "FAX1",
      "type" : "type"
    } ],
    "lead_source_id" : 1,
    "phone_numbers" : [ {
      "number" : "number",
      "extension" : "extension",
      "field" : "PHONE1",
      "type" : "type"
    }, {
      "number" : "number",
      "extension" : "extension",
      "field" : "PHONE1",
      "type" : "type"
    } ],
    "family_name" : "family_name",
    "preferred_name" : "preferred_name"
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
 * List Contact Custom Fields
 * Retrieves a list of custom fields for Contacts
 *
 * returns List
 **/
exports.listCustomFieldsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "options" : [ {
    "options" : [ null, null ],
    "id" : "id",
    "label" : "label"
  }, {
    "options" : [ null, null ],
    "id" : "id",
    "label" : "label"
  } ],
  "id" : 0,
  "label" : "label",
  "field_type" : "Currency"
}, {
  "options" : [ {
    "options" : [ null, null ],
    "id" : "id",
    "label" : "label"
  }, {
    "options" : [ null, null ],
    "id" : "id",
    "label" : "label"
  } ],
  "id" : 0,
  "label" : "label",
  "field_type" : "Currency"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a Contact
 * Retrieves a single contact
 *
 * id Long id
 * optional_properties List Comma-delimited list of Contact properties to include in the response. (Some fields such as `lead_source_id`, `custom_fields`, and `job_title` aren't included, by default.) (optional)
 * returns FullContact
 **/
exports.loadUsingGET = function(id,optional_properties) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "preferred_locale" : "en_US",
  "addresses" : [ {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  }, {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  } ],
  "notes" : "notes",
  "owner_id" : 5,
  "prefix" : "prefix",
  "suffix" : "suffix",
  "relationships" : [ {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  }, {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  } ],
  "contact_type" : "contact_type",
  "company" : {
    "company_name" : "company_name",
    "id" : 0
  },
  "job_title" : "job_title",
  "opt_in_reason" : "opt_in_reason",
  "email_addresses" : [ {
    "field" : "EMAIL1",
    "email" : "email"
  }, {
    "field" : "EMAIL1",
    "email" : "email"
  } ],
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "tag_ids" : [ 9, 9 ],
  "website" : "website",
  "custom_fields" : [ {
    "id" : 6,
    "content" : "{}"
  }, {
    "id" : 6,
    "content" : "{}"
  } ],
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "source_type" : "WEBFORM",
  "given_name" : "given_name",
  "middle_name" : "middle_name",
  "time_zone" : "time_zone",
  "fax_numbers" : [ {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  }, {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  } ],
  "lead_source_id" : 1,
  "phone_numbers" : [ {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  }, {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  } ],
  "family_name" : "family_name",
  "preferred_name" : "preferred_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove Applied Tag
 * Removes a tag from the given contact
 *
 * contactId Long contactId
 * tagId Long tagId
 * no response value expected for this operation
 **/
exports.removeTagsFromContactUsingDELETE = function(contactId,tagId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove Applied Tags
 * Removes a list of tags from the given contact
 *
 * contactId Long contactId
 * ids String ids
 * no response value expected for this operation
 **/
exports.removeTagsFromContactUsingDELETE_1 = function(contactId,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Contact
 * Updates a contact with only the values provided in the request.
 *
 * contactId Long contactId
 * contact FullContact contact (optional)
 * returns FullContact
 **/
exports.updateContactUsingPATCH = function(contactId,contact) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "preferred_locale" : "en_US",
  "addresses" : [ {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  }, {
    "country_code" : "country_code",
    "field" : "BILLING",
    "locality" : "locality",
    "postal_code" : "postal_code",
    "region" : "region",
    "line2" : "line2",
    "line1" : "line1"
  } ],
  "notes" : "notes",
  "owner_id" : 5,
  "prefix" : "prefix",
  "suffix" : "suffix",
  "relationships" : [ {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  }, {
    "linked_contact_id" : 2,
    "relationship_type_id" : 7,
    "id" : 5
  } ],
  "contact_type" : "contact_type",
  "company" : {
    "company_name" : "company_name",
    "id" : 0
  },
  "job_title" : "job_title",
  "opt_in_reason" : "opt_in_reason",
  "email_addresses" : [ {
    "field" : "EMAIL1",
    "email" : "email"
  }, {
    "field" : "EMAIL1",
    "email" : "email"
  } ],
  "last_updated" : "2000-01-23T04:56:07.000+00:00",
  "tag_ids" : [ 9, 9 ],
  "website" : "website",
  "custom_fields" : [ {
    "id" : 6,
    "content" : "{}"
  }, {
    "id" : 6,
    "content" : "{}"
  } ],
  "date_created" : "2000-01-23T04:56:07.000+00:00",
  "source_type" : "WEBFORM",
  "given_name" : "given_name",
  "middle_name" : "middle_name",
  "time_zone" : "time_zone",
  "fax_numbers" : [ {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  }, {
    "number" : "number",
    "field" : "FAX1",
    "type" : "type"
  } ],
  "lead_source_id" : 1,
  "phone_numbers" : [ {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  }, {
    "number" : "number",
    "extension" : "extension",
    "field" : "PHONE1",
    "type" : "type"
  } ],
  "family_name" : "family_name",
  "preferred_name" : "preferred_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

