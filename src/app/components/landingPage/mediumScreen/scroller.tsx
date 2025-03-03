"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import React from "react";

const ScrollerMedium = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [intersectingId, setIntersectingId] = useState<number | null>(null);

  const imagesArr = useMemo(() => [
    { id: 1, src: "/assets/landingPage/scroll-1.jpg" },
    { id: 2, src: "/assets/landingPage/scroll-2.jpg" },
    { id: 3, src: "/assets/landingPage/scroll-3.jpg" },
    { id: 4, src: "/assets/landingPage/scroll-4.jpg" },
    { id: 5, src: "/assets/landingPage/scroll-5.jpg" },
    { id: 6, src: "/assets/landingPage/scroll-6.jpg" },
    { id: 7, src: "/assets/landingPage/scroll-7.jpg" },
  ], []);
  
  useEffect(() => {
    const checkIntersection = () => {
      if (!lineRef.current || !parentRef.current) return;

      const parentRect = parentRef.current.getBoundingClientRect();
      const centerX = parentRect.left + parentRect.width / 2;

      let closestDistance = Infinity;
      let closestIndex = -1;

      imageRefs.current.forEach((imageRef, index) => {
        if (!imageRef) return;

        const imageRect = imageRef.getBoundingClientRect();
        const imageCenter = imageRect.left + (imageRect.width / 2);
        const distance = Math.abs(centerX - imageCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== -1 && closestDistance < 100) {
        setIntersectingId(imagesArr[closestIndex].id);
      } else {
        setIntersectingId(null);
      }
    };

    const container = parentRef.current;
    if (container) {
      container.addEventListener("scroll", checkIntersection);
      checkIntersection();
      window.addEventListener("resize", checkIntersection);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkIntersection);
        window.removeEventListener("resize", checkIntersection);
      }
    };
  }, [imagesArr]);

  useEffect(() => {
    if (parentRef.current) {
      const container = parentRef.current;
      const middleScroll = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = middleScroll;
    }
  }, []);

  return (
    <div className="w-full relative flex justify-center bg-[#acacac]" >
      {/* Center line indicator */}
      <div 
        ref={lineRef}
        className="w-[2px] h-[320px] absolute left-1/2 transform -translate-x-1/2 z-20 pointer-events-none "
      />
      
      {/* Scroll container */}
      <div
        ref={parentRef}
        className="relative h-[320px] w-[1190px] flex items-center gap-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory  px-10 no-scrollbar"
      >   
        {imagesArr.map(({ id, src }, index) => (
          <div
            key={id}
            ref={(el) => { imageRefs.current[index] = el; }}
            className={`
              w-[200px] h-[240px] flex-shrink-0 relative
              transition-all duration-300 ease-out snap-center hover:scale-[1.15] hover:shadow-lg
              ${intersectingId === id ? 'scale-[1.15] shadow-lg z-10' : 'scale-100' }
             `}
          >
            <Image 
              src={src || "/placeholder.svg"} 
              alt={`Image ${id}`} 
              fill 
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollerMedium;
