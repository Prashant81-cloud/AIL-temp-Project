import React from 'react'
import ContentIntellegence1 from '../Components/ContentIntellegence1'
import ContentIntellegence2 from '../Components/ContentIntellegence2'
import ContentIntellegence3 from '../Components/ContentIntellegence3'
import ContentIntellegence4 from '../Components/ContentIntellegence4'
import { useEffect } from 'react'

function ContentIntellegence() {

    useEffect(() => {
    if (!sessionStorage.getItem("ReloadedOnce")) {
      sessionStorage.setItem("ReloadedOnce", "true");
      window.location.reload();  // Full hard reload once
    }
    return () => sessionStorage.removeItem("ReloadedOnce");
  }, []);

  return (
    <div className="overflow-visible !overflow-visible">
      <ContentIntellegence1/>
      <ContentIntellegence3/>
      <ContentIntellegence2/>

      <ContentIntellegence4/>
    </div>
  )
}

export default ContentIntellegence