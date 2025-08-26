import { NextResponse } from "next/server";
import { google, sheets_v4 } from "googleapis";

interface BookingBody {
  name: string;
  email: string;
  phone: string;
  passport: string;
  travelers: number;
  travelDate: string;
  departureCity: string;
  specialRequest?: string;
  packageId?: string;
}

export async function POST(req: Request) {
  try {
    const body: BookingBody = await req.json();

    // Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets: sheets_v4.Sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      return NextResponse.json(
        { message: "Google Sheet ID is not set in environment variables" },
        { status: 500 }
      );
    }

    // Prepare values with proper typing
    const values: (string | number)[][] = [[
      body.name,
      body.email,
      body.phone,
      body.passport,
      body.travelers,
      body.travelDate,
      body.departureCity,
      body.specialRequest ?? "",
      body.packageId ?? "",
      new Date().toLocaleString(),
    ]];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ message: "Booking saved to Google Sheets!" });
  } catch (err: unknown) {
    // Type-safe error handling
    if (err instanceof Error) {
      console.error("Google Sheets Error:", err.message);
    } else {
      console.error("Google Sheets Unknown Error:", err);
    }

    return NextResponse.json({ message: "Error saving booking" }, { status: 500 });
  }
}
