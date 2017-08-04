# InfusionsoftRestApi.TaskApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskUsingPOST**](TaskApi.md#createTaskUsingPOST) | **POST** /tasks | Create a Task
[**loadTaskUsingGET**](TaskApi.md#loadTaskUsingGET) | **GET** /tasks/{taskId} | Retrieve a Task
[**removeTaskUsingDELETE**](TaskApi.md#removeTaskUsingDELETE) | **DELETE** /tasks/{taskId} | Delete a Task
[**replaceTaskUsingPUT**](TaskApi.md#replaceTaskUsingPUT) | **PUT** /tasks/{taskId} | Replace a Task
[**searchUsingGET4**](TaskApi.md#searchUsingGET4) | **GET** /tasks/search | Search Tasks
[**syncUsingGET2**](TaskApi.md#syncUsingGET2) | **GET** /tasks/sync | Retrieve Synced Tasks
[**tasksUsingGET**](TaskApi.md#tasksUsingGET) | **GET** /tasks | List Tasks
[**updateTaskUsingPATCH**](TaskApi.md#updateTaskUsingPATCH) | **PATCH** /tasks/{taskId} | Update a Task


<a name="createTaskUsingPOST"></a>
# **createTaskUsingPOST**
> Task createTaskUsingPOST(task)

Create a Task

Creates a new task as the authenticated user. NB: Contact must contain at least one item in the fields &#x60;title&#x60; and &#x60;due_date&#x60;. All other attributes are optional

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let task = new InfusionsoftRestApi.Task(); // Task | task


apiInstance.createTaskUsingPOST(task, (error, data, response) => {
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
 **task** | [**Task**](Task.md)| task | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loadTaskUsingGET"></a>
# **loadTaskUsingGET**
> Task loadTaskUsingGET(taskId)

Retrieve a Task

Retrieves a single task

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let taskId = "taskId_example"; // String | taskId


apiInstance.loadTaskUsingGET(taskId, (error, data, response) => {
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
 **taskId** | **String**| taskId | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTaskUsingDELETE"></a>
# **removeTaskUsingDELETE**
> removeTaskUsingDELETE(taskId)

Delete a Task

Permanently deletes a task

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let taskId = "taskId_example"; // String | taskId


apiInstance.removeTaskUsingDELETE(taskId, (error, data, response) => {
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
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceTaskUsingPUT"></a>
# **replaceTaskUsingPUT**
> Task replaceTaskUsingPUT(taskId, task)

Replace a Task

Replaces a task with the values provided in the request

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let taskId = "taskId_example"; // String | taskId

let task = new InfusionsoftRestApi.Task(); // Task | task


apiInstance.replaceTaskUsingPUT(taskId, task, (error, data, response) => {
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
 **taskId** | **String**| taskId | 
 **task** | [**Task**](Task.md)| task | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingGET4"></a>
# **searchUsingGET4**
> TaskList searchUsingGET4(opts)

Search Tasks

Retrieves Tasks belonging to the authenticated user using the specified search criteria

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let opts = { 
  'contactId': 789, // Number | Returns tasks for the provided contact id
  'hasDueDate': true, // Boolean | Returns tasks that have an 'action date' when set to true
  'userId': 789, // Number | Returns tasks for the provided user id
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'completed': true, // Boolean | Sets completed status of items to return
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'order': "order_example" // String | Attribute to order items by
};

apiInstance.searchUsingGET4(opts, (error, data, response) => {
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
 **contactId** | **Number**| Returns tasks for the provided contact id | [optional] 
 **hasDueDate** | **Boolean**| Returns tasks that have an &#39;action date&#39; when set to true | [optional] 
 **userId** | **Number**| Returns tasks for the provided user id | [optional] 
 **since** | **String**| Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **until** | **String**| Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **completed** | **Boolean**| Sets completed status of items to return | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 

### Return type

[**TaskList**](TaskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncUsingGET2"></a>
# **syncUsingGET2**
> TaskStatusList syncUsingGET2(opts)

Retrieve Synced Tasks

The Sync endpoint returns a set of tasks that have been updated or created since the last result set was retrieved, minus any tasks that have been deleted.

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let opts = { 
  'syncToken': "syncToken_example", // String | sync_token
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.syncUsingGET2(opts, (error, data, response) => {
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

[**TaskStatusList**](TaskStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasksUsingGET"></a>
# **tasksUsingGET**
> TaskList tasksUsingGET(opts)

List Tasks

Retrieves a list of all tasks using the specified search criteria

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let opts = { 
  'contactId': 789, // Number | contact_id
  'hasDueDate': true, // Boolean | has_due_date
  'userId': 789, // Number | user_id
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'completed': true, // Boolean | Sets completed status of items to return
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'order': "order_example" // String | Attribute to order items by
};

apiInstance.tasksUsingGET(opts, (error, data, response) => {
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
 **contactId** | **Number**| contact_id | [optional] 
 **hasDueDate** | **Boolean**| has_due_date | [optional] 
 **userId** | **Number**| user_id | [optional] 
 **since** | **String**| Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **until** | **String**| Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **completed** | **Boolean**| Sets completed status of items to return | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 

### Return type

[**TaskList**](TaskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaskUsingPATCH"></a>
# **updateTaskUsingPATCH**
> Task updateTaskUsingPATCH(taskId, task)

Update a Task

Updates a task with only the values provided in the request

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.TaskApi();

let taskId = "taskId_example"; // String | taskId

let task = new InfusionsoftRestApi.Task(); // Task | task


apiInstance.updateTaskUsingPATCH(taskId, task, (error, data, response) => {
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
 **taskId** | **String**| taskId | 
 **task** | [**Task**](Task.md)| task | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

