import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';
import LatestVideos from './LatestVideos';
import City from './City';
import ImageGallery from './ImageGaralley';
import Navbar from './Navbar';
function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      < City />
      <NewsCategory />
      <LatestVideos />
      
      <ImageGallery />
      

    </>)
}

export default Home