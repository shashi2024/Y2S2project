import React from 'react';

const SearchBar = ({ alignment }) => {
  let alignmentClass;
  switch (alignment) {
    case 'left':
      alignmentClass = 'justify-start';
      break;
    case 'center':
      alignmentClass = 'justify-center';
      break;
    case 'right':
      alignmentClass = 'justify-end';
      break;
    default:
      alignmentClass = 'justify-start';
  }

  return (
    <div className={`flex ${alignmentClass} pt-8 pb-8`}>
      <div className="relative w-1/2 shadow-md">
        <input
          className="w-full dark:text-slate-300 bg-color2 dark:bg-slate-800 border-0 focus:ring-transparent placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-3 pl-10 pr-8"
          type="search"
          placeholder="Type to search…"
        />
        <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
          <svg
            className="w-5 h-5 shrink-0 fill-current text-button_color dark:text-slate-500 group-hover:text-button_hover dark:group-hover:text-slate-400 ml-4 mr-2"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;