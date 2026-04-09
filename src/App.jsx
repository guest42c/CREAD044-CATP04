import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header';
import Conteudo from './components/Conteudo';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Conteudo />
      <Footer nome="Guilherme" data="08/04/2026" />      
    </>
  )
}

export default App
