/**
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import BasicContact from './BasicContact';





/**
* The Task model module.
* @module model/Task
* @version V1.0
*/
export default class Task {
    /**
    * Constructs a new <code>Task</code>.
    * @alias module:model/Task
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Task} obj Optional instance to populate.
    * @return {module:model/Task} The populated <code>Task</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            
            
            

            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('completion_date')) {
                obj['completion_date'] = ApiClient.convertToType(data['completion_date'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = BasicContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} completed
    */
    completed = undefined;
    /**
    * @member {String} completion_date
    */
    completion_date = undefined;
    /**
    * @member {module:model/BasicContact} contact
    */
    contact = undefined;
    /**
    * @member {String} creation_date
    */
    creation_date = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} due_date
    */
    due_date = undefined;
    /**
    * @member {String} modification_date
    */
    modification_date = undefined;
    /**
    * @member {Number} priority
    */
    priority = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {Number} user_id
    */
    user_id = undefined;








}

