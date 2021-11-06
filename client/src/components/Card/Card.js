import { Link } from "react-router-dom";



export default function Card({ name, image, continent, id }) {
   



    return (
        <div >
            <Link to={`/CountryDetails/${id}`}>
                <img src={image} alt="img not found"/>
                <div>{name}</div>
                <div>{continent}</div>
            </Link>
        </div >
    )
}


// Imagen de la bandera
// Nombre
// Continente
