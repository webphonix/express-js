const mailgun = require("mailgun-js");
const express = require('express')
 const router = express.Router()
// const api_key="key-48117aeee77d656ab7a6000d2812ef07";
// const DOMAIN = 'sandboxb47f115300d34beda80dc55ad195a37f.mailgun.org';
// const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'ektaprasad3582@gmail.com',
// 	to: 'ektaprasad3582@gmail.com',
// 	subject: 'testing',
// 	text: 'this is a testing email.'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

const mail = mailgun({
     apiKey:"key-48117aeee77d656ab7a6000d2812ef07",
      domain:'sandboxb47f115300d34beda80dc55ad195a37f.mailgun.org'
  })

  const data = {
     from: 'ektaprasad3582@gmail.com',
     to: 'ektaprasad3582@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  };
  
   mail.messages().send(data, (error, body) => {
    console.log(body);
  });


module.exports = router
