'use strict';


/**
 * Create a Hook Subscription
 * To receive hooks, you'll first need to subscribe to events one at a time *and* individually verify each subscription.  This operation is used to create hook subscriptions. During this process, Infusionsoft will attempt to verify your subscription. Continue reading to learn how that works.  To verify or reactivate a hook subscription, Infusionsoft will make a `POST` request with a temporary secret to the `hookUrl` you provided during creation. The secret is passed as the value of a header named `X-Hook-Secret`. Your response to that `POST` *must* have a status code of `200` and return the same `X-Hook-Secret` header and value pair. Once you've done that, you'll begin receiving hooks. Don't worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.
 *
 * restHookRequest RestHookRequest restHookRequest
 * returns RestHook
 **/
exports.create_a_hook_subscription = function(restHookRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Hook Subscription
 * Stop receiving hooks by deleting an existing hook subscription.
 *
 * key String key
 * no response value expected for this operation
 **/
exports.delete_a_hook_subscription = function(key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Hook Event Types
 * ### _What are REST Hooks?_  _REST Hooks itself is not a specification, it is a collection of patterns that treat webhooks like subscriptions. These subscriptions are manipulated via a REST API just like any other resource._  _With most modern REST APIs, polling is the only way to detect changes. But it doesn't have to be. On average, 98.5% of polls are wasted. There is a better way. REST Hooks enable real-time communication and eliminate polling._ -- [RESTHooks.org](http://RESTHooks.org)  Infusionsoft offers a growing set of REST Hooks to keep you notified of changes in your data. To get started, use [List Hook Event Types](#!/REST_Hooks/list_hook_event_types) to discover event types. Event types are identified using _noun.verb dot syntax_, e.g.: `contact.add` or `invoice.delete`.  Once you've chosen the events you're interested in, subscribe to them via [Create a Hook Subscription](#!/REST_Hooks/create_a_hook_subscription).
 *
 * returns List
 **/
exports.list_hook_event_types = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Stored Hook Subscriptions
 * Lists your hook subscriptions.
 *
 * returns List
 **/
exports.list_stored_hook_subscriptions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
}, {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a Hook Subscription
 * Retrieves an existing hook subscription and its status. If your hook subscription becomes inactive, you may request an activation attempt via [Verify a Hook Subscription](#!/REST_Hooks/verify_a_hook_subscription).
 *
 * key String key
 * returns RestHook
 **/
exports.retrieve_a_hook_subscription = function(key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a Hook Subscription
 * Modify an existing hook subscription using the provided values.
 *
 * key String key
 * restHookRequest RestHookRequest restHookRequest
 * returns RestHook
 **/
exports.update_a_hook_subscription = function(key,restHookRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify a Hook Subscription
 * This operation is used to verify or reactivate a hook subscription.  To verify or reactivate a hook subscription, Infusionsoft will make a `POST` request with a temporary secret to the `hookUrl` you provided during creation. The secret is passed as the value of a header named `X-Hook-Secret`. Your response to that `POST` *must* have a status code of `200` and return the same `X-Hook-Secret` header and value pair. Once you've done that, you'll begin receiving hooks. Don't worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.
 *
 * key String key
 * returns RestHook
 **/
exports.verify_a_hook_subscription = function(key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventKey" : "eventKey",
  "hookUrl" : "hookUrl",
  "key" : "key",
  "status" : "Unverified"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

