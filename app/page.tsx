"use client";

import AttractionCard from "@/components/AttractionCard";
import FlightsCard from "@/components/FlightsCard";
import SearchBar from "@/components/SearchBar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const attractions = [
  {
    name: "Eiffel Tower",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2ODc4Mzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Iconic iron tower with observation decks and panoramic city views",
    rating: 4.7,
    duration: "2-3 hours",
    price: "28",
    category: "Landmark",
  },
  {
    name: "Louvre Museum",
    image:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHNreWxpbmV8ZW58MXx8fHwxNzY4ODQ0Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "World's largest art museum featuring the Mona Lisa and ancient artifacts",
    rating: 4.8,
    duration: "3-4 hours",
    price: "22",
    category: "Museum",
  },
  {
    name: "Seine River Cruise",
    image:
      "https://images.unsplash.com/photo-1717501787981-d5f28eb2df5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY4NzYwNzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Romantic boat tour along the Seine with stunning views of Paris",
    rating: 4.6,
    duration: "1-2 hours",
    price: "18",
    category: "Tour",
  },
  {
    name: "Montmartre Walking Tour",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtfGVufDF8fHx8MTc2ODgyOTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Explore the charming streets and artists' quarter of historic Montmartre",
    rating: 4.9,
    duration: "2 hours",
    price: "35",
    category: "Tour",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
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
      <SearchBar></SearchBar>
      {/* Tabs Section */}
      <div className="flex justify-center m-5 ">
        <Tabs defaultValue="flights">
          <div className="flex justify-center m-5 p-3">
            <TabsList>
              <TabsTrigger value="flights">✈️ Flights</TabsTrigger>
              <TabsTrigger value="Hotels">🏢 Hotels</TabsTrigger>
              <TabsTrigger value="Attractions">🏰 Attrations</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="flights">
            <div className="flex justify-between">
              <p className="text-white font-bold ">Avaliable Flights</p>
              <p className="text-white text-sm">
                {flights.length} flights found
              </p>
            </div>
            {flights.map((items) => (
              <FlightsCard
                key={items}
                airline={items.airline}
                stops={items.stops}
                duration={items.duration}
                logo={items.logo}
                arrival={items.arrival}
                departure={items.departure}
                price={items.price}
              ></FlightsCard>
            ))}
          </TabsContent>
          <TabsContent value="Hotels">
            <h1>No hotels found</h1>
          </TabsContent>
          <TabsContent
            value="Attractions"
            className="sm:grid grid-cols-3 gap-4"
          >
            {attractions.map((item) => (
              <AttractionCard
                key={item}
                name={item.name}
                image={item.image}
                description={item.description}
                rating={item.rating}
                price={item.price}
                category={item.category}
                duration={item.duration}
              ></AttractionCard>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
