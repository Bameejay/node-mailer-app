const nodemailer = require('nodemailer');
const cron = require('node-cron')

var mailList = [
    'jaysegs08@gmail.com',
    'jaysegs30@gmail.com',
];

let mailOptions = {
    from: 'bameejay@gmail.com',
    to: mailList,
    subject: 'Email from Node-App: A Test Message!',
    text: 'Testing out nodemailer to work, Adding an attachment should be the next',
    attachments: [{
        filename: 'Johnson Francis.docx', // Replace with your attachment file name
        path: 'C:/Users/JOHNSON FRANCIS/Documents/Johnson Francis.docx', // Replace with the actual file path
        // contentType: 'image/png' // Replace with the appropriate content type
    }]
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
        user: 'bameejay@gmail.com',
        pass: 'hzektpwlvmnbbdit'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },

});

cron.schedule('0 */02 * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
        else console.log('Email sent: ' + info.response);
    });
});