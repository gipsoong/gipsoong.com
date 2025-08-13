import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import Navbar from '../components/Navbar'
import {Route, Routes} from 'react-router-dom'

function App() {

    return (
        <>
        <Navbar/>
        <div className='main'>
            <Routes>
                <Route path="/" component={App} />
            </Routes>
        </div>
        </>
    )
}

export default App
