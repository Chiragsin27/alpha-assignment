"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import { carList } from "./data/carData";
import { Lightbulb } from "lucide-react";

export default function Home() {
  const path = '/assets/';
  return (
    <div className="p-4 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] border-indigo-200 flex flex-col items-center">
      <Carousel opts={{ align: "start" }} className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {carList.map((car) => (
            <CarouselItem key={car.id} className="w-full">
              <div>
                <Link href={`/cars/${car.id}`}>
                  <Card className="border-none">
                    <CardContent>
                      <img src={path+car.image} alt={car.name}  />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
          Next
        </CarouselNext>
      </Carousel>
      <p className="flex flex-row"><Lightbulb/>Click on the Image to Choose</p>
    </div>
  );
}
