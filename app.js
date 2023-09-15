const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

console.log(process.env.EMAIL_ADDRESS);
// async function sendEmailUser() {
//   console.log("Sending mail");
//   const mailTransporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "mainahmwangi12@gmail.com",
//       pass: "mdyrwqswwolzpmjm",
//     },
//   });

//   console.log(mailTransporter);
//   let mailDetails = {
//     from: "mainahmwangi12@gmail.com",
//     to: "mainahmwangi12@gmail.com",
//     subject: "This is a nodemailer test",
//     text: "Am testing to see if we can host mail functions in a server and use them in our apps",
//   };

//   mailTransporter.sendMail(mailDetails, (err, data) => {
//     console.log(data);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });
// }

// sendEmailUser();
