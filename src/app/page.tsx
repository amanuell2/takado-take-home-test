import {SearchWrapper} from "@/components/home";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex items-center justify-center h-screen w-full px-2 sm:px-24">
      <div className="flex flex-col w-[64rem]">
        <div className="text-white text-xl sm:text-2xl font-bold leading-9 tracking-wide w-full max-md:max-w-full text-center md:text-left font-lato">
          Book Your Dream Venue Today: Find, Reserve, and Play with Ease!
        </div>
        <SearchWrapper />
      </div>
    </main>
  );
};

export default Home;
