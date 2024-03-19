import React from 'react'
import rd from 'react-dom/client'
import Platform from './Platform';
import './styles/style.css'

const root = document.getElementById('root');


const reactObj = rd.createRoot(document.getElementById('root'))
reactObj.render(
    <React.StrictMode>
        <Platform></Platform>
    </React.StrictMode>,
)
