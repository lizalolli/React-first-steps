import React, { Fragment, useState } from 'react';
//para usar estados, debemos importar 'useState'

const Estados = () => {

    //para usar estados, creamos una const
    //const [] = useState()
    const [texto, setTexto] = useState('Texto desde estado')
    //en los corchetes se coloca el nombre de nuestro estado 
    //luego por medio de una coma, el estado que lo va a modificar
    // TEXTO va a ser nuestro estado que va a contener un string
    //SETTEXTO va a ser la función que va a modificar el texto en cuestión.
    //Set se usa por convención
    // Dentro de USESTATE se pondrá el valor de texto por defecto
    // USESTATE ES EL VALOR DE NUESTRO ESTADO
    //en el h3 añadimoos el estado 'texto' y esto nos muestra el contenido del useState

    const eventoClick = () => {
        console.log('me clickeastes')
        //cuando hagamos click en el botón, vamos a cambiar el texto por defecto.  
        //setTexto('cambiando el texto...')
        //este 'setTexto' cambia el texto al clickear el botón, lo oculté porque me estaba tirando error de 'too many renders'
    }

    return (
        <Fragment>
            <hr/>
            <h3>{texto}</h3> 
            <button onClick={ eventoClick }>Click</button>
            <button onClick={ eventoClick () }>Click</button>
            <button onClick={ () => eventoClick() }>Click</button>
        </Fragment>
    )
}
//cuando trabajamos con onClick es recomendable trabajar con fnctn de => y luego nuestra función

export default Estados
