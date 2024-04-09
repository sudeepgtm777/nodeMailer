const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config({ path: './config.env' });

console.log(process.env.EMAIL_HOST);

var transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const message = {
  from: '<onlineSudeep>',
  to: 'sudeeponlie@gmail.com',
  subject: 'How are you',
  text: 'Testing purpose',
};

transport.sendMail(message, (err, info) => {
  if (!err) console.log(info);

  console.log(err);
});
