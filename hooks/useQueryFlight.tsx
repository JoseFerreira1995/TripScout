import { getFlights } from "@/services/enpoints/getFlights";
import { useQuery } from "@tanstack/react-query";

export const useQueryFlights = (destination: string, arrival: string) => {
  return useQuery({
    queryKey: ["flights"],
    queryFn: () => getFlights(destination, arrival),
  });
};
