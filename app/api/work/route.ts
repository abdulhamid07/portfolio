import { googleAuth } from "@/libs/google-auth";
import { google } from "googleapis";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).send({ message: "Only GET allowed" });
  }

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

    return NextResponse.json({
      data: values,
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