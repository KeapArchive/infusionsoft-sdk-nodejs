# InfusionsoftRestApi.AppointmentApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appointmentsUsingGET**](AppointmentApi.md#appointmentsUsingGET) | **GET** /appointments | List Appointments
[**createAppointmentUsingPOST**](AppointmentApi.md#createAppointmentUsingPOST) | **POST** /appointments | Create an Appointment
[**loadAppointmentUsingGET**](AppointmentApi.md#loadAppointmentUsingGET) | **GET** /appointments/{appointmentId} | Retrieve an Appointment
[**removeAppointmentUsingDELETE**](AppointmentApi.md#removeAppointmentUsingDELETE) | **DELETE** /appointments/{appointmentId} | Delete an Appointment
[**replaceAppointmentUsingPUT**](AppointmentApi.md#replaceAppointmentUsingPUT) | **PUT** /appointments/{appointmentId} | Replace an Appointment
[**searchUsingGET**](AppointmentApi.md#searchUsingGET) | **GET** /appointments/search | Search Appointments
[**syncUsingGET**](AppointmentApi.md#syncUsingGET) | **GET** /appointments/sync | Retrieve Synced Appointments
[**updateAppointmentUsingPATCH**](AppointmentApi.md#updateAppointmentUsingPATCH) | **PATCH** /appointments/{appointmentId} | Update an Appointment


<a name="appointmentsUsingGET"></a>
# **appointmentsUsingGET**
> AppointmentList appointmentsUsingGET(opts)

List Appointments

Retrieves all appointments for the authenticated user

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let opts = { 
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.appointmentsUsingGET(opts, (error, data, response) => {
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
 **since** | **String**| Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **until** | **String**| Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 

### Return type

[**AppointmentList**](AppointmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAppointmentUsingPOST"></a>
# **createAppointmentUsingPOST**
> Appointment createAppointmentUsingPOST(appointment)

Create an Appointment

Creates a new appointment as the authenticated user

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let appointment = new InfusionsoftRestApi.Appointment(); // Appointment | appointment


apiInstance.createAppointmentUsingPOST(appointment, (error, data, response) => {
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
 **appointment** | [**Appointment**](Appointment.md)| appointment | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loadAppointmentUsingGET"></a>
# **loadAppointmentUsingGET**
> Appointment loadAppointmentUsingGET(appointmentId)

Retrieve an Appointment

Retrieves a specific appointment belonging to the authenticated user

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let appointmentId = "appointmentId_example"; // String | appointmentId


apiInstance.loadAppointmentUsingGET(appointmentId, (error, data, response) => {
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
 **appointmentId** | **String**| appointmentId | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeAppointmentUsingDELETE"></a>
# **removeAppointmentUsingDELETE**
> removeAppointmentUsingDELETE(appointmentId)

Delete an Appointment

Deletes the specified appointment

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let appointmentId = "appointmentId_example"; // String | appointmentId


apiInstance.removeAppointmentUsingDELETE(appointmentId, (error, data, response) => {
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
 **appointmentId** | **String**| appointmentId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceAppointmentUsingPUT"></a>
# **replaceAppointmentUsingPUT**
> Appointment replaceAppointmentUsingPUT(appointmentId, appointment)

Replace an Appointment

Replaces all values of a given appointment

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let appointmentId = "appointmentId_example"; // String | appointmentId

let appointment = new InfusionsoftRestApi.Appointment(); // Appointment | appointment


apiInstance.replaceAppointmentUsingPUT(appointmentId, appointment, (error, data, response) => {
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
 **appointmentId** | **String**| appointmentId | 
 **appointment** | [**Appointment**](Appointment.md)| appointment | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingGET"></a>
# **searchUsingGET**
> AppointmentList searchUsingGET(opts)

Search Appointments

Retrieves all appointments belonging to the authenticated user for the specified date range

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let opts = { 
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.searchUsingGET(opts, (error, data, response) => {
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
 **since** | **String**| Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **until** | **String**| Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60; | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 

### Return type

[**AppointmentList**](AppointmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncUsingGET"></a>
# **syncUsingGET**
> AppointmentStatusList syncUsingGET(opts)

Retrieve Synced Appointments

The Sync endpoint returns a set of appointments that have been updated or created since the last result set was retrieved, minus any appointments that have been deleted

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let opts = { 
  'syncToken': "syncToken_example", // String | sync_token
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

apiInstance.syncUsingGET(opts, (error, data, response) => {
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

[**AppointmentStatusList**](AppointmentStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAppointmentUsingPATCH"></a>
# **updateAppointmentUsingPATCH**
> Appointment updateAppointmentUsingPATCH(appointmentId, appointment)

Update an Appointment

Updates the provided values of a given appointment

### Example
```javascript
import InfusionsoftRestApi from 'infusionsoft_rest_api';

let apiInstance = new InfusionsoftRestApi.AppointmentApi();

let appointmentId = "appointmentId_example"; // String | appointmentId

let appointment = new InfusionsoftRestApi.Appointment(); // Appointment | appointment


apiInstance.updateAppointmentUsingPATCH(appointmentId, appointment, (error, data, response) => {
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
 **appointmentId** | **String**| appointmentId | 
 **appointment** | [**Appointment**](Appointment.md)| appointment | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

