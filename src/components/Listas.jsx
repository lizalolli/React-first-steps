import React,{Fragment, useState} from 'react'


const Listas = () => {

    const estadoInicial =[1,2,3,4,5]

    const [lista, setLista] = useState(estadoInicial)//aquí se llama al array, el elemento por defecto sería la lista de nros, EL ESTADO de lista.
    //también podría ser  const [lista, setLista] = useState(1,2,3,4,5) y nos ahorraríamos la constante
    // USESTATE ES EL VALOR DE NUESTRO ESTADO
    return (

        <Fragment>
            <h2>Listas</h2>
            {
                lista.map( (item,index) => (
                <h4 key={index} > {item}</h4>
                ))
            }
        </Fragment>
    )
}
//cuando queremos traer un array y queremos recorrerlo o pintarlo en el html vamos a usar estados y map.
// lista es nuestro estado, y con él llamamos a map.
//el map hace un recorrido por cada uno de nuestros estados
// el map toma un item en () y ese item lo vamos a ir ddevolviento
// el parámetro dentro de la => va a devolver cada uno de nuestros númeeros
// 'item' es el parámetro de nuestra =>
//en el h4 se verán nuestros números (5 veces)
//MAP -> cada vez que lo utilizamos, debemos tener un 'key'
//como en nuestro array no tenemos un id por cada elemento, podemos llamar a INDEX
//el index siempre pasa como segundo parámetro dentro de la =>
//DENTRO del h4 ponemos el key <h4 key={index} > y ahi pintamos el index
export default Listas
