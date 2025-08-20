import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import {Route, Routes} from 'react-router-dom'

function App() {

    return (
        <div className='main'>
            <Navbar/>
            <div className='content'>
                <Intro/>
                <Routes>
                    <Route path="/" component={App} />
                </Routes>
            </div>
        </div>
    )
}

export default App
