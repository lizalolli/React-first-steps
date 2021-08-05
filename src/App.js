import React, { Fragment } from 'react';
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'
import Eventos from './components/Eventos';
import Estados from './components/Estados';
import Contador from './components/Contador';
import Listas from './components/Listas';
import ArrayObjetos from './components/ArrayObjetos';
import OperadorPropagacion from './components/OperadorPropagacion';
import Props from './components/Props'
//si se añade el componente a la fntcn App, se importan inmediatamente


//función o función de => que retorne un HTML
function App() {
  //en return debemos devolver sólo UN elemento y por eso se encierra todo en un div.
  //en vez de div, deberíamos usar <Fragment> o <>
  return (
    //En react no se usa class sino className
    //<div className="App">
    //<>
    <Fragment>
      <h1>Hola mundo!</h1>
      {/*<Parrafo /> 
      <Parrafo />
      <Variables /> 
      <Eventos/>
      <Estados/>
      <Contador/>
      <Listas/>
      <ArrayObjetos/>
      <OperadorPropagacion/>
      <Props persona="Juanito" edad={25}/>*/}
      <Props persona="Ignacito"/>
      <Props persona="Pedro"/>
      <Props persona="Catalina"/>
    </Fragment>
    //</div>
    //</>
    //en el caso de Props, 'persona' vendría siendo un props.
    //desde acá, enviamos props.s
    //las props que se pasen en un componente forman parte del mismo objeto
  );
}
// arriba, con la etiqueta <Parrafo /> añadimos nuestro componente párrafo desde el archivo Parrafo.jsx 
// como es un componente, podemos repetirlo las veces que queramos
//se puede llamar un componente dentro de otro componente
export default App;
