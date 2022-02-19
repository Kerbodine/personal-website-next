const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "contact.michaeltong@gmail.com",
    from: "contact@michaelytong.com",
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  mail.send(data);

  res.status(200).json({ status: "OK" });
};

export default sendMail;
