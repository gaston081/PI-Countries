import { Link } from "react-router-dom";
import './Card.css'


export default function Card({ name, image, continent, id }) {




    return (
        <div className='card' >
            <div className='container'>
            <Link style={{ textDecoration: 'none', color: 'black'}} to={`/CountryDetails/${id}`}>
                <img className='flag' src={image} alt="img not found" />
                <div id='card-text'>
                    <div>{name}</div>
                    <div>{continent}</div>
                </div>
            </Link>
            </div>
        </div>
    )
}


