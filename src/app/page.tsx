import Search from "@/components/search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-full px-2 sm:px-24">
      <div className="flex flex-col w-full">
        <div className="text-white text-xl sm:text-2xl font-bold leading-9 tracking-wide w-full max-md:max-w-full text-center md:text-left font-lato">
          Book Your Dream Venue Today: Find, Reserve, and Play with Ease!
        </div>
        <Search />
      </div>
    </main>
  );
}
