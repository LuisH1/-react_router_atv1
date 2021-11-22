import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './views/home/index'
import Music from './views/music/index'
import City from './views/city/index'




/** router configurado na versão 6 do router-dom */

function Routs(){

    return(
        
        <Routes>

            <Route path={"/home" || "/"} element={<Home />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/city"  element={<City />}/>

        </Routes>


    )
}


export default Routs