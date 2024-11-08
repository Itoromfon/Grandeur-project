import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import EmblaCarousel2 from '@/components/emblacarousel2/EmblaCarousel2'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function documentation() {
  return (
    <>
        <Navbar />
        <div>
          <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
        </div>
    </>
  )
}

export default documentation