import { useEffect, useState } from 'react';
import './App.css';
import { ThemeContextProvider } from './context/Theme';
import ThemeCard from './component/ThemeCard';
import ToggleButton from './component/ToggleButton';

function App() {

  let [lightTheme,setLightTheme] = useState('light')

  let darkMode = ()=>{
    setLightTheme('dark')
  }

  let lightMode = ()=>{
    setLightTheme('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(lightTheme)
  },[lightTheme])



  return (
    <ThemeContextProvider value={{lightMode,darkMode,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ToggleButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeCard/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App;
