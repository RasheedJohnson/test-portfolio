"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import SocialIcons from "@/components/SocialIcons";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:mb-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Hi there, I'm Rasheed</span>
            <h1 className="h2 mb-6">
              <span className="text-green-400">
                A Software Engineer driven by Systems Thinking and UX.
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">
              My background is unconventional, starting with hardware (C
              programming for microcontrollers) before transitioning to a
              seven-year long focus on software engineering. I specialise in the
              Next.js ecosystem, motivated to create robust and effective
              digital experiences. My current ambition includes solving systemic
              inefficiencies in healthcare within developing countries like
              South Africa.
            </p>

            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>
                  <Link href="./CV.pdf" target="_blank">
                    Download CV
                  </Link>
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <SocialIcons
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-300 rounded-full flex justify-center items-center text-green-300 text-base hover:bg-green-300 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
