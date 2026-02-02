import { NextResponse } from "next/server";
import { getFlights } from "@/services/enpoints/getFlights";

export async function GET() {
  const data = await getFlights("CDG", "AUS");
  return NextResponse.json(data);
}
