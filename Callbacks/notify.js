import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const notify = async (req, res) => {
  const { day, email, formId } = req.body;
  const currentDate = new Date();

  try {
    const existingUser = await prisma.form.update({
      where: { id: formId },
      data: { notify: currentDate },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "Form not found" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"arai99981@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Permit Application",
        link: "https://mailgen.js/",
      },
    });

    let response = {
      body: {
        intro: "You received this email because your permit is about to expire",
        table: {
          data: [
            {
              item: `EXPIRES IN ${day} days`,
            },
          ],
        },
        outro: "You received this email because your permit is about to expire",
      },
    };

    let mail = MailGenerator.generate(response);
    let message = {
      from: "arai99981@gmail.com",
      to: email,
      subject: "PERMIT EXPIRY",
      html: mail,
    };

    const send = await transporter.sendMail(message);
    if (send) {
      console.log("Email sent successfully");
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      console.log("Error while sending email");
      return res.status(500).json({ error: "Error while sending email" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default notify;
