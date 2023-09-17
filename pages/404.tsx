import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title="Page Not Found" description="Sorry we couldn't find this page :(" />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
Oops!
          </p>
          <p className="mb-8">
          looks like you are knocking neighbors' doors 
          </p>
          <Link
            href="/"
            className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-gray-600 bg-opacity-40 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-opacity-70 focus:outline-none dark:hover:bg-opacity-70"
          >
            Take Me Home 🏠 
          </Link>
        </div>
      </div>
    </>
  )
}