"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

// Mock data
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

export default function Home() {
  const [destination, setDestination] = useState<string>("");
  return (
    <div className="min-h-screen font-sans bg-amber-100">
      {/* Header Section */}
      <div className="relative bg-linear-to-r from-indigo-400 to-cyan-400">
        <header>
          <div className="relative p-5 text-center ">
            <h1 className="text-5xl text-amber-50">Find the Perfect Journey</h1>
            <p className="text-center text-amber-50">
              Find the best flights, accommodation, and attractions for your
              next adventure
            </p>
          </div>
        </header>
      </div>
      {/* Iinput section */}
      <div className="bg-white flex">
        <SearchIcon></SearchIcon>
        <Input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        ></Input>
      </div>
      <div>
        <Input></Input>
      </div>
      {/* Tabs Section */}
      <div className="flex justify-center m-5">
        <Tabs defaultValue="flights">
          <TabsList>
            <TabsTrigger value="flights">✈️ Flights</TabsTrigger>
            <TabsTrigger value="Hotels">🏢 Hotels</TabsTrigger>
            <TabsTrigger value="Attractions">🏰 Attrations</TabsTrigger>
          </TabsList>
          <TabsContent value="flights">
            <div className="flex justify-between">
              <p className="text-white font-bold ">Avaliable Flights</p>
              <p className="text-white text-sm">
                {flights.length} flights found
              </p>
            </div>
            <Card>
              <CardContent>
                <p>{flights[0].airline}</p>
                <p>{flights[0].price}</p>
                <p>{flights[0].stops}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
