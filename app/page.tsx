'use client'
import Image from 'next/image';
//import Typewriter from 'typewriter-effect';
import * as React from 'react';
import { Typewriter } from 'react-simple-typewriter'

/*import dynamic from 'next/dynamic';

const Typewriter = dynamic(
  () => import("typewriter-effect"),
  {
      ssr: false
  }
)


      <div className=" border-2 border-rose-800 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial 
      before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic 
      after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h2 className={`mb-0 text-2xl font-semibold border-2 border-rose-800`}>
          Docsss{' '}
        </h2>
      
      <div className="mb-6 grid text-center lg:max-w-full lg:w-full lg:mt-0 lg:text-left md:mt-10 sm:mt-10">
        <Image
          className="md:mx-auto md:block lg:float-center relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/home-wallpaper.jpg"
          alt="Emander Photo"
          width={2900}
          height={100}
          style={{objectFit: "contain"}}
          priority
        />
      </div>
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello World</h1>
*/
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      <div className="mb-6 grid h-[calc(100vh-106px)] p-16 text-center bg-[url('/home-wallpaper.jpg')] bg-center bg-fixed bg-cover w-full ">
        <div className="flex mb-3 text-5xl lg:text-left items-center text-white border-2 border-rose-800">
          <div className="mb-3 border-2 border-rose-800">Hello, I am</div>
          <div className="mb-3 border-2 border-rose-800">
          <Typewriter
              words={['Emander Dangla', 'a Software Engineer', 'an Artificial Intelligence and Entrepreneur Student', 'a Freediver and Sunset Lover']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={1000}
             />
          </div>
        </div>
      </div>
      
      <div className={`col-span-2 mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-3 text-4xl font-semibold`}> Hi There !</h1>
          <p className="mb-3 text-lg ">
          My name is Emander, I am working towards completing a post-secondary degree in Artificial Intelligence - Software Engineering and have over 6 years of hands-on experience in software development and application support. I am passionate
          about AI and Web Development.  I am planning to develop a business that will make a long lasting positive impact to our society.
          </p>
          <p className="mt-5"> Currently, I am:</p>
          <ul className="mt-3 list-disc list-inside">
            <li>an AI post-graduate student</li>
            <li>Developing Machine Learning projects for my portfolio</li>
            <li>Studying for ITIL 4 Foundation certification</li>
            <li>Looking for interesting and impactful work related to Application Support or AI (please reach out)</li>
          </ul>
          <p className="mt-5 text-lg ">
          Check out my resume
          </p>
        </div>

      <div className="mb-4 grid text-center lg:max-w-7xl lg:w-full lg:mt-14 lg:grid-cols-1 lg:text-left md:mt-10 sm:mt-10">
        <h1 className={`mb-0 text-4xl font-semibold`}> Experience</h1>
      </div>
      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
        <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/eia.jpg"
          alt="European Innovation Academy Logo"
          width={150}
          height={150}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> European Innovation Academy</h1>
          <p className="mb-0"> Porto, Portugal</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Jul 2023 - Aug 2023</p>
          <p className="mb-0"> Entrepreneur and Software Developer</p>
        </div>
      </div>

      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
      <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ymca-logo.png"
          alt="YMCA Logo"
          width={130}
          height={140}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> YMCA - Scarborough</h1>
          <p className="mb-0"> Toronto, Ontario</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Dec 2022 - Present</p>
          <p className="mb-0"> Team Member and Volunteer</p>
        </div>
      </div>

      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
      <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/infinitedata-logo.jpeg"
          alt="InfiniteDATA Logo"
          width={250}
          height={98}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> InfiniteDATA</h1>
          <p className="mb-0"> Manila, Philippines</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Oct 2020 - Aug 2022</p>
          <p className="mb-0"> Software Implementation Consultant</p>
        </div>
      </div>

      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
      <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/accenture-logo.png"
          alt="Accenture Logo"
          width={250}
          height={141}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> Accenture Inc.</h1>
          <p className="mb-0"> Manila, Philippines</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> May 2015 - Oct 2020</p>
          <p className="mb-0"> Senior Software Developer</p>
        </div>
      </div>

      <div className="mb-4 grid text-center lg:max-w-7xl lg:w-full lg:mt-14 lg:grid-cols-1 lg:text-left md:mt-10 sm:mt-10">
        <h1 className={`mb-0 text-4xl font-semibold`}> Education</h1>
      </div>
      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
        <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/FEP-U-porto-logo.png"
          alt="FEP U. Porto - Economics and Management Logo"
          width={300}
          height={122}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> FEP U. Porto - Economics and Management</h1>
          <p className="mb-0"> Porto, Portugal</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Jul 2023 - Aug 2023</p>
          <p className="mb-0"> Certificate in Innovation and Entrepreneurship</p>
        </div>
      </div>

      <div className="mb-5 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
        <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/centennial-logo.jpg"
          alt="Centennial College Logo"
          width={270}
          height={87}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> Centennial College</h1>
          <p className="mb-0"> Toronto, Ontario</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Sep 2022 - Apr 2024</p>
          <p className="mb-0"> Artificial Intelligence - Software Engineering</p>
          <p className="mb-0"> Unofficial GPA: 4.2</p>
        </div>
      </div>

      <div className="mb-0 grid text-center lg:max-w-6xl lg:w-full lg:mt-14 lg:grid-cols-2 lg:text-left md:mt-10 sm:mt-10">
        <Image
          className="mx-auto my-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/adamson-university-logo.png"
          alt="Adamson University Logo"
          width={160}
          height={160}
          priority
        />
        <div className={`mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
          <h1 className={`mb-1 text-2xl font-semibold`}> Adamson University</h1>
          <p className="mb-0"> Manila, Philippines</p>
          <p className="mb-0 md:mb-6 lg:mb-6"> Jun 2011 - Apr 2015</p>
          <p className="mb-0"> Bachelor of Science in Information Technology</p>
          <p className="mb-0"> Academic Scholar, Dean’s Lister, Academic Merit</p>
        </div>
      </div>
    </main>
  )
}