"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-black">
        <div className="absolute top-4 left-4 z-50">
            <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="flex flex-col gap-10 animate-[scroll_10s_linear_infinite] text-white text-5xl font-bold opacity-20 tracking-widest">
                {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="text-center">Ice Creams That Taste Like Heaven</p>
                ))}
            </div>
        </div>

      <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full h-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={`image${index+1}.avif`} alt={`Image ${index + 1}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default Hero