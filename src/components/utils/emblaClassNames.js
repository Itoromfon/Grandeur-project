// utils/emblaClassNames.js
const emblaClassNames = (emblaApi) => {
    if (!emblaApi) return {};
  
    return {
      prevBtnDisabled: !emblaApi.canScrollPrev(),
      nextBtnDisabled: !emblaApi.canScrollNext(),
    };
  };
  
  export default emblaClassNames;