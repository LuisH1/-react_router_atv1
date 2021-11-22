import React from 'react'
import { HomeComponent,DivText, DivImage } from './style'


function Home(){

    return(
        <>
        <HomeComponent>
            <DivImage>
              
                <img src="./home.png"/>
            </DivImage>

         

            <DivText>
                
                <p>{'Bem Vinde(){}'}</p>

            </DivText>
        </HomeComponent>
        </>
    )
}


export default Home