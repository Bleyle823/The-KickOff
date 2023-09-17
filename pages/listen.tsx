//import { ReactNode } from 'react'
import { PageSEO } from '@/components/SEO'
//import Link from 'next/link'
//import Iframe from 'react-iframe';

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
                   
                    <div className="mt-96 flex justify-between ">
                    <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                        <img src="YouTube1.png" width="30" height="30" />
                        
                    </span>
                        
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                       < a href="https://open.spotify.com/episode/4Rw1xrBSGEmSShK81vC5fO?si=0894292f20054f0f"><img src="Spotify1.png" width="30" height="30" /></a>
                        
                        </span>
                    </div>
                </div>
            </article>

          <h1 className="text-2xl font-bold mt-10">Top Episodes:</h1>
          
          <section className=" grid  gap-8 md:grid-cols-2 lg:grid-cols-2 mt-5">

          <article className="min-h-116 max-w-xl   w-full rounded-xl text-gray-100 bg-cover bg-center bg-EP1 transform duration-500 hover:-translate-y-2 cursor-pointer ">
          <div className="bg-black bg-opacity-20 min-h-150 rounded-xl  px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300  mx-auto max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500 cursor-pointer group">
                    <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                       SEASON 3 / EPISODE 1
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <a href="https://open.spotify.com/episode/2lbWZAAqbvCNgRvyXzMfnj?si=6069367375914bd5" className="opacity-0 text-white mb-8 text-xl group-hover:opacity-80 transform duration-500">
                        GW1 ANALYSIS/THE SAUDI INVASION/KANE/PSG DILLEMA/CR7&MESSI/FPL TALK/GW2 PREDICTIONS
                    </a>
                </div>
            </article>

            <article className="min-h-116 max-w-xl w-full rounded-xl text-gray-100 bg-cover bg-center bg-EP14 transform duration-500 hover:-translate-y-1 cursor-pointer">
          <div className="bg-black bg-opacity-20 min-h-150 rounded-xl  px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300  mx-auto max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500 cursor-pointer group">
                    <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        SEASON 2 / EPISODE 14
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <a href="https://open.spotify.com/episode/0OgOTbWGxgXh6AeB8Y0Y6j?si=b19ab8d57276463e" className="opacity-0 text-white mb-8 text-xl group-hover:opacity-80 transform duration-500">
                        MANCITY TREBLE/MAN UTD SALE/ SAUDI LEAGUE/CLUB TRANSFERS/FOOTBALL TRIVIA/PEP&HAALAND
                    </a>
                    
                </div>
            </article>

           

            

            </section>

          </div>
          
      
    </>
  )
}




