// Primero react Import
// import { useEffect, useState } from "react"
// Import de terceros
// import { getGifs } from "../helpers/getGifs"
// Nuestro codigo
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";


// SE ACOSTUMBRA A ESTAR DE ESE MODO 

export const GifGrid = ( { category } ) => {

    //Nuestro Custom hook que regresa un obj con 2 valores
    const {images, isLoading} = useFetchGifs( category );


    const eliminar = () => {
        console.log('Eliminando')
    }
   
  return (
    <>
        <h3>{ category }</h3>
        <button >Eliminar</button>
        
        {
            isLoading && ( <h2>Cargando....</h2> )
        }

        <div className="card-grid">
            {
                images.map( img => (
                    <GifItem 
                        key={img.id} 
                        // ¨PODEMOS ESPARCIR MANDANDO TODA LA INFO DE ESTA MANERA
                        // Esto se llama esparcir todas las propiedades
                        {...img}
                        // title={img.title}
                        // url={img.url}
                    />
                ) )
            }
        </div>
    </>
  )
}