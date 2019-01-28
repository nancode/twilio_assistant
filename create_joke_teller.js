const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

jokeActions = {
  actions: [
    { say: 'I was going to look for my missing watch, but I could never find the time.' }
  ]
}
task = client.autopilot.assistants('UA40ba4b6ce3462a83987702ff2497fce2')
                       .tasks
                       .create({
                         uniqueName: 'tell-a-joke',
                         actions: jokeActions,
                       })
                       .then(task => console.log(task.sid))
                       .done();
