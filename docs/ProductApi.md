# InfusionsoftRestApi.ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loadProductUsingGET**](ProductApi.md#loadProductUsingGET) | **GET** /products/{productId} | Retrieve a Product
[**searchUsingGET3**](ProductApi.md#searchUsingGET3) | **GET** /products/search | List Products
[**syncUsingGET1**](ProductApi.md#syncUsingGET1) | **GET** /products/sync | Retrieve Synced Products


<a name="loadProductUsingGET"></a>
# **loadProductUsingGET**
> Product loadProductUsingGET(productId)

Retrieve a Product

Retrieves a single product from the authorized Infusionsoft account

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.ProductApi();

let productId = 789; // Number | productId


apiInstance.loadProductUsingGET(productId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| productId | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingGET3"></a>
# **searchUsingGET3**
> ProductList searchUsingGET3(opts)

List Products

Retrieves a list of all products

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.ProductApi();

let opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'active': true // Boolean | Sets status of items to return
};

apiInstance.searchUsingGET3(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **active** | **Boolean**| Sets status of items to return | [optional] 

### Return type

[**ProductList**](ProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncUsingGET1"></a>
# **syncUsingGET1**
> ProductStatusList syncUsingGET1(opts)

Retrieve Synced Products

The Sync endpoint returns a set of products that have been updated or created since the last result set was retrieved, minus any products that have been deleted.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.ProductApi();

let opts = { 
  'syncToken': "syncToken_example", // String | sync_token
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.syncUsingGET1(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncToken** | **String**| sync_token | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 

### Return type

[**ProductStatusList**](ProductStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

