
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {


    return (

        <div>
            <div  className='container-landing' >
             <Link to="/Home"><button className='main-botton'> Ingresar al Sitio</button> </Link>
            </div>
        </div>
    )

}