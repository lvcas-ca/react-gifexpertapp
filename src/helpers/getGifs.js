  //Fetch que trae id. titulo e imagenes gif
  export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&offset=0&rating=g&lang=en&api_key=hbwXlwzuRuxp5FdEFkEpqjQRzQvfjfAl`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}