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
    text: 'Curtain & Blind Control'
  },
  {
    images: 'soscarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'bulbsscarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'gassensorcarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'humansensorcarousel.svg',
    text: 'Curtain & Blind Control'
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
    text: 'Curtain & Blind Control'
  },
  {
    images: 'soscarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'bulbsscarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'gassensorcarousel.svg',
    text: 'Curtain & Blind Control'
  },
  {
    images: 'humansensorcarousel.svg',
    text: 'Curtain & Blind Control'
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
          <CarouselItem key={index} className="basis-[170px]">
            <div>
              <Card className='flex justify-center'>
                <CardContent className="flex flex-col h-[160px]  aspect-square items-center justify-center rounded-[15px]">
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
                      <p className="text-[13px] text-nowrap border-t pt-2">{item.text}</p>
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

