import React from 'react'
import Navbar from '@/components/navbar/Navbar'
// import EmblaCarousel2 from '@/components/emblacarousel2/EmblaCarousel2'
import Footer from '@/components/footer/Footer'
// import Chat from '@/components/ui/chat'
import Chat from '@/components/chat/Chat';

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function documentation() {
  return (
    <>
        <Navbar />
        <Chat />
        {/* <div>
          <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
        </div> */}
        
        <Footer />
    </>
  )
}

export default documentation