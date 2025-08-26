import { NextResponse } from "next/server";

export async function GET() {
  const faq = [
    { q: "How do I apply for an Umrah visa?", a: "Apply online via website form or authorized agencies." },
    { q: "What is included in Hajj packages?", a: "Flights, hotels, transport, and guidance." },
    { q: "Can I customize my itinerary?", a: "Yes, flexible packages are available." },
  ];
  return NextResponse.json(faq);
}
