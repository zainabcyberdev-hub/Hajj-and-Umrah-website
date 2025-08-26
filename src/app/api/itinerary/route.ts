import { NextResponse } from "next/server";

export async function GET() {
  const itinerary = [
    { step: "Ihram", detail: "Enter the state of Ihram before crossing Miqat." },
    { step: "Tawaf", detail: "Perform 7 circuits around the Kaaba." },
    { step: "Sa’i", detail: "Walk between Safa and Marwa." },
    { step: "Mina & Arafat", detail: "Stay in Mina and pray at Arafat." },
    { step: "Return", detail: "Complete Hajj and return home." },
  ];
  return NextResponse.json(itinerary);
}
