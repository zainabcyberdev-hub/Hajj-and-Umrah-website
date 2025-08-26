import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Luxury Package", price: "$5000", duration: "15 Days" },
    { id: 2, title: "Economy Package", price: "$2500", duration: "10 Days" },
    { id: 3, title: "Family Package", price: "$8000", duration: "20 Days" },
    { id: 4, title: "Group Package", price: "$2000", duration: "12 Days" },
  ]);
}
