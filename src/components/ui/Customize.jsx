import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

const images = [
  {
    images: '/humanpopcorn.svg',
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'
  },
  {
    images: '/drivercustomize.svg',
    htext: 'Enhance Customization',
    ptext: 'Geo-fencing options allow users to have settings activate automatically when they are nearby.'
  },
  {
    images: '/humanpopcorn.svg',
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'
  },
  {
    images: '/drivercustomize.svg',
    htext: 'Enhance Customization',
    ptext: 'Geo-fencing options allow users to have settings activate automatically when they are nearby.'
  },
  {
    images: '/humanpopcorn.svg',
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'
  },
  {
    images: '/drivercustomize.svg',
    htext: 'Enhance Customization',
    ptext: 'Geo-fencing options allow users to have settings activate automatically when they are nearby.'
  },
  {
    images: '/humanpopcorn.svg',
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'
  },
  {
    images: '/drivercustomize.svg',
    htext: 'Enhance Customization',
    ptext: 'Geo-fencing options allow users to have settings activate automatically when they are nearby.'
  },
]

function Customize() {
  return (
    <div className="px-5">
        <Carousel
        plugins={[
            Autoplay({
            delay: 1200,
            })
        ]}
        opts={{
            align: "start",
            loop: true,
        }}
        >   
        <CarouselContent>
            {images.map((item, index) => (
            <CarouselItem key={index} className="basis-[500px]">
            <div className="relative">
                <Image 
                    src={item.images}
                    width={100}
                    height={100}
                    alt="Customize Images"
                    className="rounded-[40px] w-[579px] h-[600px] object-cover"
                />
                {/* Text on top of the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 top-[-50%]">
                    <h2 className="text-[25px] font-bold mb-2">{item.htext}</h2>
                    <p className="text-[16px] w-[400px] mt-3 leading-relaxed">{item.ptext}</p>
                </div>
            </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
    </div>
  )
}

export default Customize

