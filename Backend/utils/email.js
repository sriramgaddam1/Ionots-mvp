const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password',
    },
  });

  await transporter.sendMail({
    from: '"Ionots" <your-email@gmail.com>',
    to,
    subject,
    text,
  });
};
