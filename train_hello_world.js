const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

phrases = [
    'hello',
    'hi',
    'Hello',
    'Hi there',
    'hey',
    'Ummm',
    'So'
]

phrases.forEach(function(item) {
  sample = client.autopilot.assistants('UA40ba4b6ce3462a83987702ff2497fce2')
                           .tasks('hello-world')
                           .samples
                           .create({
                             language: 'en-us',
                             taggedText: item,
                           })
                           .then(sample => console.log(sample.sid))
                           .done();
})