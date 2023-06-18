import Image from "next/image";
const HeroCarousel = () => {
  return (
    <div>
      <div className="p-2 ml-2">
        <Image src="/hero_gif.gif" alt="hero gif" width={800} height={300} />
      </div>
    </div>
  );
};

export default HeroCarousel;
