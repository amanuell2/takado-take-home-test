"use client";
import { debounce, throttle } from "lodash";
import Image from "next/image";
import * as React from "react";
import { useCallback } from "react";

interface SearchProps {
  additionalClasses?: string;
  onSearchClicked?: (searchTerms: string) => void;
  onSearchChanged?: (searchTerms: string) => void;
}

export const Search = (props: SearchProps) => {
  const searchTermsRef = React.useRef<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { onSearchClicked, onSearchChanged, additionalClasses } = props;

  const debouncedSearch = useCallback(
    debounce((nextValue: string) => {
      try {
        if (onSearchChanged) {
          onSearchChanged(nextValue);
        }
      } catch (error) {
        console.log("Error on typing search", error);
      }
    }, 300),
    [onSearchChanged]
  );

  const throttledOnSearchClicked = useCallback(
    throttle(
      () => {
        try {
          if (onSearchClicked) {
            onSearchClicked(searchTermsRef.current);
          }
        } catch (error) {
          console.log("Error on submitting search ", error);
        }
      },
      1000,
      { trailing: false }
    ),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchTermsRef.current = event.target.value;
    debouncedSearch(searchTermsRef.current);
  };

  return (
    <div
      className={`items-stretch flex flex-col md:flex-row w-full justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap ${additionalClasses}`}
    >
      <div className="items-stretch flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:justify-center flex-1">
        <div className="items-stretch bg-zinc-700 flex justify-between gap-3 pl-6 pr-20 py-3.5 max-md:max-w-full flex-1 max-md:flex-wrap max-md:px-5 rounded-tl-2xl">
          <Image
            width={24}
            height={24}
            src="/assets/icons/search.svg"
            alt="search"
          />
          <label htmlFor="venueType" />
          <input
            id="venueType"
            type="text"
            ref={inputRef}
            onChange={handleInputChange}
            placeholder="Venue type"
            className="placeholder:text-primary-100 text-white text-base font-regular tracking-wide self-center grow whitespace-nowrap my-auto font-lato bg-transparent border-none focus:outline-none"
          />
        </div>
        <div className="justify-between items-center bg-zinc-700 flex gap-5 px-6 py-3.5 max-md:px-5">
          <div className="text-primary-100  text-base font-regular tracking-wide my-auto font-lato">
            Date
          </div>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </div>
        <div className="justify-between items-center bg-zinc-700 flex gap-5 px-6 py-3.5 rounded-br-2xl max-md:px-5">
          <div className="text-primary-100 text-base font-regular tracking-wide my-auto font-lato">
            Location
          </div>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </div>
      </div>
      <button
        type="button"
        className="text-zinc-900 text-base font-regular tracking-wide whitespace-nowrap justify-center items-center bg-lime-300 px-16 py-4 rounded-tl-2xl rounded-br-2xl max-md:px-5"
        onClick={() => throttledOnSearchClicked()}
      >
        Search
      </button>
    </div>
  );
};


