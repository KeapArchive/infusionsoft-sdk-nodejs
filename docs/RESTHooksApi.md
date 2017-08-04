# InfusionsoftRestApi.RESTHooksApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAHookSubscription**](RESTHooksApi.md#createAHookSubscription) | **POST** /hooks | Create a Hook Subscription
[**deleteAHookSubscription**](RESTHooksApi.md#deleteAHookSubscription) | **DELETE** /hooks/{key} | Delete a Hook Subscription
[**listHookEventTypes**](RESTHooksApi.md#listHookEventTypes) | **GET** /hooks/event_keys | List Hook Event Types
[**listStoredHookSubscriptions**](RESTHooksApi.md#listStoredHookSubscriptions) | **GET** /hooks | List Stored Hook Subscriptions
[**retrieveAHookSubscription**](RESTHooksApi.md#retrieveAHookSubscription) | **GET** /hooks/{key} | Retrieve a Hook Subscription
[**updateAHookSubscription**](RESTHooksApi.md#updateAHookSubscription) | **PUT** /hooks/{key} | Update a Hook Subscription
[**verifyAHookSubscription**](RESTHooksApi.md#verifyAHookSubscription) | **POST** /hooks/{key}/verify | Verify a Hook Subscription


<a name="createAHookSubscription"></a>
# **createAHookSubscription**
> RestHook createAHookSubscription(restHookRequest)

Create a Hook Subscription

To receive hooks, you&#39;ll first need to subscribe to events one at a time *and* individually verify each subscription.  This operation is used to create hook subscriptions. During this process, Infusionsoft will attempt to verify your subscription. Continue reading to learn how that works.  To verify or reactivate a hook subscription, Infusionsoft will make a &#x60;POST&#x60; request with a temporary secret to the &#x60;hookUrl&#x60; you provided during creation. The secret is passed as the value of a header named &#x60;X-Hook-Secret&#x60;. Your response to that &#x60;POST&#x60; *must* have a status code of &#x60;200&#x60; and return the same &#x60;X-Hook-Secret&#x60; header and value pair. Once you&#39;ve done that, you&#39;ll begin receiving hooks. Don&#39;t worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

let restHookRequest = new InfusionsoftRestApi.RestHookRequest(); // RestHookRequest | restHookRequest


apiInstance.createAHookSubscription(restHookRequest, (error, data, response) => {
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
 **restHookRequest** | [**RestHookRequest**](RestHookRequest.md)| restHookRequest | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAHookSubscription"></a>
# **deleteAHookSubscription**
> deleteAHookSubscription(key)

Delete a Hook Subscription

Stop receiving hooks by deleting an existing hook subscription.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

let key = "key_example"; // String | key


apiInstance.deleteAHookSubscription(key, (error, data, response) => {
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
 **key** | **String**| key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listHookEventTypes"></a>
# **listHookEventTypes**
> [&#39;String&#39;] listHookEventTypes()

List Hook Event Types

### _What are REST Hooks?_  _REST Hooks itself is not a specification, it is a collection of patterns that treat webhooks like subscriptions. These subscriptions are manipulated via a REST API just like any other resource._  _With most modern REST APIs, polling is the only way to detect changes. But it doesn&#39;t have to be. On average, 98.5% of polls are wasted. There is a better way. REST Hooks enable real-time communication and eliminate polling._ -- [RESTHooks.org](http://RESTHooks.org)  Infusionsoft offers a growing set of REST Hooks to keep you notified of changes in your data. To get started, use [List Hook Event Types](#!/REST_Hooks/list_hook_event_types) to discover event types. Event types are identified using _noun.verb dot syntax_, e.g.: &#x60;contact.add&#x60; or &#x60;invoice.delete&#x60;.  Once you&#39;ve chosen the events you&#39;re interested in, subscribe to them via [Create a Hook Subscription](#!/REST_Hooks/create_a_hook_subscription).

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

apiInstance.listHookEventTypes((error, data, response) => {
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

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listStoredHookSubscriptions"></a>
# **listStoredHookSubscriptions**
> [RestHook] listStoredHookSubscriptions()

List Stored Hook Subscriptions

Lists your hook subscriptions.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

apiInstance.listStoredHookSubscriptions((error, data, response) => {
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

[**[RestHook]**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveAHookSubscription"></a>
# **retrieveAHookSubscription**
> RestHook retrieveAHookSubscription(key)

Retrieve a Hook Subscription

Retrieves an existing hook subscription and its status. If your hook subscription becomes inactive, you may request an activation attempt via [Verify a Hook Subscription](#!/REST_Hooks/verify_a_hook_subscription).

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

let key = "key_example"; // String | key


apiInstance.retrieveAHookSubscription(key, (error, data, response) => {
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
 **key** | **String**| key | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAHookSubscription"></a>
# **updateAHookSubscription**
> RestHook updateAHookSubscription(key, restHookRequest)

Update a Hook Subscription

Modify an existing hook subscription using the provided values.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

let key = "key_example"; // String | key

let restHookRequest = new InfusionsoftRestApi.RestHookRequest(); // RestHookRequest | restHookRequest


apiInstance.updateAHookSubscription(key, restHookRequest, (error, data, response) => {
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
 **key** | **String**| key | 
 **restHookRequest** | [**RestHookRequest**](RestHookRequest.md)| restHookRequest | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyAHookSubscription"></a>
# **verifyAHookSubscription**
> RestHook verifyAHookSubscription(key)

Verify a Hook Subscription

This operation is used to verify or reactivate a hook subscription.  To verify or reactivate a hook subscription, Infusionsoft will make a &#x60;POST&#x60; request with a temporary secret to the &#x60;hookUrl&#x60; you provided during creation. The secret is passed as the value of a header named &#x60;X-Hook-Secret&#x60;. Your response to that &#x60;POST&#x60; *must* have a status code of &#x60;200&#x60; and return the same &#x60;X-Hook-Secret&#x60; header and value pair. Once you&#39;ve done that, you&#39;ll begin receiving hooks. Don&#39;t worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.RESTHooksApi();

let key = "key_example"; // String | key


apiInstance.verifyAHookSubscription(key, (error, data, response) => {
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
 **key** | **String**| key | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

