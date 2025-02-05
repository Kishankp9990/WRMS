const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path')
const env = require('./environment');
// create reusable transporter object using the default SMTP transport
//transporter is an object which we will connect to nodemailer
let transporter = nodemailer.createTransport(env.smtp);

let renderTemplate = (relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),

        function (err, template) {
            if (err) { console.log('error in rendering template', err); return }

            mailHTML = template;
        }
    )

    return mailHTML;
}


module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}