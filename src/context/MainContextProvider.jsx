import React, { createContext } from 'react'
import { GaleryFoto } from './GalleryData';
import { GaleryVideo } from './GalleryData';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{GaleryFoto , GaleryVideo}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider