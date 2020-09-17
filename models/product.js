var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('product', {
    "description": "product API according to CDR standards",
    "connector": "mbs",
    "fields": {
        "productId": {
            "type": "string",
            "required": true
        },
        "effectiveFrom": {
            "type": "string",
            "required": true
        },
        "effectiveTo": {
            "type": "string",
            "required": true
        },
        "lastUpdated": {
            "type": "string",
            "required": true
        },
        "productCategory": {
            "type": "string",
            "required": true
        },
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string",
            "required": true
        },
        "brand": {
            "type": "string",
            "default": "OAB",
            "required": true
        },
        "brandName": {
            "type": "string",
            "required": true
        },
        "applicationUri": {
            "type": "string",
            "required": true
        },
        "isTailored": {
            "type": "boolean"
        },
        "additionalInformation": {
            "type": "object"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;