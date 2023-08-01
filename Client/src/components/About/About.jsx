import style from './About.module.css'
import yo from "../assets/yo.png.jpg";

const About = () => {
  return (
    <div className={style.about}> 
     <h1>Aplicacion creada por Brian Ezequiel Cabrera</h1>
     <h2>No se que mas poner aca jaja</h2>
     <h3>Estoy probando cosas</h3>
     <h1> Supongo que tengo que poner una foto</h1>
     <img src={yo} alt='hola' ></img>
     <h2> Yo (De rojo) y mi primo Lucas en año nuevo.</h2>
    </div>
    )
}

export default About
