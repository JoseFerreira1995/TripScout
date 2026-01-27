export type FlightCardTypes = {
  airline: string;
  logo: string;
  departure: { time: string; airport: string };
  arrival: { time: string; airport: string };
  duration: string;
  price: number;
  stops: number;
};

export type AttractionsTypeProps = {
  name: string;
  image: string;
  description: string;
  rating: number;
  duration: string;
  price: string;
  category: string;
};
