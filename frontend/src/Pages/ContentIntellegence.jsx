import React from 'react'
import ContentIntellegence1 from '../Components/ContentIntellegence1'
import ContentIntellegence2 from '../Components/ContentIntellegence2'
import ContentIntellegence3 from '../Components/ContentIntellegence3'
import { useEffect } from 'react'
import SEO from '@/Components/SEO'

function ContentIntellegence() {



  return (

    <>

<SEO
  title="Content Intelligence | AIL India"
  description="Learn about AIL India's content intelligence solutions."
  canonical="https://www.ail-india.com/content-intellegence"
/>


    <div className="overflow-visible !overflow-visible">

      
      <ContentIntellegence1/>
      <ContentIntellegence3/>
      <ContentIntellegence2/>


    </div>
    </>
  )
}

export default ContentIntellegence