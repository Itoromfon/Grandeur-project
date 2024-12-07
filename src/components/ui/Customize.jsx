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
    <div 
      className="
        px-5
        mobile-320-400:px-1
      "
    >
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
            <CarouselItem key={index} 
              className="
                basis-[500px]
                mobile-320-400:basis-[280px]
                mobile-401-480:basis-[320px]
                mobile-481-600:basis-[400px]
                mobile-601-768:basis-[450px]
                mobile-769-900:basis-[470px]
                mobile-901-1200:basis-[480px]
              "
            >
            <div className="relative">
                <Image 
                    src={item.images}
                    width={100}
                    height={100}
                    alt="Customize Images"
                    className="
                      rounded-[40px] 
                      w-[579px] 
                      h-[600px] 
                      object-cover
                      mobile-320-400:w-[400px]
                      mobile-320-400:h-[400px]
                      mobile-401-480:w-[500px]
                      mobile-401-480:h-[400px]
                      mobile-320-400:object-cover
                      "
                />
                {/* Text on top of the image */}
                <div 
                  className="
                    absolute 
                    inset-0 
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                     text-white 
                     text-center 
                     px-4 
                     top-[-50%]">
                    <h2 
                    className="
                      text-[25px] 
                      font-custom 
                      font-bold 
                      mb-2 
                      tracking-widest
                      mt-[100px]
                      ">{item.htext}</h2>
                    <p 
                      className="
                      text-[16px] 
                      w-[400px] 
                      mt-3 
                      leading-relaxed 
                      tracking-wide
                      mobile-320-400:w-[250px]
                      mobile-401-480:w-[250px]
                      "
                      >
                        {item.ptext}
                      </p>
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

