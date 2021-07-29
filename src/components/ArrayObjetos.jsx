import React,{Fragment, useState} from 'react'

const ArrayObjetos = () => {

    const estadoInicialArray =[
        {id:1, texto: 'tarea1'},
        {id:2, texto: 'tarea2'},
        {id:3, texto: 'tarea3'}
    ]
    //hacemos lista de objetos con ID / array de objetos
    //como tenemos propiedades, ya podemos pintarlas, por lo que el item en h4 será item.texto

    const [listaArray, setArray] = useState(estadoInicialArray)
    return (

        <Fragment>
            <h2>Array de Objeto</h2>
            {
                listaArray.map( (item,index) => (
                <h4 key={item.id} > {item.texto}</h4>
                ))
            }
        </Fragment>

    )
}
//podemos utilizar index o llamar al ID (son únicos), llamamos a item.id en vez de index

export default ArrayObjetos

