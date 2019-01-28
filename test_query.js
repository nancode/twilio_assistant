const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
query = client.autopilot.assistants('UA40ba4b6ce3462a83987702ff2497fce2')
                                 .queries
                                 .create({
                                   language: 'en-US',
                                   query: 'Tell me a joke',
                                 })
                                 .then(query => console.log(query.results.task))
                                 .done();