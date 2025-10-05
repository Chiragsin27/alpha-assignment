"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { carList } from "@/app/data/carData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import React, { use, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarDetailProps {
  params: Promise<{ id: string }>;
}

export default function CarDetailPage({ params }: CarDetailProps) {
  const { id } = use(params);

  const path = "/assets/";
  const car = carList.find((c) => c.id === id);
  const [isThree, setIsThree] = useState(false);

  if (!car) return notFound();

  return (
    <div className= "flex flex-col justify-center items-center gap-10 md:flex-row md:gap-30 lg:flex-row  lg:gap-30">
    <div className="flex flex-col justify-center items-center border-none">
      <Card className="border-none p-4" suppressHydrationWarning>
        <CardContent>
          {isThree ? (
            <div className="rounded-b-sm w-50 h-80 md:w-150 md:h-120 lg:w-150 lg:h-120">
              <iframe
                src={car.threedSource}
                className="w-50 h-80 md:w-150 md:h-100 lg:w-150 lg:h-100"
              />
            </div>
          ) : (
            <Carousel opts={{ align: "start" }} className="w-50 h-80 md:w-150 md:h-120 lg:w-150 lg:h-120">
              <CarouselContent>
                {car.images.map((img, index) => (
                  <CarouselItem key={index} className="w-full h-full">
                    <img
                      src={path + img}
                      alt={car.name}
                      className="w-50 h-70 md:w-150 md:h-100 lg:w-150 lg:h-100 object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
                Prev
              </CarouselPrevious>
              <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
                Next
              </CarouselNext>
            </Carousel>
          )}
        </CardContent>
      </Card>

      <div className="h-5" />

      <Button
        className="bg-indigo-500 text-white"
        onClick={() => setIsThree(!isThree)}
      >
        {isThree ? "Exit 3D View" : "See 3D View"}
      </Button>
    </div>
    <div className="flex flex-col justify-center items-center">
          <p className=" text-indigo-500 text-lg md:text-xl lg:text-2xl">{car.name}</p>
          <h3 className=" text-sm md:text-lg lg:text-xl">{car.year}</h3>
          <h2 className="mx-3 text-[12px] md:text-lg lg:text-xl">{car.description}</h2>
          <h3 className="text-sm md:text-lg lg:text-xl">{car.mileage}</h3>
          <h3 className="text-sm md:text-lg lg:text-xl">{car.price}</h3>
    </div>
    </div>
  );
}
