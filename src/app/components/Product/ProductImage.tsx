"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
const Product = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-black">
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img src={`/img${index + 1}.avif`} alt={`Ice Cream ${index + 1}`} className="w-full h-full object-cover" />
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

export default Product
