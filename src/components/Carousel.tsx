import React from 'react'
import {useHorizontalScroll} from './YScroll'

export default function Carousel() {
    const scrollRef = useHorizontalScroll();
  return (
    <div className=" border-2 overflow-hidden">
      <div ref={scrollRef} className="h-12 w-1/3 overflow-x-scroll whitespace-nowrap y-scrollable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        excepturi placeat quidem unde perferendis deleniti iste optio dicta
        mollitia earum ullam inventore, repellat voluptatum, fugit sint modi
        architecto? Mollitia, necessitatibus.
      </div>
    </div>
  );
}
