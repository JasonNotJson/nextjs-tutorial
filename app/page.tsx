import { Hero } from "@/components";
import { HeroCarousel } from "@/components";
import Image from "next/image";

export const Home = () => {
  return (
    <main className="overflow-hidden flex flex-col justify-center items-center">
      <HeroCarousel />
      <Hero />
    </main>
  );
};

export default Home;
