import { NextResponse } from "next/server";

export async function GET() {
  const hotels = [
    { id: 1, name: "Hilton Makkah", price: 250, rating: 5, desc: "Luxury stay near Haram." },
    { id: 2, name: "Swissôtel Makkah", price: 200, rating: 4, desc: "Great value & comfort." },
    { id: 3, name: "Makkah Clock Tower", price: 300, rating: 5, desc: "Iconic stay above Haram." },
  ];
  return NextResponse.json(hotels);
}
