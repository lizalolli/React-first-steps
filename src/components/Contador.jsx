import React, {Fragment} from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)//como es nro, lo iniciaremos en 0
    //esto se usa si no se realiza el import de useState en import.
    //queremos aumentar el nro cada vez que el usuarioo haga click en el botón
    //para ello, lo haremos a través del 2do argumento, 'setContador'
    //SetContador = modificador
    // contador = state

    const aumentar = () => {
        console.log('click')
        setContador(contador + 1)
        //tomamos el estado inicial de contador (en este caso 0 y le sumamos 1)
        //cuando sea contador = 1 sumará otro 1 y serán 2, etc.
        //también se podría llamar directamente en el button ahorrándose la function
        //<button onClick={() => setContador(contador + 1)}>Aumentar</button>
    }

    const restar = () => {
        console.log('click')
        setContador(contador - 1)
    }

    return (
        <Fragment>
            <h2>Contador</h2>
            <h3>Nuestro número aumentando {contador}</h3>
            <h4>
                {
                contador > 2 ? 'es mayor a dos' : 'es menor a dos'
                }
            </h4>
            <button onClick={() => aumentar()}>Aumentar</button>
            <button onClick={() => restar()}>Restar</button>
        </Fragment>
    )
}
//dentro del botón llamamos otra función de flecha, con la que retornamos la anterior funcion 'aumentar'
//dentro del h4 tenemos nuestro 'operador ternario' -> un if en una sola línea
//lo quee se va a evaluar ? exito : repuesta negativa
// en este caso vamos a evaluar nuestro contador, cuando contador sea mayor a 2,
//vamos a pintar una respuesta de exito 'es maor a 2' y la repuesta negativa  va a decir 'e mayor a dos'
// el operaddor ternario nos permite dos tipos de respuesta dentro de nuestro html.
export default Contador
