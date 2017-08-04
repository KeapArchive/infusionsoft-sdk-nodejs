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





/**
* The HistoricalCounts model module.
* @module model/HistoricalCounts
* @version V1.0
*/
export default class HistoricalCounts {
    /**
    * Constructs a new <code>HistoricalCounts</code>.
    * @alias module:model/HistoricalCounts
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>HistoricalCounts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HistoricalCounts} obj Optional instance to populate.
    * @return {module:model/HistoricalCounts} The populated <code>HistoricalCounts</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalCounts();

            
            
            

            if (data.hasOwnProperty('24_hours')) {
                obj['24_hours'] = ApiClient.convertToType(data['24_hours'], 'Number');
            }
            if (data.hasOwnProperty('30_days')) {
                obj['30_days'] = ApiClient.convertToType(data['30_days'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} 24_hours
    */
    24_hours = undefined;
    /**
    * @member {Number} 30_days
    */
    30_days = undefined;








}

