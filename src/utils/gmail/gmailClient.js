import "dotenv/config";
import { ImapFlow } from "imapflow";

export async function createGmailClient() {
  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    logger: false,

    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await client.connect();

  return client;
}
