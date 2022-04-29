import React, { createContext, useState } from 'react'

import { Route, Routes } from "react-router-dom";

import MainRendering from './components/main_rendering/MainRendering';
import PortalsMenu from './components/portals_menu/PortalsMenu';
import ThemeLanguageSwitcher from './components/theme_language_switcher/ThemeLanguageSwitcher';


export let gData = createContext()

const App = () => {

  let [state,setState] =useState(1)
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home")
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] = useState("about_us")



  return (

    <>
    <gData.Provider value={{state,setState, 
                            vvgnli_main_menu_state, set_vvgnli_main_menu_state,
                            vvgnli_about_submenu_state, set_vvgnli_about_submenu_state}}>

      <ThemeLanguageSwitcher />
      <PortalsMenu />
      <MainRendering />

    </gData.Provider>
    </>
  )
}

export default App