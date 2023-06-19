const HeroCarousel = () => {
  return (
    <div>
      <div className="p-1 mt-2 ml-2">
        <video width="800" height="400" autoPlay loop muted>
          <source src="/hero_clip.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroCarousel;
