import React, {Fragment} from 'react'

const Contador = () => {

    const [contador, setContadors] = React.useState(0)//como es nro, lo iniciaremos en 0
    //esto se usa si no se realiza el import de useState en import.
    //queremos aumentar el nro cada vez que el usuarioo haga click en el botón
    //para ello, lo haremos a través del 2do argumento, 'setContador'
    //SetContador = modificador
    // contador = state

    const aumentar = () => {
        console.log('click')
        setContadors(contador + 1)
        //tomamos el estado inicial de contador (en este caso 0 y le sumamos 1)
        //cuando sea contador = 1 sumará otro 1 y serán 2, etc.
        //también se podría llamar directamente en el button ahorrándose la function
        //<button onClick={() => setContador(contador + 1)}>Aumentar</button>
    }

    return (
        <Fragment>
            <h2>Contador</h2>
            <h3>Nuestro número aumentando {contador}</h3>
            <button onClick={() => aumentar()}>Aumentar</button>
        </Fragment>
    )
}
//dentro del botón llamamos otra función de flecha, con la que retornamos la anterior funcion 'aumentar'

export default Contador
