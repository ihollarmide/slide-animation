import clsx from "clsx";
import { AnimationBodyProps } from "./AnimationBody.types";
import { m } from "framer-motion";
import Image from "next/image";

export default function AnimationBody({
  slide,
  isActive,
  onClick,
  animationDuration = 5
}: AnimationBodyProps) {
  const { title, body, image } = slide;
  return (
    <div onClick={onClick} className="flex items-center max-w-[500px] w-full mr-auto relative cursor-pointer">
      <div className="absolute top-0 left-0 h-full w-[3.5px] bg-gray-400">
        {isActive && (
          <m.div
            className="absolute top-0 left-0 w-full h-0 bg-blue-500"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: animationDuration }}
          />
        )}        
      </div>
      <div className="pl-5">
        <p className={clsx(
          'text-xl leading-6 text-gray-500 font-semibold duration-300 ease-linear transition-colors',
          {
            'text-gray-900': isActive,
            'text-gray-500': !isActive,

          }
        )}>{title}</p>
        <div className={clsx('grid transition-[grid-template-rows] duration-300 ease-linear', {
          'grid-rows-[1fr]': isActive,
          'grid-rows-[0fr]': !isActive
        })}>
          <div className="overflow-hidden">
            <div className="pt-5">
              <p className="text-base leading-5 text-gray-500 font-normal">{body}</p>
              <div className="pt-5 md:hidden">
                <Image src={image} alt={title} width={1369} height={1001} className="w-full h-auto" />
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}