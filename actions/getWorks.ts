import { googleAuth } from "@/libs/google-auth";
import { google } from "googleapis";

export default async function getWorks() {
  try {
    const auth = await googleAuth({ scopeType: "GET" });
    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Work!A2:Z`, // Adjust range as needed
    });

    // Extract values from the response
    const values = response.data.values;

    return values
  } catch (e) {
    console.error(e);
    return null
  }
}