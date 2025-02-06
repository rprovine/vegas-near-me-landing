import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Show {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function ShowCard({ show }: { show: Show }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={show.image || "/placeholder.svg"}
        alt={show.name}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{show.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{show.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
          <a href={show.link} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
