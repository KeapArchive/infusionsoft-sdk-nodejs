'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.loadProductUsingGET = function loadProductUsingGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Product.loadProductUsingGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchUsingGET_3 = function searchUsingGET_3 (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var active = req.swagger.params['active'].value;
  Product.searchUsingGET_3(limit,offset,active)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncUsingGET_1 = function syncUsingGET_1 (req, res, next) {
  var sync_token = req.swagger.params['sync_token'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Product.syncUsingGET_1(sync_token,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
