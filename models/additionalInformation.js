var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('additionalInformation', {
    "connector": "memory",
    "fields": {
        "overviewUri": {
            "type": "string",
            "required": true
        },
        "termsUri": {
            "type": "string"
        },
        "eligibilityUri": {
            "type": "string"
        },
        "feesAndPricingUri": {
            "type": "string"
        },
        "bundleUri": {
            "type": "string"
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