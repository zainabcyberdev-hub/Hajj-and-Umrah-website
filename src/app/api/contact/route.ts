// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // yahan tum backend ka kaam kar sakti ho
  // jaise database me save karna, email bhejna etc.
  console.log("Form Data:", body);

  return NextResponse.json({ message: "Data received successfully!" });
}
