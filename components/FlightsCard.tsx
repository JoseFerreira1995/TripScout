import { PlaneIcon } from "lucide-react";
import { FlightCardTypes } from "./types";
import { Card, CardContent } from "./ui/card";

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
  return (
    <div>
      <Card className="">
        <CardContent>
          <div className="flex flex-col w-auto">
            <div>{logo}</div>
            <span>{airline}</span>
          </div>

          <div className="text-center">
            <div>{departure.time}</div>
            <div>{departure.airport}</div>
          </div>

          <PlaneIcon></PlaneIcon>
          <div>{stops < 1 ? "Non stop" : stops}</div>
          <span>{duration}</span>
          <div>
            Arrival: {arrival.time} {arrival.airport}
          </div>
          <h2 className="text-end">{price} €</h2>
        </CardContent>
      </Card>
    </div>
  );
}
