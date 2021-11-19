import React from "react"
import './About.css'
import jslogon from '../../images/jslogon.png'
import reactLogon from '../../images/reactLogon.png'
import nodeLogo from '../../images/nodeLogo.png'
import expressLogo from '../../images/expressLogo.jpg'
import htmLogo from '../../images/htmLogo.png'
import postgreLogo from '../../images/postgreLogo.png'
import CSS3logo from '../../images/CSS3logo.png'
import reduxlogo from '../../images/reduxlogo.png'
import seqLogo from '../../images/seqLogo.png'
import linkedinLogo from '../../images/linkedinLogo.png'
import NavBar from "../NavBar/NavBar"


export default function About() {

    return (
        <div>
            <NavBar />
            <div className='About'>
                <div className='box'>
                    <div className='text'>
                        Countries App es un proyecto individual realizado durante la cursada del Bootcamp "Henry".
                        <br />
                        <br />
                        El proyecto fue desarrollado utilizando todas las tecnologias aprendidas en el transcurso de la carrera:
                        ReactJs, Redux, NodeJs, Express, Sequelize, PostgreSQL, y los estilos fueron aplicados utilizando CSS puro,
                        sin uso de librerias externas.
                        La App se sirve de la API Rest Countries, almacena los datos en la base de datos local, para luego ser utilizados y requeridos
                        desde la API propia.
                    </div>
                    <div className='contact'>
                       <h3 id='contact-text'>CONTACTO</h3>
                       <a href='https://www.linkedin.com/in/gaston-ripamonti/' target="_blank" rel='noreferrer'>
                           <img id='linkedin' src={linkedinLogo} alt='Img not found' />
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div id='made'>HECHO CON:</div>
                    <div >
                        <img className='icon-html' src={htmLogo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={CSS3logo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={jslogon} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={reactLogon} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={reduxlogo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={nodeLogo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={expressLogo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={seqLogo} alt='img not found' />
                    </div>
                    <div >
                        <img className='icon' src={postgreLogo} alt='img not found' />
                    </div>
                </div>
            </div>
        </div>
    )
}