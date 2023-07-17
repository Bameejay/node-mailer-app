const nodemailer = require('nodemailer');

let mailOptions = {
    from: 'bameejay@gmail.com',
    to: 'jaysegs08@gmail.com',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Some content to send',
  };

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'delbert.johnson68@ethereal.email',
//         pass: 'jdFpbRGHYGNEXxu8vK'
//     }
// });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bameejay@gmail.com',
      pass: 'hzektpwlvmnbbdit'
    }
  });


transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
