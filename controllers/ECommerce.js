'use strict';

var utils = require('../utils/writer.js');
var ECommerce = require('../service/ECommerceService');

module.exports.loadOrderUsingGET = function loadOrderUsingGET (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  ECommerce.loadOrderUsingGET(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchUsingGET_1 = function searchUsingGET_1 (req, res, next) {
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var paid = req.swagger.params['paid'].value;
  var order = req.swagger.params['order'].value;
  var contact_id = req.swagger.params['contact_id'].value;
  var product_id = req.swagger.params['product_id'].value;
  ECommerce.searchUsingGET_1(since,until,limit,offset,paid,order,contact_id,product_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchUsingGET_2 = function searchUsingGET_2 (req, res, next) {
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var contact_id = req.swagger.params['contact_id'].value;
  ECommerce.searchUsingGET_2(since,until,limit,offset,contact_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionByIdUsingGET = function transactionByIdUsingGET (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  ECommerce.transactionByIdUsingGET(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsForOrderUsingGET = function transactionsForOrderUsingGET (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var since = req.swagger.params['since'].value;
  var until = req.swagger.params['until'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var contact_id = req.swagger.params['contact_id'].value;
  ECommerce.transactionsForOrderUsingGET(orderId,since,until,limit,offset,contact_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
