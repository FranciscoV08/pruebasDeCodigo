import { useState } from 'react'

//Comunmente se desestructura las prop 
export const AddCategory = ( { onNewCategory } ) => {

    // 1
    //Estado con el valor de One punch
    const [inputValue, setInputValue] = useState('')

    // 3.
    //Cambio el estado mediante su adn 
    const onInputChange = ({target}) =>{

        // console.log(target.value)
        setInputValue(target.value)
        
    }

    //5
    //Funcion para tomar el submit del formulario

    //En este punto tengo toda la info para mandar. Es aqui donde tendria que llamar algo para comunicarme
    const onSubmit = (event) => {
        event.preventDefault()
        //Eliminamos el error de que se envien sin valores. Es decir solo espacios 
            //En esta validación lo que relizamos es que si el input tiene menor 1 caracter no se inserta.
            //Se detiene ya que esta dando un return
         if( inputValue.trim().length <= 1 )  return;

         //De aqui le paso el valor para enviarlo al otro component
         onNewCategory( inputValue.trim() );
        //  setCategories((categ) => [inputValue, ...categ] )
         //Una vez pase la validacion podria vaciar el input dando la impresion de que se inserto
        setInputValue('')
    }



  return (

    //4.
    //El form permite realizar un refresh del navegador. Al precionar enter
    //representa una sección de un documento que contiene 
    //  controles interactivos que permiten a un usuario enviar información a un servidor web
    <form onSubmit={(event) => onSubmit(event)}>

        {/* 2. */}
        <input 
        //PROPERTI 
            type="text" 
            placeholder="Busca tu Gif"
            value={inputValue}
            //Siempre recibire el event con la referencia
            onChange={ onInputChange }
        />

    </form>
  )
}
 