import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const images = [
  {
    htext: 'Energy Management Kit',
    ptext: 'Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day',
    link: 'View Energy Efficiency',
    images: '/variouskits.svg'
  },
  {
    htext: 'Energy Management Kit',
    ptext: 'Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day',
    link: 'View Energy Efficiency',
    images: '/variouskits.svg'
  },
]

function Emblacarol() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="flex items-center justify-center h-screen"> {/* Centering wrapper */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
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

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Emblacarol
