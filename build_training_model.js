const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UA40ba4b6ce3462a83987702ff2497fce2')
                .modelBuilds
                .create({uniqueName: 'v0.3'})
                .then(model_build => console.log(model_build.sid))
                .done();