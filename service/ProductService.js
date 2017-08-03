'use strict';


/**
 * Retrieve a Product
 * Retrieves a single product from the authorized Infusionsoft account
 *
 * productId Long productId
 * returns Product
 **/
exports.loadProductUsingGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product_desc" : "product_desc",
  "product_options" : [ {
    "allow_spaces" : true,
    "can_contain_character" : true,
    "max_chars" : 5,
    "values" : [ {
      "price_adjustment" : 3.616076749251911,
      "index" : 9,
      "id" : 7,
      "label" : "label",
      "is_default" : true,
      "sku" : "sku"
    }, {
      "price_adjustment" : 3.616076749251911,
      "index" : 9,
      "id" : 7,
      "label" : "label",
      "is_default" : true,
      "sku" : "sku"
    } ],
    "can_start_with_number" : true,
    "label" : "label",
    "type" : "FixedList",
    "can_start_with_character" : true,
    "required" : true,
    "display_index" : 1,
    "text_message" : "text_message",
    "can_contain_number" : true,
    "name" : "name",
    "can_end_with_number" : true,
    "id" : 5,
    "min_chars" : 2,
    "can_end_with_character" : true
  }, {
    "allow_spaces" : true,
    "can_contain_character" : true,
    "max_chars" : 5,
    "values" : [ {
      "price_adjustment" : 3.616076749251911,
      "index" : 9,
      "id" : 7,
      "label" : "label",
      "is_default" : true,
      "sku" : "sku"
    }, {
      "price_adjustment" : 3.616076749251911,
      "index" : 9,
      "id" : 7,
      "label" : "label",
      "is_default" : true,
      "sku" : "sku"
    } ],
    "can_start_with_number" : true,
    "label" : "label",
    "type" : "FixedList",
    "can_start_with_character" : true,
    "required" : true,
    "display_index" : 1,
    "text_message" : "text_message",
    "can_contain_number" : true,
    "name" : "name",
    "can_end_with_number" : true,
    "id" : 5,
    "min_chars" : 2,
    "can_end_with_character" : true
  } ],
  "subscription_plans" : [ {
    "subscription_plan_index" : 1,
    "plan_price" : 7.457744773683766,
    "active" : true,
    "number_of_cycles" : 6,
    "id" : 1,
    "subscription_plan_name" : "subscription_plan_name",
    "cycle" : 1,
    "frequency" : 1
  }, {
    "subscription_plan_index" : 1,
    "plan_price" : 7.457744773683766,
    "active" : true,
    "number_of_cycles" : 6,
    "id" : 1,
    "subscription_plan_name" : "subscription_plan_name",
    "cycle" : 1,
    "frequency" : 1
  } ],
  "product_short_desc" : "product_short_desc",
  "sub_category_id" : 7,
  "subscription_only" : true,
  "id" : 6,
  "product_price" : 2.027123023002322,
  "sku" : "sku",
  "product_name" : "product_name",
  "url" : "url",
  "status" : 4
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Products
 * Retrieves a list of all products
 *
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * active Boolean Sets status of items to return (optional)
 * returns ProductList
 **/
