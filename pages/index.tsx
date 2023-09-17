import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'


const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

const newSub = (e) => {
  e.preventDefault()
  console.log("new sub")
}

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-180 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-180"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}

<div className="relative flex-col justify-center items-center py-20 w-full">



<div className="absolute top-0 xl:left-51">
<div className='opacity-5 fill-red-500 ml-20 w-60 h-60' >
<img src="Kick-Off-Logo-Alt.png" width="2000" height="2000" />
</div>
</div>
<div className="uppercase tracking-normal font-logoFont text-5xl md:text-[60px]  ralative flex justify-center ">
          <span className="">the&nbsp;</span>
          <span className="text-blue-500">KICK-</span> <span className="animate-bounce animate-infinite animate-delay-[1ms] animate-ease-linear animate-fill-forwards">⚽</span><span className="text-blue-500">FF</span>
          <span className="">&nbsp;KE</span>
          
        </div>

      {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white text-center">Are you a die-hard football fan? Do you live and breathe the beautiful game?  </h2>
          <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl dark:text-white text-center">  </h2>
          <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 sm:text-xl dark:text-white text-center"> If so, you've just found your new favorite destination. </h2>
          <p className="mx-auto max-w-2xl font-semibold text-gray-500 text-center dark:text-gray-400">The Kick-Off is a group of friends who come together and discuss matters regarding football matches, transfers, football predictions i.e matches and who to win the league.
          </p>
          <p className="mx-auto text-sm mb-8 max-w-2xl text-gray-500 md:mb-5 text-center dark:text-gray-400">
          So, whether you're a fan of the Premier League, La Liga, Serie A, or any other league across the globe, The Kick-Off is your one-stop-shop for all things football. Our passion for the game knows no bounds, and we can't wait to share it with you.
          
          </p>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 opacity-50   row-gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full  sm:w-12 sm:h-12">
              <a href="https://instagram.com/thekickoffkepodcast/"><img src="Instagram1.png" width="180" height="180" /></a>
              </div>
             
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
              <a href="https://www.tiktok.com/@thekickoffkepodcast/"><img src="TikTok1.png" width="180" height="180" /></a>
              </div>
              
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full  sm:w-12 sm:h-12">
              <a href="https://x.com/thekickoffke1?s=11"><img src="Twitter1.png" width="180" height="180" /></a>
              </div>
              
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
              <a href="https://youtu.be/jsURdhL0flI?si=Qxus0WI15nBG_Ryi"><img src="Youtube1.png" width="180" height="180" /></a>
              </div>
             
            </div>

            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full sm:w-12 sm:h-12">
              <a href="https://open.spotify.com/show/692FNGJDjbGzZEMu7NTMHU?si=a8f80d7c07f64d7d"><img src="Spotify1.png" width="180" height="180" /></a>
              </div>
             
            </div>

            
          </div>
        </div>






          {/* <form id="sib-form" method="POST" action="https://361d419d.sibforms.com/serve/MUIEABXaQkiV366O1Vka55WJdEWbikyNzet4OESZXmFfi-1fmK4ehB1qVT5HTQJzUEpt1s6Be-Xe-AgjI11OUYdiEegPGxiStpLF7E9v-7_mhn30g7W-inLdgquVhj5wSBBlU6VeFbF6a24kbQ_9riSk1TbjIUVdGFrlUBaF0NZ31kvKSfRHr7hz4nncQHyNNVOrCNivhLTYBXtc"> 
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="outline-none transition-all duration-700 block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-200 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-gray-200 focus:bg-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 border-0 dark:focus:bg-gray-800" placeholder="in case.., ur email goes here 😁" type="email"  required                                                                                                                                                id="EMAIL" name="EMAIL" autoComplete="on" data-required="true" 
                      />
                  </div>
                  <div>
                      <button onClick={newSub} type="submit" className="transition duration-700 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">By joining, you agree to join the nation and be one of us 👉 we wrote a&nbsp;
              <Link href="/manifesto" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
              </div>
          </form>
          */}
      </div>
  </div>
</section>

      </div>
    </>
  )
}

