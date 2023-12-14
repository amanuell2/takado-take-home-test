'use client';
import React from 'react'
import { Search } from '@/components/shared/search';


 export const SearchWrapper = async () => {


  const onSearchChanged = (searchTerms: string) => {
    console.log("searchTerms", searchTerms);
  }

  const onSearchClicked = (searchTerms: string) => {
    // call api
    console.log("searchTerms", searchTerms);
  }
  
  return (
    <div>
       <Search 
          onSearchChanged={onSearchChanged}
          onSearchClicked={onSearchClicked}
          additionalClasses="mt-6"
        />
    </div>
  )
}

