import nodemailer from 'nodemailer';

// pass in username and password of account to login for email sending
function mailer(username?:string,password?:string) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: username || process.env.SUPPORT_EMAIL_USERNAME, // username of host email account
      pass: password || process.env.SUPPORT_EMAIL_PASSWORD, // password of host email account
    },
  });

  return transporter;

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default mailer
