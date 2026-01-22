import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
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
      {/* Tabs Section */}
      <div className="flex justify-center m-5">
      <Tabs defaultValue="flights">
        <TabsList>
          <TabsTrigger value="flights">✈️ Flights</TabsTrigger>
          <TabsTrigger value="Hotels">🏢 Hotels</TabsTrigger>
          <TabsTrigger value="Attractions">🏰 Attrations</TabsTrigger>
        </TabsList>

      </Tabs>
      </div>
    </div>
  );
}
