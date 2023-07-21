import React from 'react'
import SectionHaqqinda from './SectionHaqqinda'
import NiyeBiz from './NiyeBiz'
import SectionFiliallar from './SectionFiliallar'
import SectionMenu from './SectionMenu'
import SectionPartnerler from './SectionPartnerler'
import SectionBloglar from './SectionBloglar'
import SectionGalery from './SectionGalery'

const Home = () => {
  return (
    <div>
        <SectionHaqqinda/>
        <NiyeBiz/>
        <SectionFiliallar/>
        <SectionMenu/>
        <SectionPartnerler/>
        <SectionBloglar/>
        <SectionGalery/>
    </div>
  )
}

export default Home