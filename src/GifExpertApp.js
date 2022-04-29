import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

 export const GifExpertApp = () =>{
    
    //const categories = ['One punch', 'Sumuray X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Matrix']);
    
    /*
     const handleAdd = () =>{
        setcategories( [...categories, 'Hunter'] );
        //setcategories(categories.concat('Manzana'))
     }
    */
   
    return(
        <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr />
       
         
         <ol>
            {
               categories.map(category => 
                 <GridGif
                    key= { category } 
                    category = { category } 
                 />
               )
            }
         </ol>
        </>
       
    )
}

export default GifExpertApp;