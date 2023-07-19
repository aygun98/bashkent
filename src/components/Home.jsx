import React from 'react'
import SectionHaqqinda from './SectionHaqqinda'
import NiyeBiz from './NiyeBiz'
import SectionFiliallar from './SectionFiliallar'
import SectionMenu from './SectionMenu'

const Home = () => {
  return (
    <div>
        <SectionHaqqinda/>
        <NiyeBiz/>
        <SectionFiliallar/>
        <SectionMenu/>
    </div>
  )
}

export default Home