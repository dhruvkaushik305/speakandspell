const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
const senderEmail = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASS;
const port = process.env.PORT || 3000;
if (!senderEmail || !password) {
  console.log(
    "Please set the environment variables EMAIL_ADDRESS and EMAIL_PASS"
  );
  process.exit(1);
}
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: password,
  },
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", (req, res) => {
  res.status(200).json({ message: "The service is online" });
});
app.post("/sendEmail", (req, res) => {
  const { name, email, phone, query } = req.body;
  const mailOptions = {
    from: senderEmail,
    to: senderEmail,
    subject: `${name} wants to contact you`,
    text: `${name} has reached out to you. The query is: ${query}.
    \n Additional contact information: \n Phone number:${phone}
    Email: ${email}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({ success: false, message: error });
      console.log("Gracefully caught", error);
    } else {
      res.status(200).json({ success: true, message: info.response });
      console.log("Email sent");
    }
  });
});
