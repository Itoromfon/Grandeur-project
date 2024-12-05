import React from 'react';
import Image from 'next/image';

function EmblaCarousel2() {
  return (
    <div className='flex justify-center items-center h-screen gap-10'>
      <div className="relative w-[579px] h-[701px]">
        {/* Image */}
        <Image
          src="/humanpopcorn.svg"
          width={579}
          height={701}
          alt="Enjoy Smart Home"
          className="rounded-[40px] object-cover"
        />

        {/* Text on top of the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 top-[-50%]">
          <h2 className="text-[25px] font-bold mb-2">Customize Your Home</h2>
          <p className="text-[16px] w-[443px] mt-3 leading-relaxed">
            Personalize automation options for each room, like setting up a
            customized Movie Night mode where lights dim and the entertainment
            system turns on.
          </p>
        </div>
      </div>

      <div className="relative w-[579px] h-[701px]">
      {/* Image */}
      <Image
        src="/drivercustomize.svg"
        width={579}
        height={701}
        alt="Enjoy Smart Home"
        className="rounded-[40px] object-cover"
      />

      {/* Text on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 top-[-50%]">
        <h2 className="text-[25px] font-bold mb-2">Enhance Customization</h2>
        <p className="text-[16px] w-[443px] mt-3 leading-relaxed">
        Geo-fencing options allow users to have settings activate automatically when they are nearby
        </p>
      </div>
      </div>
    </div>
  );
}

export default EmblaCarousel2;


















































































































// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import ClassNames from 'embla-carousel-class-names';
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons';
// import { DotButton, useDotButton } from './EmblacarouselDotButton';
// import styles from './EmblaCarousel2.module.css';
// import Autoplay from 'embla-carousel-autoplay';
// import Image from 'next/image'

// const EmblaCarousel2 = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={emblaRef}>
//         <div className={styles.embla__container}>
//           {slides.map((index) => (
//             <div
//               className={styles.embla__slide}
//               key={index}
//             >
//               <Image
//                 width={270}
//                 height={100}
//                 className={styles.emblaslideimg}
//                 // className={`${styles.embla__slide__img} ${index === selectedIndex ? styles['embla__slide--bright'] : ''}`} // Apply bright class if it's the selected index
//                 src={`https://picsum.photos/600/350?v=${index}`}
//                 alt={`Slide ${index}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.embla__controls}>
//         <div className={styles.embla__buttons}>
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className={styles.embla__dots}>
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={'embla__dot'.concat(
//                 index === selectedIndex ? ' embla__dot--selected' : ''
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel2;
