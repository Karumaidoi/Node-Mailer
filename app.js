const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

console.log(process.env.EMAIL_ADDRESS);
async function sendEmailUser() {
  const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  console.log(mailTransporter);
  let mailDetails = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "This is a nodemailer test",
    text: "Am testing to see if we can host mail functions in a server and use them in our apps",
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

sendEmailUser();
