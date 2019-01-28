const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants
                .create({
                   friendlyName: 'Nancode Assistant',
                   uniqueName: 'Nancode-assistant'
                 })
                .then(assistant => console.log(assistant.sid))
                .done();