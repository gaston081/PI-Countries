
export default function Card({ name, image, continent, id }) {

    return (
        <div>
            <img src={image} alt= "img not found" />
            <div>{name}</div>
            <div>{continent}</div>
        </div>
    )
}


// Imagen de la bandera
// Nombre
// Continente
