"use server"; // Marks this as a Server Action

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: "recipient@example.com", // Replace with your desired recipient
      subject: `New message from ${name}`,
      text: message,
      replyTo: email,
    });
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email." };
  }
}
