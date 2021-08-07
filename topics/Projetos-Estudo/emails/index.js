const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');



async function main() {
    try {
        /**
            {
                "user": "{email}",
                "pass": "{senha}"
            }
        */
        const credentials = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, 'client-secret.json'),
                { encoding: 'utf-8' }
            )
        );


        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: credentials,
            tls: {
                rejectUnauthorized: false
            }
        });


        const info = await transporter.sendMail({
            from: `"Christian Emails" <${credentials.user}>`, // sender address
            to: 'christianbetta@gmail.com', // list of receivers
            subject: 'Hello World', // Subject line
            html: `
                <div class="test" style="display: block;width: 20px;height: 20px;border: 1px solid #000000;"></div>
                <p style="font-size: 10px;color: #000000;font-weight: 400;">Teste teste</p>
            `, // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    catch (error) {
        console.log('Error in send email');
        console.log(error);
    }
}


main()