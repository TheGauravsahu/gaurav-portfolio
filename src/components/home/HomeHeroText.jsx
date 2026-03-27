import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="uppercase text-white font-[font-lausanne-300] *:text-[10vw]  lg:*:text-[9vw] text-center leading-[8.5vw] mt-[105vw] md:mt-0">
      <h1>My name is</h1>
      <h1 className="flex items-center justify-center gap-4">
        Gaurav
        <div className="h-[6.8vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        Sahu /
      </h1>
      <h1>
        <span className="tex-xs"> </span>Ayush
      </h1>
    </div>
  );
};

export default HomeHeroText;
