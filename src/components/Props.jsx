import React,{Fragment, useState} from 'react'
//desde acá, recibimos props. este props equivaldrá a 'persona' que está en app 
//y devolverá un objeto
//como acá recibimos el props, podemos llamarlo desde como está escrito en App.js
//es decir, persona. entonces llamamos a props y luego al oobjeto persona.
const Props = (props) => {
    console.log(props)
    return (
        <>
            <h2>ola {props.persona}</h2>
        </>
    )
}

export default Props
