import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type AccommodationsTypeProps = {
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  type: string;
};

export default function AccommodationsCard({
  name,
  image,
  location,
  rating,
  reviews,
  price,
  type,
}: AccommodationsTypeProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <img src={image} />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">{type}</Badge>
          </CardAction>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{location}</CardDescription>
          <CardDescription>⭐️{rating}</CardDescription>
          <CardDescription>({reviews} reviews)</CardDescription>
        </CardHeader>
        <CardFooter>
          <CardDescription>{price}/night</CardDescription>
          <Button>Book</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
