//Importacion del useState hook
import { useState } from "react"

import { AddCategory } from "./components/AddCategory";
import { DeletCategory } from "./components/DeletCategory";
import { GifGrid } from "./components/GifGrid";

//Componente donde estara toda la app 

export const GifExpertApp = () => {

    //agrego un estado donde se guardaran todos los nombre en un arreglo
    const [categories, setCategories] = useState( [ 'Mushoku tensei'] )


    //Funcion que se ejecuta al precionar el boton y agrega el valor VLORANT
    const onAddCategory = ( newCategory ) =>{
        //Si categories existe no realices nada 
        //Validacion
        if( categories.includes(newCategory) ) return;

        setCategories( [newCategory, ...categories] )
        //agregar un elemento a la categoria
        //Valorant

        //No usamos el push por que muta eln arreglo. 
        //Tenemos que crear un nuevo arreglo con el nuevo valor.
        //Creao un nuevo Array, tomo una copia de categories, para agregarle 'Valorant'
        // setCategories( ['Valorant', ...categories] );
        // setCategories( cat => [...cat, 'valorant'])
    }


//JSX el cual mostrara en la web 
  return (
    <>

    {/* TITULO */}
        <h1>GifExpertApp </h1>
    {/* Input */}

    {/* Pasaremos la referencia de la funcion para cambiar el estado como prop */}
    <AddCategory 
        // setCategories={setCategories}
        // Como el onNewCategory en su adn tiene el valor que necesitamos le mandamos como argumento
        onNewCategory ={ (event) => onAddCategory(event)}
    />
    <DeletCategory />
    {/* Listado de item / Gif */}
        {
            categories.map( ( category ) => ( 
                
                <GifGrid key={category} 
                category={category}
                /> 
                ))
            }  

        {/* Gif item */}
    </>
  )
}
