import Image from "next/image";
import * as React from "react";

const Search = () => {
  return (
    <div className="items-stretch flex flex-col md:flex-row w-full justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
      <div className="items-stretch flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:justify-center flex-1">
        <div className="items-stretch bg-zinc-700 flex justify-between gap-3 pl-6 pr-20 py-3.5 max-md:max-w-full flex-1 max-md:flex-wrap max-md:px-5 rounded-tl-2xl">
          <Image
            width={24}
            height={24}
            src="/assets/icons/search.svg"
            alt="Search"
          />
          <div className="text-neutral-500 text-base font-medium tracking-wide self-center grow whitespace-nowrap my-auto">
            Venue type
          </div>
        </div>
        <div className="justify-between items-center bg-zinc-700 flex gap-5 px-6 py-3.5 max-md:px-5">
          <div className="text-neutral-500 text-base font-medium tracking-wide my-auto">
            Date
          </div>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-down.svg"
            alt="Search"
          />
        </div>
        <div className="justify-between items-center bg-zinc-700 flex gap-5 px-6 py-3.5 rounded-br-2xl max-md:px-5">
          <div className="text-neutral-500 text-base font-medium tracking-wide my-auto">
            Location
          </div>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-down.svg"
            alt="Search"
          />
        </div>
      </div>
      <div className="text-zinc-900 text-base font-medium tracking-wide whitespace-nowrap justify-center items-center bg-lime-300 px-16 py-4 rounded-tl-2xl rounded-br-2xl max-md:px-5">
        Search
      </div>
    </div>
  );
};

export default Search;
