import { googleAuth } from "@/libs/google-auth";
import { google } from "googleapis";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST allowed" });
  }

  const body = await req.json()
  const { name, email, subject, message } = body;

  try {
    const auth = await googleAuth({ scopeType: "POST" });
    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contact",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [name, email, subject, message],
        ]
      },
    });

    return NextResponse.json({
      data: response.data,
    },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

