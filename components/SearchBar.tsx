'use client'

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  return (
    <form className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
      <div className='searchbar__item'>
        {/* <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        /> */}
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
      {/* <SearchButton otherClasses='max-sm:hidden' /> */}
    </form>
  )
}

export default SearchBar