const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Task - set of actions when interacting with the use. This task greets the user and waits for the response from the user. 
// define say and listen
helloWorldTaskActions = {
  actions: [
    { say: 'Hi there, This is Nandy\'s virtual assistant! I\'ll be assisting you today. May I know who is this?' },
    { listen: true }
  ]
};

// Create the hello_world task
//the variable argument is the sid for the assistant.
client.autopilot.assistants('UA40ba4b6ce3462a83987702ff2497fce2')
                .tasks
                .create({
                  uniqueName: 'hello-world',
                  actions: helloWorldTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();