exports.searchUsingGET_3 = function(limit,offset,active) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "count" : 0,
  "products" : [ {
    "product_desc" : "product_desc",
    "product_options" : [ {
      "allow_spaces" : true,
      "can_contain_character" : true,
      "max_chars" : 5,
      "values" : [ {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      }, {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      } ],
      "can_start_with_number" : true,
      "label" : "label",
      "type" : "FixedList",
      "can_start_with_character" : true,
      "required" : true,
      "display_index" : 1,
      "text_message" : "text_message",
      "can_contain_number" : true,
      "name" : "name",
      "can_end_with_number" : true,
      "id" : 5,
      "min_chars" : 2,
      "can_end_with_character" : true
    }, {
      "allow_spaces" : true,
      "can_contain_character" : true,
      "max_chars" : 5,
      "values" : [ {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      }, {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      } ],
      "can_start_with_number" : true,
      "label" : "label",
      "type" : "FixedList",
      "can_start_with_character" : true,
      "required" : true,
      "display_index" : 1,
      "text_message" : "text_message",
      "can_contain_number" : true,
      "name" : "name",
      "can_end_with_number" : true,
      "id" : 5,
      "min_chars" : 2,
      "can_end_with_character" : true
    } ],
    "subscription_plans" : [ {
      "subscription_plan_index" : 1,
      "plan_price" : 7.457744773683766,
      "active" : true,
      "number_of_cycles" : 6,
      "id" : 1,
      "subscription_plan_name" : "subscription_plan_name",
      "cycle" : 1,
      "frequency" : 1
    }, {
      "subscription_plan_index" : 1,
      "plan_price" : 7.457744773683766,
      "active" : true,
      "number_of_cycles" : 6,
      "id" : 1,
      "subscription_plan_name" : "subscription_plan_name",
      "cycle" : 1,
      "frequency" : 1
    } ],
    "product_short_desc" : "product_short_desc",
    "sub_category_id" : 7,
    "subscription_only" : true,
    "id" : 6,
    "product_price" : 2.027123023002322,
    "sku" : "sku",
    "product_name" : "product_name",
    "url" : "url",
    "status" : 4
  }, {
    "product_desc" : "product_desc",
    "product_options" : [ {
      "allow_spaces" : true,
      "can_contain_character" : true,
      "max_chars" : 5,
      "values" : [ {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      }, {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      } ],
      "can_start_with_number" : true,
      "label" : "label",
      "type" : "FixedList",
      "can_start_with_character" : true,
      "required" : true,
      "display_index" : 1,
      "text_message" : "text_message",
      "can_contain_number" : true,
      "name" : "name",
      "can_end_with_number" : true,
      "id" : 5,
      "min_chars" : 2,
      "can_end_with_character" : true
    }, {
      "allow_spaces" : true,
      "can_contain_character" : true,
      "max_chars" : 5,
      "values" : [ {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      }, {
        "price_adjustment" : 3.616076749251911,
        "index" : 9,
        "id" : 7,
        "label" : "label",
        "is_default" : true,
        "sku" : "sku"
      } ],
      "can_start_with_number" : true,
      "label" : "label",
      "type" : "FixedList",
      "can_start_with_character" : true,
      "required" : true,
      "display_index" : 1,
      "text_message" : "text_message",
      "can_contain_number" : true,
      "name" : "name",
      "can_end_with_number" : true,
      "id" : 5,
      "min_chars" : 2,
      "can_end_with_character" : true
    } ],
    "subscription_plans" : [ {
      "subscription_plan_index" : 1,
      "plan_price" : 7.457744773683766,
      "active" : true,
      "number_of_cycles" : 6,
      "id" : 1,
      "subscription_plan_name" : "subscription_plan_name",
      "cycle" : 1,
      "frequency" : 1
    }, {
      "subscription_plan_index" : 1,
      "plan_price" : 7.457744773683766,
      "active" : true,
      "number_of_cycles" : 6,
      "id" : 1,
      "subscription_plan_name" : "subscription_plan_name",
      "cycle" : 1,
      "frequency" : 1
    } ],
    "product_short_desc" : "product_short_desc",
    "sub_category_id" : 7,
    "subscription_only" : true,
    "id" : 6,
    "product_price" : 2.027123023002322,
    "sku" : "sku",
    "product_name" : "product_name",
    "url" : "url",
    "status" : 4
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
 * Retrieve Synced Products
 * The Sync endpoint returns a set of products that have been updated or created since the last result set was retrieved, minus any products that have been deleted.
 *
 * sync_token String sync_token (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * returns ProductStatusList
 **/
exports.syncUsingGET_1 = function(sync_token,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "sync_token" : "sync_token",
  "product_statuses" : [ {
    "product" : {
      "product_desc" : "product_desc",
      "product_options" : [ {
        "allow_spaces" : true,
        "can_contain_character" : true,
        "max_chars" : 5,
        "values" : [ {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        }, {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        } ],
        "can_start_with_number" : true,
        "label" : "label",
        "type" : "FixedList",
        "can_start_with_character" : true,
        "required" : true,
        "display_index" : 1,
        "text_message" : "text_message",
        "can_contain_number" : true,
        "name" : "name",
        "can_end_with_number" : true,
        "id" : 5,
        "min_chars" : 2,
        "can_end_with_character" : true
      }, {
        "allow_spaces" : true,
        "can_contain_character" : true,
        "max_chars" : 5,
        "values" : [ {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        }, {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        } ],
        "can_start_with_number" : true,
        "label" : "label",
        "type" : "FixedList",
        "can_start_with_character" : true,
        "required" : true,
        "display_index" : 1,
        "text_message" : "text_message",
        "can_contain_number" : true,
        "name" : "name",
        "can_end_with_number" : true,
        "id" : 5,
        "min_chars" : 2,
        "can_end_with_character" : true
      } ],
      "subscription_plans" : [ {
        "subscription_plan_index" : 1,
        "plan_price" : 7.457744773683766,
        "active" : true,
        "number_of_cycles" : 6,
        "id" : 1,
        "subscription_plan_name" : "subscription_plan_name",
        "cycle" : 1,
        "frequency" : 1
      }, {
        "subscription_plan_index" : 1,
        "plan_price" : 7.457744773683766,
        "active" : true,
        "number_of_cycles" : 6,
        "id" : 1,
        "subscription_plan_name" : "subscription_plan_name",
        "cycle" : 1,
        "frequency" : 1
      } ],
      "product_short_desc" : "product_short_desc",
      "sub_category_id" : 7,
      "subscription_only" : true,
      "id" : 6,
      "product_price" : 2.027123023002322,
      "sku" : "sku",
      "product_name" : "product_name",
      "url" : "url",
      "status" : 4
    },
    "status" : "CREATED"
  }, {
    "product" : {
      "product_desc" : "product_desc",
      "product_options" : [ {
        "allow_spaces" : true,
        "can_contain_character" : true,
        "max_chars" : 5,
        "values" : [ {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        }, {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        } ],
        "can_start_with_number" : true,
        "label" : "label",
        "type" : "FixedList",
        "can_start_with_character" : true,
        "required" : true,
        "display_index" : 1,
        "text_message" : "text_message",
        "can_contain_number" : true,
        "name" : "name",
        "can_end_with_number" : true,
        "id" : 5,
        "min_chars" : 2,
        "can_end_with_character" : true
      }, {
        "allow_spaces" : true,
        "can_contain_character" : true,
        "max_chars" : 5,
        "values" : [ {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        }, {
          "price_adjustment" : 3.616076749251911,
          "index" : 9,
          "id" : 7,
          "label" : "label",
          "is_default" : true,
          "sku" : "sku"
        } ],
        "can_start_with_number" : true,
        "label" : "label",
        "type" : "FixedList",
        "can_start_with_character" : true,
        "required" : true,
        "display_index" : 1,
        "text_message" : "text_message",
        "can_contain_number" : true,
        "name" : "name",
        "can_end_with_number" : true,
        "id" : 5,
        "min_chars" : 2,
        "can_end_with_character" : true
      } ],
      "subscription_plans" : [ {
        "subscription_plan_index" : 1,
        "plan_price" : 7.457744773683766,
        "active" : true,
        "number_of_cycles" : 6,
        "id" : 1,
        "subscription_plan_name" : "subscription_plan_name",
        "cycle" : 1,
        "frequency" : 1
      }, {
        "subscription_plan_index" : 1,
        "plan_price" : 7.457744773683766,
        "active" : true,
        "number_of_cycles" : 6,
        "id" : 1,
        "subscription_plan_name" : "subscription_plan_name",
        "cycle" : 1,
        "frequency" : 1
      } ],
      "product_short_desc" : "product_short_desc",
      "sub_category_id" : 7,
      "subscription_only" : true,
      "id" : 6,
      "product_price" : 2.027123023002322,
      "sku" : "sku",
      "product_name" : "product_name",
      "url" : "url",
      "status" : 4
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

