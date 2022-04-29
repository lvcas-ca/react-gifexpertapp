import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GridGif = ({ category }) => {

  /*
  Almaceno la variable dentro de GridGif
  Desesctrucuro la variable con data y loading
  */
  const {data:images, loading} = useFetchGifs( category );




 //Devolver un li cno el id=key y value
  return (
    <>
      <h3>{ category }</h3>

      {loading && <p className='animate__animated animate__flash'>loading</p>}

      <div className='card-grid'>
          {
            images.map( img =>(
                <GifGridItem 
                    key={ img.id }
                    //uso spread para el img, traigo el array de map que tiene id, tittle, url solo con ...img
                    { ...img }
                />
            ))  
          }
          
      </div>
     
    </>
   
  )
}
