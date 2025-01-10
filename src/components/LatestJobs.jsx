import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LatestJobs() {
  return (
    <>
      <section className="w-[85%] mx-auto mt-11">
      <div className="justify-between items-center flex mb-5">
          <div className="font-bold text-4xl">
            <span className="text-gray-800">Latest</span>
            <span className="text-blue-400">jobs open</span>
          </div>
          <Link href="#">
            <div className="text-purple-500 sm:flex hidden items-center gap-2 mt-4">
              Show all jobs
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </>
  )
}
