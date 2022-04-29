//Todos los hooks arrancan con use.
/*Los hooks no son mas que funciones */

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) =>{
    //Los custom hook tambien pueden tener estado.
    /*El hook puede cambiar su estado e informale su estado a otros componentes */
  const [state, setState] =  useState({
      data: [],
      loading: true
  });
  

  /*
  Uso use effect para ejecutar el fetch de forma condicional.
  para que la peticion fetch se dispare una sola vez, ya que
  cada vez que hay una cambio en el componente de vuelve a solicitar.
  */
  useEffect(() =>{
      //GetGif trae los datos del fetch
      getGifs( category )
       .then( imgs =>{
            setState({
                data: imgs,
                loading: false
            });   
       })

  },[category])



  return state; // Quiere decir que devuelve {data:[], loading: true}

}