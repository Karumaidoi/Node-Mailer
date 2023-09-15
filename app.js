const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

async function sendEmailUser(email) {
  const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
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

sendEmailUser("example@gmail.com");
