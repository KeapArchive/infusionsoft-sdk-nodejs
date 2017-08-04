# InfusionsoftRestApi.CampaignApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToCampaignSequenceUsingPOST**](CampaignApi.md#addContactsToCampaignSequenceUsingPOST) | **POST** /campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId} | Add to Campaign Sequence
[**addContactsToCampaignSequenceUsingPOST1**](CampaignApi.md#addContactsToCampaignSequenceUsingPOST1) | **POST** /campaigns/{campaignId}/sequences/{sequenceId}/contacts | Add Multiple to Campaign Sequence
[**getAllCampaignsUsingGET**](CampaignApi.md#getAllCampaignsUsingGET) | **GET** /campaigns | List Campaigns
[**getCampaignUsingGET**](CampaignApi.md#getCampaignUsingGET) | **GET** /campaigns/{campaignId} | Retrieve a Campaign
[**removeContactsFromCampaignSequenceUsingDELETE**](CampaignApi.md#removeContactsFromCampaignSequenceUsingDELETE) | **DELETE** /campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId} | Remove from Campaign Sequence
[**removeContactsFromCampaignSequenceUsingDELETE1**](CampaignApi.md#removeContactsFromCampaignSequenceUsingDELETE1) | **DELETE** /campaigns/{campaignId}/sequences/{sequenceId}/contacts | Remove Multiple from Campaign Sequence


<a name="addContactsToCampaignSequenceUsingPOST"></a>
# **addContactsToCampaignSequenceUsingPOST**
> addContactsToCampaignSequenceUsingPOST(campaignId, sequenceId, contactId)

Add to Campaign Sequence

Adds a single contact to a campaign sequence

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let campaignId = 789; // Number | campaignId

let sequenceId = 789; // Number | sequenceId

let contactId = 789; // Number | contactId


apiInstance.addContactsToCampaignSequenceUsingPOST(campaignId, sequenceId, contactId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| campaignId | 
 **sequenceId** | **Number**| sequenceId | 
 **contactId** | **Number**| contactId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addContactsToCampaignSequenceUsingPOST1"></a>
# **addContactsToCampaignSequenceUsingPOST1**
> addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, ids)

Add Multiple to Campaign Sequence

Adds a list of contacts to a campaign sequence

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let campaignId = 789; // Number | campaignId

let sequenceId = 789; // Number | sequenceId

let ids = new InfusionsoftRestApi.SetOfIds(); // SetOfIds | ids


apiInstance.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, ids, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| campaignId | 
 **sequenceId** | **Number**| sequenceId | 
 **ids** | [**SetOfIds**](SetOfIds.md)| ids | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllCampaignsUsingGET"></a>
# **getAllCampaignsUsingGET**
> CampaignList getAllCampaignsUsingGET(opts)

List Campaigns

Retrieves all campaigns for the authenticated user

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.getAllCampaignsUsingGET(opts, (error, data, response) => {
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

### Return type

[**CampaignList**](CampaignList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignUsingGET"></a>
# **getCampaignUsingGET**
> Campaign getCampaignUsingGET(campaignId, opts)

Retrieve a Campaign

Retrieves a single campaign

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let campaignId = 789; // Number | campaignId

let opts = { 
  'optionalProperties': ["optionalProperties_example"] // [String] | Comma-delimited list of Campaign properties to include in the response. (The fields `goals` and `sequences` aren't included, by default.)
};

apiInstance.getCampaignUsingGET(campaignId, opts, (error, data, response) => {
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
 **campaignId** | **Number**| campaignId | 
 **optionalProperties** | [**[String]**](String.md)| Comma-delimited list of Campaign properties to include in the response. (The fields &#x60;goals&#x60; and &#x60;sequences&#x60; aren&#39;t included, by default.) | [optional] 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeContactsFromCampaignSequenceUsingDELETE"></a>
# **removeContactsFromCampaignSequenceUsingDELETE**
> removeContactsFromCampaignSequenceUsingDELETE(campaignId, sequenceId, contactId)

Remove from Campaign Sequence

Removes a single contact from a campaign sequence

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let campaignId = 789; // Number | campaignId

let sequenceId = 789; // Number | sequenceId

let contactId = 789; // Number | contactId


apiInstance.removeContactsFromCampaignSequenceUsingDELETE(campaignId, sequenceId, contactId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| campaignId | 
 **sequenceId** | **Number**| sequenceId | 
 **contactId** | **Number**| contactId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeContactsFromCampaignSequenceUsingDELETE1"></a>
# **removeContactsFromCampaignSequenceUsingDELETE1**
> removeContactsFromCampaignSequenceUsingDELETE1(campaignId, sequenceId, ids)

Remove Multiple from Campaign Sequence

Removes a list of contacts from a campaign sequence

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.CampaignApi();

let campaignId = 789; // Number | campaignId

let sequenceId = 789; // Number | sequenceId

let ids = new InfusionsoftRestApi.SetOfIds(); // SetOfIds | ids


apiInstance.removeContactsFromCampaignSequenceUsingDELETE1(campaignId, sequenceId, ids, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| campaignId | 
 **sequenceId** | **Number**| sequenceId | 
 **ids** | [**SetOfIds**](SetOfIds.md)| ids | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

