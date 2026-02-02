import { PlaneIcon } from "lucide-react";
import { FlightCardTypes } from "./types";
import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import { getFlights } from "@/services/enpoints/getFlights";
import { GET } from "@/app/api/flights/routes";
import { json } from "stream/consumers";
import { useQueryFlights } from "@/hooks/useQueryFlight";

// mock data
const flights = [
  {
    airline: "SkyAir",
    logo: "✈️",
    departure: { time: "10:30 AM", airport: "JFK" },
    arrival: { time: "2:45 PM", airport: "CDG" },
    duration: "7h 15m",
    price: 459,
    stops: 0,
  },
  {
    airline: "AeroJet",
    logo: "🛫",
    departure: { time: "2:00 PM", airport: "JFK" },
    arrival: { time: "8:30 PM", airport: "CDG" },
    duration: "8h 30m",
    price: 389,
    stops: 1,
  },
  {
    airline: "CloudWings",
    logo: "✈️",
    departure: { time: "6:45 PM", airport: "JFK" },
    arrival: { time: "11:15 AM", airport: "CDG" },
    duration: "6h 30m",
    price: 549,
    stops: 0,
  },
];

export default function FlightsCard({
  airline,
  logo,
  departure,
  arrival,
  duration,
  price,
  stops,
}: FlightCardTypes) {


  // useEffect(() => {
  //   const testFetch = async () => {
  //     fetch("/api/test")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log("AQUI", json);
  //       });
  //   };

  //   testFetch();
  // }, []);

  return (
    <div>
      <Card className="">
        <CardContent className="flex items-center justify-between gap-5">
          <div className="flex flex-col w-auto">
            <div>{logo}</div>
            <span className="text-xs text-gray-500">{airline}</span>
          </div>

          <div className="text-center">
            <div>{departure.time}</div>
            <div>{departure.airport}</div>
          </div>

          <div className="flex flex-col flex-1">
            <div>{duration}</div>
            <div className="w-full relative flex items-center">
              <PlaneIcon></PlaneIcon>
              <div>{stops < 1 ? "Non stop" : `${stops} stop`}</div>
            </div>
          </div>

          <div className="text-center">
            <div>{arrival.time}</div>
            <div>{arrival.airport}</div>
          </div>
          <h2 className="text-end">{price} €</h2>
        </CardContent>
      </Card>
    </div>
  );
}
