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
    images: '/lorawancarousel.svg',
    text: 'LoRaWAN Ethernet'
  },
  {
    images: 'blindcarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'mpcarousel.svg',
    text: 'Door & Window Sensor'
  },
  {
    images: 'soscarousel.svg',
    text: 'SOS'
  },
  {
    images: 'bulbsscarousel.svg',
    text: 'Smart Bulb'
  },
  {
    images: 'gassensorcarousel.svg',
    text: 'Human Presence Sensor'
  },
  {
    images: 'humansensorcarousel.svg',
    text: 'Gas Sensor'
  },
  {
    images: '/lorawancarousel.svg',
    text: 'LoRaWAN Ethernet'
  },
  {
    images: 'blindcarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'mpcarousel.svg',
    text: 'Door & Window Sensor'
  },
  {
    images: 'soscarousel.svg',
    text: 'SOS'
  },
  {
    images: 'bulbsscarousel.svg',
    text: 'Smart Bulb'
  },
  {
    images: 'gassensorcarousel.svg',
    text: 'Human Presence Sensor'
  },
  {
    images: 'humansensorcarousel.svg',
    text: 'Gas Sensor'
  },
]

function MyCarousel1() {
  return (
    <div>
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
          <CarouselItem key={index} className="basis-[175px]">
            <div>
              <Card className='flex justify-center rounded-[13px]'>
                <CardContent className="flex flex-col h-[160px]  aspect-square items-center justify-center">
                  {/* <span className="text-3xl text-blue-800 font-semibold">{index + 1}</span> */}
                    <div className="h-[100%]">
                      <Image 
                        src={item.images}
                        alt='Images'
                        width={100}
                        height={100}
                        className="h-[95%] w-full object-contain"
                      />
                      <div>
                      <p className="text-[13px] text-nowrap text-center border-t pt-2">{item.text}</p>
                    </div>
                    </div>           
                </CardContent>
              </Card>
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

export default MyCarousel1

