'use strict';


/**
 * Retrieve an Order
 * Retrieves a single order
 *
 * orderId Long orderId
 * returns Order
 **/
exports.loadOrderUsingGET = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_due" : 1.4894159098541704,
  "recurring" : true,
  "sales_affiliate_id" : 7,
  "creation_date" : "creation_date",
  "title" : "title",
  "order_date" : "order_date",
  "total" : 1.0246457001441578,
  "shipping_information" : {
    "zip" : "zip",
    "country" : "country",
    "city" : "city",
    "phone" : "phone",
    "last_name" : "last_name",
    "company" : "company",
    "street1" : "street1",
    "id" : 1,
    "state" : "state",
    "street2" : "street2",
    "middle_name" : "middle_name",
    "first_name" : "first_name"
  },
  "lead_affiliate_id" : 5,
  "total_paid" : 6.84685269835264,
  "contact" : {
    "company_name" : "company_name",
    "last_name" : "last_name",
    "id" : 6,
    "first_name" : "first_name",
    "job_title" : "job_title",
    "email" : "email"
  },
  "modification_date" : "modification_date",
  "id" : 1,
  "refund_total" : 4.145608029883936,
  "order_items" : [ {
    "product" : {
      "shippable" : true,
      "taxable" : true,
      "name" : "name",
      "description" : "description",
      "id" : 3,
      "sku" : "sku"
    },
    "cost" : 5.637376656633329,
    "notes" : "notes",
    "quantity" : 2,
    "price" : 9.301444243932576,
    "name" : "name",
    "description" : "description",
    "discount" : 2.3021358869347655,
    "id" : 7,
    "type" : "type"
  }, {
    "product" : {
      "shippable" : true,
      "taxable" : true,
      "name" : "name",
      "description" : "description",
      "id" : 3,
      "sku" : "sku"
    },
    "cost" : 5.637376656633329,
    "notes" : "notes",
    "quantity" : 2,
    "price" : 9.301444243932576,
    "name" : "name",
    "description" : "description",
    "discount" : 2.3021358869347655,
    "id" : 7,
    "type" : "type"
  } ],
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Orders
 * Retrieves a list of all orders using the specified search criteria
 *
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * paid Boolean Sets paid status of items to return (optional)
 * order String Attribute to order items by (optional)
 * contact_id Long Returns orders for the provided contact id (optional)
 * product_id Long Returns orders containing the provided product id (optional)
 * returns OrderList
 **/
