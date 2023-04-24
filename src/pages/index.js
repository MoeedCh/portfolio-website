import { Inter } from "next/font/google";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import {useState} from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // DARK MODE IMPLEMENTATION
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Moeed Chaudhry Portfolio</title>
        <meta name="description" content="Generated by" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-x font-burtons">Made by Moeed</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Moeed Chaudhry</h2>
            <h3 className="text-2xl md:text-3xl py-2">Computer Science Student@ Virginia Tech</h3>
            <p1 className="text-md md:text-xl py-5 leading-8 text-gray-800 max-w-lg mx-auto">Expected Graduation: Dec 2023</p1>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin />
              <AiFillGithub />
          </div>
          <div className="mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-7 overflow-hidden">
              <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        {/* SECOND PAGE BELOW */}
        
        <section>
          <div>
              <h3 className="text-3xl py-1"> Services I Offer</h3>
              <p className="text-md py-2 leading-8 text-gray-80">
                  BLANKET TEXT OF WHAT IT IS OFFER. <span className="text-teal-500">I CAN RESTRUCTURE LATER.</span> END P TAG
              </p>
          </div>

          {/* CARD SYSTEM BELOW */}

          <div className="lg:flex gap-10 justify-center">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                  <Image src={design} width={100} height={100}/>
                  <h3 className="text-lg font-med pt-8 pb-2">Beautiful Designs</h3>
                  <p className="py-2"> 
                    DESCRIPTION OF DESIGNS 
                  </p>
                  <h4 className="py-4 text-teal-600">The Stack I used: </h4>
                  <p className="text-gray-800 py-1">Python</p>
                  <p className="text-gray-800 py-1">FireBase</p>
                  <p className="text-gray-800 py-1">Google Maps API</p>
                  <p className="text-gray-800 py-1">TKinter</p>
              </div>


              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                  <Image src={code} width={100} height={100}/>
                  <h3 className="text-lg font-med pt-8 pb-2">Beautiful Designs</h3>
                  <p className="py-2"> 
                    DESCRIPTION OF DESIGNS 
                  </p>
                  <h4 className="py-4 text-teal-600">The Stack I used: </h4>
                  <p className="text-gray-800 py-1">Python</p>
                  <p className="text-gray-800 py-1">FireBase</p>
                  <p className="text-gray-800 py-1">Google Maps API</p>
                  <p className="text-gray-800 py-1">TKinter</p>
              </div>

   
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                  <Image 
                  src={consulting} width={100} height={100}/>
                  <h3 className="text-lg font-med pt-8 pb-2">Beautiful Designs</h3>
                  <p className="py-2"> 
                    DESCRIPTION OF DESIGNS 
                  </p>
                  <h4 className="py-4 text-teal-600">The Stack I used: </h4>
                  <p className="text-gray-800 py-1">Python</p>
                  <p className="text-gray-800 py-1">FireBase</p>
                  <p className="text-gray-800 py-1">Google Maps API</p>
                  <p className="text-gray-800 py-1">TKinter</p>
              </div>
          </div>
        </section>

        {/* THIRD SECTION BELOW */}

        <section>
          <div>
            <h3 className="text-3xl py-1"> Portfolio </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
