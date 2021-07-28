import React, { Fragment} from 'react';
//para usar estados, debemos importar 'useState'

const Eventos = () => {

    //este evneto debe eejecutarse cada vez que hacemos 'Click' en el botón
    //Para ello, usamos 'onClick' dentro de la etiqueta del botón
    // dentro del botón y de la acción 'onClick' llamamos la const entre llaves
    //si en vez de lo que está puesto en el botón ejecutamos 'onClick={ eventoClick()}' el evento se ejecutará al cargar el cóodigo
    const eventoClick = () => {
        console.log('me clickeastes')
    }

    return (
        <Fragment>
            <hr/>
            <h3>Eventos</h3> 
            <button onClick={ eventoClick }>Click</button>
            <button onClick={ eventoClick () }>Click</button>
            <button onClick={ () => eventoClick() }>Click</button>
        </Fragment>
    )
}
//cuando trabajamos con onClick es recomendable trabajar con fnctn de => y luego nuestra función

export default Eventos
