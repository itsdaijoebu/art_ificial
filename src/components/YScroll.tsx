import React from 'react'
import { useRef, useEffect, MutableRefObject } from "react";

export function useHorizontalScroll () {
    const elRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e:WheelEvent) => {
          if (e.deltaY === 0) return;
          if (
            !(el.scrollLeft === 0 && e.deltaY < 0) &&
            !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && 
                e.deltaY > 0)
          ) {
            e.preventDefault();
          }
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: 'smooth'
          });
        };
        el.addEventListener('wheel', onWheel);
        return () => el.removeEventListener('wheel', onWheel);
      }
    }, []);
    return elRef;
  }