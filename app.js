require('dotenv').config()
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

(async () => {
    await web.users.lookupByEmail({
        email: "abeatrice.mail@gmail.com"
    })
    .then(res => web.chat.postMessage({
        text: 'this is a message',
        channel: res.user.id,
    }))
    .catch(err => console.log(err));
})();
