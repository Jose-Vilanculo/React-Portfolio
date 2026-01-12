import mailjet from "node-mailjet";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const client = mailjet.connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
  );

  try {
    await client.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "your-verified-sender@mail.com",
            Name: "Portfolio Contact",
          },
          To: [
            {
              Email: "your-email@mail.com",
              Name: "You",
            },
          ],
          Subject: `New message from ${name}`,
          TextPart: `Email: ${email}\n\n${message}`,
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}
