# InfusionsoftRestApi.OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunityUsingPOST**](OpportunityApi.md#createOpportunityUsingPOST) | **POST** /opportunities | Create an Opportunity
[**getOpportunityUsingGET**](OpportunityApi.md#getOpportunityUsingGET) | **GET** /opportunities/{opportunityId} | Retrieve an Opportunity
[**getStagePipelineUsingGET**](OpportunityApi.md#getStagePipelineUsingGET) | **GET** /opportunity/stage_pipeline | List Opportunity Stage Pipeline
[**listOpportunitiesUsingGET**](OpportunityApi.md#listOpportunitiesUsingGET) | **GET** /opportunities | List Opportunities
[**replaceOpportunityUsingPUT**](OpportunityApi.md#replaceOpportunityUsingPUT) | **PUT** /opportunities | Replace an Opportunity
[**updateOpportunityUsingPATCH**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /opportunities/{opportunityId} | Update an Opportunity


<a name="createOpportunityUsingPOST"></a>
# **createOpportunityUsingPOST**
> Opportunity createOpportunityUsingPOST(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user. NB: Opportunity must contain values for &#x60;opportunity_title&#x60;, &#x60;contact&#x60;, and &#x60;stage&#x60;.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

let opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

apiInstance.createOpportunityUsingPOST(opts, (error, data, response) => {
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
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOpportunityUsingGET"></a>
# **getOpportunityUsingGET**
> Opportunity getOpportunityUsingGET(opportunityId)

Retrieve an Opportunity

Retrives a single opportunity

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

let opportunityId = 789; // Number | opportunityId


apiInstance.getOpportunityUsingGET(opportunityId, (error, data, response) => {
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
 **opportunityId** | **Number**| opportunityId | 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStagePipelineUsingGET"></a>
# **getStagePipelineUsingGET**
> [SalesPipeline] getStagePipelineUsingGET()

List Opportunity Stage Pipeline

Retrieves a list of all opportunity stages with pipeline details

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

apiInstance.getStagePipelineUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SalesPipeline]**](SalesPipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOpportunitiesUsingGET"></a>
# **listOpportunitiesUsingGET**
> OpportunityList listOpportunitiesUsingGET(opts)

List Opportunities

Retrieves a list of all opportunities

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

let opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'userId': 789, // Number | Returns opportunities for the provided user id
  'stageId': 789, // Number | Returns opportunities for the provided stage id
  'searchTerm': "searchTerm_example", // String | Returns opportunities that match any of the contact's `given_name`, `family_name`, `company_name`, and `email_addresses` (searches `EMAIL1` only) fields as well as `opportunity_title`
  'order': "order_example" // String | Attribute to order items by
};

apiInstance.listOpportunitiesUsingGET(opts, (error, data, response) => {
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
 **userId** | **Number**| Returns opportunities for the provided user id | [optional] 
 **stageId** | **Number**| Returns opportunities for the provided stage id | [optional] 
 **searchTerm** | **String**| Returns opportunities that match any of the contact&#39;s &#x60;given_name&#x60;, &#x60;family_name&#x60;, &#x60;company_name&#x60;, and &#x60;email_addresses&#x60; (searches &#x60;EMAIL1&#x60; only) fields as well as &#x60;opportunity_title&#x60; | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 

### Return type

[**OpportunityList**](OpportunityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceOpportunityUsingPUT"></a>
# **replaceOpportunityUsingPUT**
> Opportunity replaceOpportunityUsingPUT(opts)

Replace an Opportunity

Replaces all values of a given opportunity

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

let opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

apiInstance.replaceOpportunityUsingPUT(opts, (error, data, response) => {
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
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOpportunityUsingPATCH"></a>
# **updateOpportunityUsingPATCH**
> Opportunity updateOpportunityUsingPATCH(opportunityId, opts)

Update an Opportunity

Updates an opportunity with only the values provided in the request.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.OpportunityApi();

let opportunityId = 789; // Number | opportunityId

let opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

apiInstance.updateOpportunityUsingPATCH(opportunityId, opts, (error, data, response) => {
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
 **opportunityId** | **Number**| opportunityId | 
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

