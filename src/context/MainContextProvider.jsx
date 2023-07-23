import React, { createContext } from 'react'
import { GaleryFoto } from './GalleryData';
import { GaleryVideo } from './GalleryData';
import { commentData } from './ReylerData';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{GaleryFoto , GaleryVideo, commentData}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider