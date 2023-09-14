import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      
    <div className="mb-6 grid text-center lg:max-w-7xl lg:w-full lg:mt-10 lg:grid-cols-3 lg:text-left md:mt-10 sm:mt-10">
      <Image
        className="col-span-2 md:mx-auto md:block md:col-span-2 lg:mx-0 lg:float-left lg:col-span-1 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="../emander-photo.jpg"
        alt="Emander Photo"
        width={600}
        height={400}
        priority
      />
      <p className={`col-span-2 mt-2 lg:mt-0 lg:ml-10 md:mt-2 md:ml-0`}>
        <h1 className={`mb-3 text-4xl font-semibold`}> Hi There !</h1>
        <p className="mb-3 text-lg">
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
      </p>
    </div>
  </main>
  )
}
