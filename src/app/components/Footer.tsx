import React from 'react'
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-1/2 bg-black text-white p-10'>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">MERIDIAN</h4>
        <p className="text-sm text-muted-foreground">
          Ice creams to touch the soul. We are a small team of ice cream enthusiasts who are passionate about creating the best ice creams in the world. Our mission is to bring joy and happiness to everyone through our delicious ice creams.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Instagram</div>
        <Separator orientation="vertical" />
        <div>Explore More</div>
      </div>
    </div>
  )
}

export default Footer
