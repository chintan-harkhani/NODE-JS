const nodemailer = require("nodemailer");
const config = require("../config/config");

let transport = nodemailer.createTransport({
  host: config.email.smtp.host,
  port: config.email.smtp.port,
  auth: {
    user: config.email.smtp.auth.user,
    pass: config.email.smtp.auth.password,
  },
});

/** Send mail */
const SendMail = async (to, subject, text) => {
  try {
    return transport.sendMail({
      from: config.email.from,
      to,
      subject,
      text,
      html: `
     <h2>Hello Every One</h2>
      `,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  SendMail,
};