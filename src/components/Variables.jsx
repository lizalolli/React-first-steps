import React from 'react'
// esta importación es MUY importante al crear un nuevo compoonente

const Variables = () => {

    const saludo = 'Hola desde h2'
    //podemos escribir JS dentro de esta función gracias al formato JSX.
    //podemos llamar JS dentro del 'HTML' escribiéndolo dentro de {}.
    //dentro de h2, se inseertó la const 'saludo'
    //el msje de 'saludo' se muestra junto con h2 como string

    const imagen = 'https://pbs.twimg.com/media/EraYrCHXAAEM-k3.jpg'
    //en la constante pusimos la url de una imagen
    // esta imagen se puede llamar como constante desde una etiqueta 'img' entre llaves
    return (
        <div>
          <h2>Nuevo componente {saludo}</h2>  
          <img src={imagen} alt=""/>
        </div>
    )
}

//esto no es html, es JSX. entre medio podemos usar lógica de JS.
export default Variables
