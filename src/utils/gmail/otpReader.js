import { simpleParser } from "mailparser";
import { createGmailClient } from "./gmailClient.js";

export async function getSaleshandyOTP() {
  const client = await createGmailClient();
  const lock = await client.getMailboxLock("INBOX");

  try {
    const messages = await client.search(
      {
        since: new Date(Date.now() - 5 * 60 * 1000), // Last 5 minutes
      },
      { uid: true },
    );

    for (const uid of messages.reverse()) {
      const message = await client.fetchOne(
        uid,
        { source: true },
        { uid: true },
      );

      const email = await simpleParser(message.source);

      // Check if email is from Saleshandy (case insensitive)
      const isSaleshandySubject = email.subject?.toLowerCase().includes("saleshandy");
      const isSaleshandyFrom = email.from?.text?.toLowerCase().includes("saleshandy");
      
      if (!isSaleshandySubject && !isSaleshandyFrom) {
        continue;
      }

      // Look for the specific pattern "Your One time password for login is XXXX!"
      const otpMatch = email.subject?.match(/Your One time password for login is (\d{4})/i);
      
      if (otpMatch) {
        console.log(`Found OTP in subject: ${otpMatch[1]}`);
        return otpMatch[1];
      }

      // Fallback: look for 4-digit code in email text
      const textMatch = email.text?.match(/\b(\d{4})\b/);
      if (textMatch) {
        console.log(`Found OTP in text: ${textMatch[1]}`);
        return textMatch[1];
      }
    }

    throw new Error("Saleshandy OTP not found");
  } finally {
    lock.release();
    await client.logout();
  }
}
