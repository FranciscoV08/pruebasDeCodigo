import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Custom Hook para obtener imágenes GIF de una categoría dada
export const useFetchGifs = (category) => {
  // Estado para almacenar las imágenes y el estado de carga
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Función asincrónica para obtener nuevas imágenes
  const newImage = async () => {
    // Esperamos los resultados de la función getGifs
    const newImages = await getGifs(category);
    // Actualizamos el estado con las nuevas imágenes y marcamos isLoading como falso
    setImages(newImages);
    setIsLoading(false);
  }

  // useEffect se utiliza para ejecutar efectos secundarios cuando ocurren cambios específicos.
  // En este caso, ejecutamos newImage() una vez cuando el componente se monta ([] como dependencia).
  useEffect(() => {
    newImage(); // Llama a la función newImage para cargar imágenes cuando el componente se monta
  }, []);

  // Devolvemos un objeto que contiene las imágenes y el estado de carga para ser utilizado por el componente
  return {
    images,
    isLoading
  }
}
