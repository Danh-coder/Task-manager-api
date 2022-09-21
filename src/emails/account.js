const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danhphan141204@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danhphan141204@gmail.com',
        subject: `See you next time, ${name}`,
        text: 'Can you tell me why you cancelled our application?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}