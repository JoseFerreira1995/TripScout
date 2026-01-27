import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Badge } from "./ui/badge";
import { AttractionsTypeProps } from "./types";

export default function AttractionCard({
  name,
  image,
  description,
  rating,
  duration,
  price,
  category,
}: AttractionsTypeProps) {
  return (
    <Card>
      <div className="absolute inset-0 z-30 aspect-video" />
      <img src={image} />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{category}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>{rating}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardDescription>{duration}</CardDescription>
        <CardDescription>{price}</CardDescription>
      </CardFooter>
    </Card>
  );
}
