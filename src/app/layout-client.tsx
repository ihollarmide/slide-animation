'use client';

import { LazyMotion } from 'framer-motion';

export default function LayoutClient({
  children
}: {
  children: React.ReactNode;
}) {

  const framerAnimationFeatures = () =>
    import('@/animations/framerAnimationFeatures').then((res) => res.default);
  
  return (
    <LazyMotion features={framerAnimationFeatures} strict>
      {children}
    </LazyMotion>
  )
}