import React, { useEffect } from 'react';
import { useState } from 'react';
import Switch from 'react-js-switch';

import './App.css'


const themes = {
  dark : {backgroundColor:'#ffffff20',background : 'black', color: 'white', transition: '0.5s'}, 
  light: {backgroundColor:'#00000020',background:'white', color: 'black', transition: '0.5s'}}
const ThemeContext = React.createContext(themes.light)


function Header(){
  const theme = React.useContext(ThemeContext)
  return(
    <div style={{background: theme.background, transition: theme.transition}}>
    <h2 style={{color: theme.color, transition: theme.transition}}>Dark/light mode</h2>
  </div>
  )}

function Main({darkMode, setDarkMode}){
  const [switchText, setSwitchText]=useState('dark')

  const handleChange=(e)=>{
    setDarkMode(!darkMode)
    setSwitchText(darkMode ? 'light':'dark')
  }



    const theme = React.useContext(ThemeContext)
    return(
      <div style={{background: theme.background, transition: theme.transition}}>
      <SearchBar/> <br/> 
      <label style={{color: theme.color, transition: theme.transition}}>switch to {switchText} mode
      </label>
      <Switch value={darkMode} onChange={handleChange} />
    </div>
    )}

function Footer(){
      const theme = React.useContext(ThemeContext)
      return(
        <div style={{background: theme.background, transition: theme.transition}}>
        <h2 style={{color: theme.color, transition: theme.transition}}>Try it !</h2>
      </div>
      )}
  

      function SearchBar(){
        const theme = React.useContext(ThemeContext)
        return (<>
          <input type="text" placeholder='...' style={{background:theme.backgroundColor}}/>
          </>
        )
      }
  
  
  function App(){  
    const [darkMode, setDarkMode]= React.useState(true)  
    const theme = darkMode ? themes.light : themes.dark

    return(<div style={{background: theme.background, transition: theme.transition}} id='App'>
  <ThemeContext.Provider value={theme}>
    <Header/>
    <Main darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Footer/>
  </ThemeContext.Provider>
    </div>
    )}    
  
  export default App;




