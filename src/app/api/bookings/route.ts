import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId =
      process.env.GOOGLE_SHEET_ID ||
      "1tQSZ60qAdcMthKpKC87UUMC9vWv402ViU9jwlNMnukU";

    const values = [[
      body.name,
      body.email,
      body.phone,
      body.passport,
      body.travelers,
      body.travelDate,
      body.departureCity,
      body.specialRequest,
      body.packageId,
      new Date().toLocaleString(),
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ message: "Booking saved to Google Sheets!" });
  } catch (err: any) {
    console.error("Google Sheets Error:", err.response?.data || err.message || err);
    return NextResponse.json(
      { message: "Error saving booking" },
      { status: 500 }
    );
  }
}
