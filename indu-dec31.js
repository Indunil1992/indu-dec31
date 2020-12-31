const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_WrZwPbTz1",
            Limit: 10
        }).promise();
        console.log(err)
    } catch (err) {
        console.log(err)
        // error handling goes here
    };

    try {
        let data = await s3.listObjects({
            Bucket: "inbubuckett",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully exec uted" };
};