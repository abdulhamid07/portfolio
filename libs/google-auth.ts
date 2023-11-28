import { google } from "googleapis"

type Scopes = {
  "POST": string[];
  "GET": string[];
}
const SCOPES = {
  "POST": [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
  "GET": ['https://www.googleapis.com/auth/spreadsheets.readonly']
}
export async function googleAuth({ scopeType }: { scopeType: keyof Scopes }) {
  return await new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      type: "service_account",
      project_id: "portfolio-406502",
      client_id: process.env.GOOGLE_CLIENT_ID,
      universe_domain: "googleapis.com"
    },
    scopes: SCOPES[scopeType],
  });
}