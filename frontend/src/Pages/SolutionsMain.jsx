import React from 'react'
import BrandSolutions from '../Components/BrandSolutions'
import MediaSolutions from '../Components/MediaSolutions'
import ContentSolutions from '../Components/ContentSolutions'

function SolutionsMain() {
  return (
    <div className='bg-[#FAF4EC] h-screen '>
      <div><BrandSolutions/></div>
      <div><MediaSolutions/></div>
      <div><ContentSolutions/></div>
    </div>
  )
}

export default SolutionsMain