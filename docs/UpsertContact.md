# InfusionsoftRestApi.UpsertContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[Address]**](Address.md) |  | [optional] 
**birthday** | **Date** |  | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**contactType** | **String** |  | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**dateCreated** | **Date** |  | [optional] 
**duplicateOption** | **String** |  | [optional] 
**emailAddresses** | [**[EmailAddress]**](EmailAddress.md) |  | [optional] 
**familyName** | **String** |  | [optional] 
**faxNumbers** | [**[FaxNumber]**](FaxNumber.md) |  | [optional] 
**givenName** | **String** |  | [optional] 
**jobTitle** | **String** |  | [optional] 
**lastUpdated** | **Date** |  | [optional] 
**leadSourceId** | **Number** |  | [optional] 
**middleName** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**optInReason** | **String** |  | [optional] 
**ownerId** | **Number** |  | [optional] 
**phoneNumbers** | [**[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**preferredLocale** | **String** |  | [optional] 
**preferredName** | **String** |  | [optional] 
**prefix** | **String** |  | [optional] 
**relationships** | [**[Relationship]**](Relationship.md) |  | [optional] 
**sourceType** | **String** |  | [optional] 
**suffix** | **String** |  | [optional] 
**tagIds** | **[Number]** |  | [optional] 
**timeZone** | **String** |  | [optional] 
**website** | **String** |  | [optional] 


<a name="DuplicateOptionEnum"></a>
## Enum: DuplicateOptionEnum


* `Email` (value: `"Email"`)

* `EmailAndName` (value: `"EmailAndName"`)




<a name="SourceTypeEnum"></a>
## Enum: SourceTypeEnum


* `WEBFORM` (value: `"WEBFORM"`)

* `LANDINGPAGE` (value: `"LANDINGPAGE"`)

* `IMPORT` (value: `"IMPORT"`)

* `MANUAL` (value: `"MANUAL"`)

* `API` (value: `"API"`)

* `OTHER` (value: `"OTHER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




