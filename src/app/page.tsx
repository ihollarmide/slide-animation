import { AnimationSlide } from "@/components/AnimationSlide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24">
      <AnimationSlide />
    </main>
  );
}
