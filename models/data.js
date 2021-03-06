var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('data', {
    "connector": "composite",
    "fields": {
        "productId": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "productId"
        },
        "effectiveFrom": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "effectiveFrom"
        },
        "effectiveTo": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "effectiveTo"
        },
        "lastUpdated": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "lastUpdated"
        },
        "productCategory": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "productCategory"
        },
        "name": {
            "type": "string",
            "model": "product",
            "name": "name"
        },
        "description": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "description"
        },
        "brand": {
            "type": "string",
            "default": "OAB",
            "required": true,
            "model": "product",
            "name": "brand"
        },
        "brandName": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "brandName"
        },
        "applicationUri": {
            "type": "string",
            "required": true,
            "model": "product",
            "name": "applicationUri"
        },
        "isTailored": {
            "type": "boolean",
            "model": "product",
            "name": "isTailored"
        },
        "additionalInformation": {
            "model": "additionalInformation",
            "type": "object"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ],
    "metadata": {
        "primarykey": "id",
        "primaryKeyDetails": {
            "autogenerated": true
        },
        "inner_join": [
            {
                "model": "additionalInformation",
                "join_properties": {
                    "overviewUri": "additionalInformation"
                }
            }
        ]
    }
});
module.exports = Model;