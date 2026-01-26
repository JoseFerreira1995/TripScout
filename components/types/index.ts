export type FlightCardTypes = {
  airline: string;
  logo: string;
  departure: { time: string; airport: string };
  arrival: { time: string; airport: string };
  duration: string;
  price: number;
  stops: number;
};
