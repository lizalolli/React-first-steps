import React,{Fragment, useState} from 'react'
//Acá vermos cómoo añadir un nuevo elemento a nuestra lista, viene el concepto
//de operador de propagación, esto es JS.
//el opeador de propagación une dos arrays.

const OperadorPropagacion = () => {

    const estadoInicialArray =[
        {id:1, texto: 'tarea1'},
        {id:2, texto: 'tarea2'},
        {id:3, texto: 'tarea3'}
    ]
    //llamaremos a setLista por medio de un botón
    const [listaArray, setArray] = useState(estadoInicialArray)
    /*//tenemos un array con dos elemtenos
    const arrayUno =['Chile', 'Argentina']
    //otro array con dos elementos
    const arrayDos= ['Perú', 'México']
    // este array toma el elem2 + elem2 y luego con , se sepada del otro array.
    //esto por medio de los '...'
    const Unidos = [...arrayUno, ...arrayDos]
    //en consola, el resultado de Unidos es un único arra con cada uno de los elementos.
    console.log(Unidos)*/

    const agregarElemento = () => {
        console.log('me hiciste click')
          
    }

    return (

        <Fragment>
            <h2>Operador de propagación</h2>
            {
                listaArray.map( (item,index) => (
                <h4 key={item.id} > {item.texto}</h4>
                ))
            }
            {/*Cada vez que se presione este botón, se añadirá un nuevo elemento*/} 
            <button onClick={() => agregarElemento()}>Agregar</button>
        </Fragment>

    )
}

export default OperadorPropagacion

