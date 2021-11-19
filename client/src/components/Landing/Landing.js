
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {


    return (

        <div>
            <div  className='container-landing' >
                <div className= 'landing-title'>Countries App</div>
             <Link to="/Home"><button className='main-botton'> Vamos a conocer algunos paises</button> </Link>
            </div>
        </div>
    )

}