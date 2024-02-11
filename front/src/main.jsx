import React from 'react'
import rd from 'react-dom/client'
import H, { Header as He } from './Header';

const root = document.getElementById('root');


const reactObj = rd.createRoot(document.getElementById('root'))
reactObj.render(
    <React.StrictMode>
        <H></H>
        <He></He>
    </React.StrictMode>,
)
