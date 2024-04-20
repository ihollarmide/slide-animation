'use client';

import { fadeVariants } from "@/animations/variants";
import { slides } from "@/data/slides";
import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react"
import { AnimationBody } from "@/components/AnimationBody";

const intervalTime = 5000;

export default function AnimationSlide() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoAnimationRunning, setIsAutoAnimationRunning] = useState<boolean>(true);


  const handleItemClick = (index: number) => {
    console.log('Running');
    setActiveIndex(index);
    setIsAutoAnimationRunning(false); // Stop automatic animation
  };

  useEffect(() => {
    let startTime = performance.now(); // Record the start time
    let animationFrameId: number;
  
    const animate = (time: number) => {
      const elapsedTime = time - startTime;
      if (elapsedTime >= intervalTime && isAutoAnimationRunning) {
        setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        startTime = time;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
  
    animationFrameId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoAnimationRunning]);


  return (
    <div className="max-w-7xl mx-auto w-full">
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr,6fr] lg:gap-10 items-center">
        <div className="flex flex-col gap-y-6">
          {slides.map((slide, index) => (
            <AnimationBody 
              key={index}
              slide={slide}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index)}
              animationDuration={intervalTime / 1000}
            />
          ))}
        </div>
        <div className="hidden md:block min-h-[500px] relative">
          <AnimatePresence mode="sync">
            {activeIndex === 0 ?
              <m.div className="absolute top-0 left-0 w-full" key={'first-image'} variants={fadeVariants} initial="initial" animate={'animate'} exit='exit'>
                <Image src={'/images/collaborate-together.png'} alt={'Collaborate together'} width={1368} height={1000} />
              </m.div>
            : activeIndex === 1 ?
            <m.div className="absolute top-0 left-0 w-full" key={'second-image'} variants={fadeVariants} initial="initial" animate={'animate'} exit='exit'>
              <Image src={'/images/plan-together.png'} alt={'Plan together'} width={1369} height={1001} />
            </m.div> :
            activeIndex === 2 ?
            <m.div className="absolute top-0 left-0 w-full" key={'third-image'} variants={fadeVariants} initial="initial" animate={'animate'} exit='exit'>
              <Image src={'/images/ideate-together.png'} alt={'Ideate together'} width={1369} height={1001} />
            </m.div> : null}
          </AnimatePresence>
        </div>
      </section>
    </div>
    
  )
}