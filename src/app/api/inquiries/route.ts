// app/api/inquiries/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Inquiry from "@/models/inquiry";

export const runtime = "nodejs"; // mongoose needs Node runtime

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = [
      "name",
      "email",
      "countryCode",
      "cityCountry",
      "type",
      "travelMonth",
      "days",
      "persons",
    ];
    for (const f of required) {
      if (body[f] === undefined || body[f] === null || body[f] === "") {
        return NextResponse.json({ error: `${f} is required` }, { status: 400 });
      }
    }

    await connectDB();
    const doc = await Inquiry.create({
      name: body.name,
      email: body.email,
      countryCode: body.countryCode,
      cityCountry: body.cityCountry,
      type: body.type, // Hajj | Umrah
      travelMonth: body.travelMonth,
      days: Number(body.days),
      persons: Number(body.persons),
    });

    return NextResponse.json({ ok: true, id: String(doc._id) }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/inquiries error:", err);
    return NextResponse.json({ ok: false, error: err.message || "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // Quick check/admin listing (secure in production!)
  try {
    await connectDB();
    const items = await Inquiry.find().sort({ createdAt: -1 }).limit(20).lean();
    return NextResponse.json({ ok: true, items });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
