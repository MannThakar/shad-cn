import { Search } from "lucide-react";
import imageOne from "@/assets/hero/01_hero_image.gif";
import imageTwo from "@/assets/hero/02_hero_image.gif";
import imageThree from "@/assets/hero/03_hero_image.gif";
import imageFour from "@/assets/hero/04_hero_image.gif";

const Hero = () => {
  return (
    <div className="w-full pt-20">
      <section className="flex flex-col-reverse md:flex-row md:mt-10 gap-10 container mx-auto rounded-lg h-full mt-10">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-5 justify-center mt-2">
          <h1 className="text-4xl md:text-5xl font-bold md:leading-16 text-[#484D49]">
            Empowering <span className="text-[#148E51]">Education </span> <br />
            for a Sustainable Future
          </h1>
          <p className="md:text-xl font-semibold text-[#484D49] md:mt-4 text-lg">
            Green Mentors empowers schools and universities to lead in
            climate-ready education. We guide institutions in building
            sustainable, Net Zero, and globally connected futures.
          </p>
          <button
            className="mt-6 md:px-6 md:py-3 bg-[#148E51] text-white rounded-lg flex items-center gap-2 md:text-lg w-fit px-2 py-3 cursor-pointer hover:bg-primary-600"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSftsHK0kQodp8Qa3TsIIAcnx-Z7cdfw3qNhFbmkcWdXoVzpMQ/viewform",
                "_blank"
              )
            }
          >
            Green Graduate Program
          </button>
        </div>

        {/* Right Section: Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src={imageOne}
            alt="Living room"
            className="object-cover w-full md:h-64 rounded-tl-[40px] h-40"
          />
          <img
            src={imageTwo}
            alt="Modern home"
            className="object-cover w-full  md:h-64 h-40"
          />
          <img
            src={imageThree}
            alt="Patio design"
            className="object-cover w-full  md:h-64 h-40"
          />
          <img
            src={imageFour}
            alt="Kitchen interior"
            className="object-cover w-full  md:h-64 rounded-br-[40px] h-40"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
