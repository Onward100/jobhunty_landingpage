import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Companies from './components/Companies'
import JobCategory from './components/JobCategory'
import PostJobs from './components/PostJobs'
import FeaturedJobs from './components/FeaturedJobs'
import LatestJobs from './components/LatestJobs'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <div className='font-roboto'>
        <NavBar/>
        <Banner/>
        <Companies/>
        <JobCategory/>
        <PostJobs/>
        <FeaturedJobs/>
        <LatestJobs/>
        <Footer/>
      </div>
    </>
  )
}
