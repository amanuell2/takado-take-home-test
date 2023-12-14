"use client";
import React, { useState } from "react";
import { Search } from "@/components/shared/search";

import { Suspense } from "react";
import AutosuggestPanel from "../shared/panel/AutosuggestPanel";

export const SearchWrapper = () => {
  const [searchTerms, setSearchTerms] = useState<string | null>(null);

  const onSearchChanged = (searchTerms: string) => {
    setSearchTerms(searchTerms);
  };

  const onSearchClicked = (searchTerms: string) => {
    setSearchTerms(searchTerms);
  };

  return (
    <div className="relative">
      <Search
        onSearchChanged={onSearchChanged}
        onSearchClicked={onSearchClicked}
        additionalClasses="mt-6"
      />
      <Suspense fallback={searchTerms && <LoadingSuggestions />}>
        <AutosuggestPanel query={searchTerms} />
      </Suspense>
    </div>
  );
};

const LoadingSuggestions = () => {
  return (
    <div className="absolute top-full mt-2 w-[51rem] bg-white rounded-tl-2xl shadow-lg z-20">
      <div className="py-2">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="h-5 bg-gray-200 rounded-full w-[50%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
