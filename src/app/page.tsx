import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-screen flex-grow pt-20">
        <div className="max-w-5xl grid gap-10 md:gap-0 md:grid-cols-[2fr,1fr] mx-auto py-20 md:py-28 px-10 grid-cols-1 overflow-hidden">
          <div className="order-2 md:order-1 flex flex-col space-y-5 h-full justify-center">
            <h1 className="flex flex-col gap-3">
              <span className="uppercase text-wvsuwhite w-full tracking-widest">
                West Visayas State University
              </span>
              <span className="text-wvsuwhite font-bold tracking-tighter text-4xl sm:text-5xl md:text-7xl">
                UNIVERSITY RECOGNITION 2024
              </span>
              <div className="font-light text-wvsuwhite">
                <p>June 5, 2024 7:30 AM</p>
                <p>WVSU CULTURAL CENTER</p>
              </div>
              <div className="flex space-x-5">
                <a href="https://www.facebook.com/Lessylicious1" className="bg-darkblue text-wvsuyellow border border-wvsuyellow font-bold h-12 text-center inline-flex items-center justify-center px-6 py-2 text-xs uppercase text-white rounded-full shadow-primary-3 box-border transition duration-150 ease-in-out hover:bg-darkblue hover:text-wvsuwhite hover:shadow-primary-2 hover:border hover:border-wvsuwhite focus:bg-wvsublue focus:text-bold focus:text-wvsuyellow focus:shadow-primary-2 focus:outline-none focus:ring-0 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong ">Student Search</a>
                <a href="/program" className="bg-darkblue text-wvsuyellow border border-wvsuyellow font-bold h-12 text-center inline-flex items-center justify-center px-6 py-2 text-xs uppercase text-white rounded-full shadow-primary-3 box-border transition duration-150 ease-in-out hover:bg-darkblue hover:text-wvsuwhite hover:shadow-primary-2 hover:border hover:border-wvsuwhite focus:bg-wvsublue focus:text-bold focus:text-wvsuyellow focus:shadow-primary-2 focus:outline-none focus:ring-0 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong ">Program</a>
              </div>
            </h1>
          </div>
          <div className='order-1 md:order-2 my-auto max-w-80 mx-auto'>
            <Image 
              src="/RH Logo 1.png"
              width={500}
              height={500}
              alt={'Rizal Hall'}
              className='h-1/6'
            />
          </div>
        </div>
      </div>
    </>
  );
}
