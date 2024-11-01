'use client'
import Typewriter from 'typewriter-effect';
import { handleWebpackExternalForEdgeRuntime } from "next/dist/build/webpack/plugins/middleware-plugin";
import Image from "next/image";
import Link from "next/link";
import { use } from 'react';


export default function Home() {
  return (

  // Header section

    <main className="bg-orange-300">
      <title> My portflio </title>
      <header className="text-slate-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Kahkashan</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-slate-900 font-serif">Home</a>
      <a className="mr-5 text-slate-900 font-serif">About</a>
      <a className="mr-5 text-slate-900 font-serif">Contact</a>
      <a className="mr-5 text-slate-900 font-serif">Services</a>
    </nav>
    <button className="inline-flex items-center bg-orange-800 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">Click me
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> 
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

{/* Hero section */}

<section className="text-slate-900 body-font bg-yellow-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900"> I am Webdeveloper std,</h1>
      <h1 className='font-extrabold text-orange-700 cZASz'><Typewriter
  options ={{ 
    strings: ['Governor Sindh IT Course', 'Quarter 2', 'Thursday Morning 9 to 12'],
    autoStart: true,
    loop: true,
  }}
  />
  </h1>
      <p className="mb-8 leading-relaxed font-medium">
        Next.js is a popular React framework that allows you to build server-side rendered applications. It's built on top of Node.js and offers a lot of features that make it easy to develop and deploy your applications.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-md w-3/12">
      <img className="object-cover object-center rounded" alt="profile" src="image/sawera.jpeg"></img>
    </div>
  </div>
  </section>

  {/* footer section */}

  <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Kahkashan —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@landing-page
      </a>
    </p>
    <span className="inline-flex sm:ml-20 sm:mt-0 mt-4  sm:justify-start">
      <a className="text-sky-600">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-sky-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text--400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-sky-400">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
<span className="inline-flex sm:ml-20 sm:mt-0 mt-4  sm:justify-end text-slate-400 text-sm">Copyright@ All Rights Reserved</span>
  </div>
</footer>
</main>

)
};

