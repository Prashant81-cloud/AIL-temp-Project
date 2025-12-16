import nodemailer from "nodemailer";

export default async function handler(req, res) {

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { brandName, email, phone } = req.body;

  // Required fields validation
  if (!brandName || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AIL Website" <${process.env.EMAIL_USER}>`,
      to: "prashant81046@gmail.com",
      replyTo: email,
      subject: "New Submission – Upcoming Series",
      html: `
        <h2>Upcoming Series – Brand Submission</h2>
        <p><b>Brand Name:</b> ${brandName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not Provided"}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
