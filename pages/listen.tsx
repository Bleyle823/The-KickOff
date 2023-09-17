import { ReactNode } from 'react'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import Iframe from 'react-iframe';

export default function Listen() {


  return (
    <>
      <PageSEO title={`Listen - Listen to the podcast; providing links to all available platforms`} description={`Listen to the podcast; providing links to all available platforms `} />
      <div className="mt-20">
        <div className="space-y-2 mb-10 pt-6 pb-8 md:space-y-5">
          <h1 className="opacity-[.04] text-[130px] font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-[150px] sm:leading-10 md:text-[200px] md:leading-14">
            Listen
          </h1>
        </div>
          <h1 className="text-2xl font-bold mt-5">Recently Published</h1>

          <article className="min-h-116 bg-orange-600 max-w-xl mt-5 h-[32rem] w-full rounded-xl text-gray-100 bg-cover bg-center bg-EP2 transform duration-500 hover:-translate-y-1 cursor-pointer">
                <div className=" bg-black bg-opacity-60 p-10 rounded-xl h-full">
                   
                    <div className="mt-16 flex justify-between ">
                        <span className="p-3 pl-0 font-bold">Travel</span>
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">Paid
              Membership</span>
                    </div>
                </div>
            </article>

          <h1 className="text-2xl font-bold mt-10">Top Episodes:</h1>
          
          <section className=" grid  gap-8 md:grid-cols-2 lg:grid-cols-2 mt-5">

          <article className="min-h-116 max-w-xl   w-full rounded-xl text-gray-100 bg-cover bg-center bg-EP1 transform duration-500 hover:-translate-y-2 cursor-pointer ">
          <div className="bg-black bg-opacity-20 min-h-150 rounded-xl  px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300  mx-auto max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500  cursor-pointer group">
                    <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        On A Day Like Today
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                    </p>
                </div>
            </article>

            <article className="min-h-116 max-w-xl w-full rounded-xl text-gray-100 bg-cover bg-center bg-EP14 transform duration-500 hover:-translate-y-1 cursor-pointer">
          <div className="bg-black bg-opacity-20 min-h-150 rounded-xl  px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300  mx-auto max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500 cursor-pointer group">
                    <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        On A Day Like Today
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                    </p>
                </div>
            </article>

           

            

            </section>

          </div>
          
      
    </>
  )
}




