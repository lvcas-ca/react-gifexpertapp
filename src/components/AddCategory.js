import React, { useState } from 'react';
import PropTypes from 'prop-types';


                              //prop
export const AddCategory = ({ setCategories }) =>{

    const [inputValue, setInputValue] = useState('');//('') es un string vacio

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log("submit hechi");
        if(inputValue.trim().length > 2){
          //prop.setCategories(cats)...
          /*Set categories recibe un callback, regresa un nuevo arreglo con todas las categorias
          junto al inputValue */
           setCategories( cats => [inputValue, ...cats] ); 
           //Luego se limpia el input
           setInputValue("");
        }
    }

    return(
        <>
           <form onSubmit={ handleSubmit }>
              <input
                type= 'text'
                value={ inputValue }
                onChange = { handleInputChange }
              />
           </form>
        </>
    )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
