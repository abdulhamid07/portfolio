import { googleAuth } from "@/libs/google-auth";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new NextResponse("Method not allowed", { status: 405 })
  }

  const body = await req.json()
  const { name, email, message } = body;

  try {
    const auth = await googleAuth({ scopeType: "POST" });
    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contact",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [name, email, message],
        ]
      },
    });

    return NextResponse.json("Success", { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal error", { status: 500 })
  }
}