exports.searchUsingGET_1 = function(since,until,limit,offset,paid,order,contact_id,product_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 0,
  "orders" : [ {
    "total_due" : 1.4894159098541704,
    "recurring" : true,
    "sales_affiliate_id" : 7,
    "creation_date" : "creation_date",
    "title" : "title",
    "order_date" : "order_date",
    "total" : 1.0246457001441578,
    "shipping_information" : {
      "zip" : "zip",
      "country" : "country",
      "city" : "city",
      "phone" : "phone",
      "last_name" : "last_name",
      "company" : "company",
      "street1" : "street1",
      "id" : 1,
      "state" : "state",
      "street2" : "street2",
      "middle_name" : "middle_name",
      "first_name" : "first_name"
    },
    "lead_affiliate_id" : 5,
    "total_paid" : 6.84685269835264,
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "id" : 1,
    "refund_total" : 4.145608029883936,
    "order_items" : [ {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    }, {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    } ],
    "status" : "status"
  }, {
    "total_due" : 1.4894159098541704,
    "recurring" : true,
    "sales_affiliate_id" : 7,
    "creation_date" : "creation_date",
    "title" : "title",
    "order_date" : "order_date",
    "total" : 1.0246457001441578,
    "shipping_information" : {
      "zip" : "zip",
      "country" : "country",
      "city" : "city",
      "phone" : "phone",
      "last_name" : "last_name",
      "company" : "company",
      "street1" : "street1",
      "id" : 1,
      "state" : "state",
      "street2" : "street2",
      "middle_name" : "middle_name",
      "first_name" : "first_name"
    },
    "lead_affiliate_id" : 5,
    "total_paid" : 6.84685269835264,
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "id" : 1,
    "refund_total" : 4.145608029883936,
    "order_items" : [ {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    }, {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    } ],
    "status" : "status"
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
 * List Transactions
 * Retrieves a list transactions for a given contact
 *
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * contact_id Long Returns transactions for the provided contact id (optional)
 * returns TransactionList
 **/
exports.searchUsingGET_2 = function(since,until,limit,offset,contact_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 0,
  "transactions" : [ {
    "transaction_date" : "transaction_date",
    "amount" : 6.027456183070403,
    "gateway_account_name" : "gateway_account_name",
    "test" : true,
    "order_ids" : "order_ids",
    "contact_id" : 1,
    "type" : "type",
    "collection_method" : "collection_method",
    "currency" : "currency",
    "orders" : [ {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    }, {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    } ],
    "id" : 5,
    "errors" : "errors",
    "gateway" : "gateway",
    "status" : "status"
  }, {
    "transaction_date" : "transaction_date",
    "amount" : 6.027456183070403,
    "gateway_account_name" : "gateway_account_name",
    "test" : true,
    "order_ids" : "order_ids",
    "contact_id" : 1,
    "type" : "type",
    "collection_method" : "collection_method",
    "currency" : "currency",
    "orders" : [ {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    }, {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    } ],
    "id" : 5,
    "errors" : "errors",
    "gateway" : "gateway",
    "status" : "status"
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
 * Retrieve a Transaction
 * Retrieves a single transaction
 *
 * transactionId Long transactionId
 * returns Transaction
 **/
exports.transactionByIdUsingGET = function(transactionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction_date" : "transaction_date",
  "amount" : 6.027456183070403,
  "gateway_account_name" : "gateway_account_name",
  "test" : true,
  "order_ids" : "order_ids",
  "contact_id" : 1,
  "type" : "type",
  "collection_method" : "collection_method",
  "currency" : "currency",
  "orders" : [ {
    "total_due" : 1.4894159098541704,
    "recurring" : true,
    "sales_affiliate_id" : 7,
    "creation_date" : "creation_date",
    "title" : "title",
    "order_date" : "order_date",
    "total" : 1.0246457001441578,
    "shipping_information" : {
      "zip" : "zip",
      "country" : "country",
      "city" : "city",
      "phone" : "phone",
      "last_name" : "last_name",
      "company" : "company",
      "street1" : "street1",
      "id" : 1,
      "state" : "state",
      "street2" : "street2",
      "middle_name" : "middle_name",
      "first_name" : "first_name"
    },
    "lead_affiliate_id" : 5,
    "total_paid" : 6.84685269835264,
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "id" : 1,
    "refund_total" : 4.145608029883936,
    "order_items" : [ {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    }, {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    } ],
    "status" : "status"
  }, {
    "total_due" : 1.4894159098541704,
    "recurring" : true,
    "sales_affiliate_id" : 7,
    "creation_date" : "creation_date",
    "title" : "title",
    "order_date" : "order_date",
    "total" : 1.0246457001441578,
    "shipping_information" : {
      "zip" : "zip",
      "country" : "country",
      "city" : "city",
      "phone" : "phone",
      "last_name" : "last_name",
      "company" : "company",
      "street1" : "street1",
      "id" : 1,
      "state" : "state",
      "street2" : "street2",
      "middle_name" : "middle_name",
      "first_name" : "first_name"
    },
    "lead_affiliate_id" : 5,
    "total_paid" : 6.84685269835264,
    "contact" : {
      "company_name" : "company_name",
      "last_name" : "last_name",
      "id" : 6,
      "first_name" : "first_name",
      "job_title" : "job_title",
      "email" : "email"
    },
    "modification_date" : "modification_date",
    "id" : 1,
    "refund_total" : 4.145608029883936,
    "order_items" : [ {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    }, {
      "product" : {
        "shippable" : true,
        "taxable" : true,
        "name" : "name",
        "description" : "description",
        "id" : 3,
        "sku" : "sku"
      },
      "cost" : 5.637376656633329,
      "notes" : "notes",
      "quantity" : 2,
      "price" : 9.301444243932576,
      "name" : "name",
      "description" : "description",
      "discount" : 2.3021358869347655,
      "id" : 7,
      "type" : "type"
    } ],
    "status" : "status"
  } ],
  "id" : 5,
  "errors" : "errors",
  "gateway" : "gateway",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Order Transactions
 * Retrieves a list of all transactions on a given order using the specified search criteria
 *
 * orderId String orderId
 * since String Date to start searching from ex. `2017-01-01T22:17:59.039Z` (optional)
 * until String Date to search to ex. `2017-01-01T22:17:59.039Z` (optional)
 * limit Integer Sets a total of items to return (optional)
 * offset Integer Sets a beginning range of items to return (optional)
 * contact_id Long Returns transactions for the provided contact id (optional)
 * returns TransactionList
 **/
exports.transactionsForOrderUsingGET = function(orderId,since,until,limit,offset,contact_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "previous" : "previous",
  "count" : 0,
  "transactions" : [ {
    "transaction_date" : "transaction_date",
    "amount" : 6.027456183070403,
    "gateway_account_name" : "gateway_account_name",
    "test" : true,
    "order_ids" : "order_ids",
    "contact_id" : 1,
    "type" : "type",
    "collection_method" : "collection_method",
    "currency" : "currency",
    "orders" : [ {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    }, {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    } ],
    "id" : 5,
    "errors" : "errors",
    "gateway" : "gateway",
    "status" : "status"
  }, {
    "transaction_date" : "transaction_date",
    "amount" : 6.027456183070403,
    "gateway_account_name" : "gateway_account_name",
    "test" : true,
    "order_ids" : "order_ids",
    "contact_id" : 1,
    "type" : "type",
    "collection_method" : "collection_method",
    "currency" : "currency",
    "orders" : [ {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    }, {
      "total_due" : 1.4894159098541704,
      "recurring" : true,
      "sales_affiliate_id" : 7,
      "creation_date" : "creation_date",
      "title" : "title",
      "order_date" : "order_date",
      "total" : 1.0246457001441578,
      "shipping_information" : {
        "zip" : "zip",
        "country" : "country",
        "city" : "city",
        "phone" : "phone",
        "last_name" : "last_name",
        "company" : "company",
        "street1" : "street1",
        "id" : 1,
        "state" : "state",
        "street2" : "street2",
        "middle_name" : "middle_name",
        "first_name" : "first_name"
      },
      "lead_affiliate_id" : 5,
      "total_paid" : 6.84685269835264,
      "contact" : {
        "company_name" : "company_name",
        "last_name" : "last_name",
        "id" : 6,
        "first_name" : "first_name",
        "job_title" : "job_title",
        "email" : "email"
      },
      "modification_date" : "modification_date",
      "id" : 1,
      "refund_total" : 4.145608029883936,
      "order_items" : [ {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      }, {
        "product" : {
          "shippable" : true,
          "taxable" : true,
          "name" : "name",
          "description" : "description",
          "id" : 3,
          "sku" : "sku"
        },
        "cost" : 5.637376656633329,
        "notes" : "notes",
        "quantity" : 2,
        "price" : 9.301444243932576,
        "name" : "name",
        "description" : "description",
        "discount" : 2.3021358869347655,
        "id" : 7,
        "type" : "type"
      } ],
      "status" : "status"
    } ],
    "id" : 5,
    "errors" : "errors",
    "gateway" : "gateway",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

