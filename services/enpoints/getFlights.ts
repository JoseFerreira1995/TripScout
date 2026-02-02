export const getFlights = async (departure: string, arrival: string) => {
  const API_KEY = process.env.API_KEY;
  const FLIGHTS_URL = process.env.FLIGHTS_URL;

  try {
    const response = await fetch(
      `${FLIGHTS_URL}&departure_id=${departure}&arrival_id=${arrival}&gl=us&hl=en&currency=USD&type=2&outbound_date=2026-03-03&api_key=${API_KEY}`
    );

    if (!response.ok) {
      console.log("UPS There's an Error somewere");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error on getFlights", error);
    throw error;
  }
};
