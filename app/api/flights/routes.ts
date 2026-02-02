import { getFlights } from "@/services/enpoints/getFlights";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dep = searchParams.get("dep") || "CDG";
  const arr = searchParams.get("arr") || "AUS";

  try {
    const data = await getFlights(dep, arr);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao obter voos" }, { status: 500 });
  }
}
