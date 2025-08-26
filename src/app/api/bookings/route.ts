import { NextResponse } from "next/server";
import { google } from "googleapis";

// Load credentials from JSON (you should keep it in env for production)
import credentials from "@/credentials.json";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Replace with your Sheet ID (from URL of Google Sheet)
    const spreadsheetId = "1tQSZ60qAdcMthKpKC87UUMC9vWv402ViU9jwlNMnukU";

    // Prepare row data
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
    console.error(err);
    return NextResponse.json({ message: "Error saving booking" }, { status: 500 });
  }
}
