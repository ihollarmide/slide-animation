import { Slide } from "@/models/general.types";

export interface AnimationBodyProps {
  slide: Slide;
  isActive: boolean;
  animationDuration: number;
  onClick: () => void;
}