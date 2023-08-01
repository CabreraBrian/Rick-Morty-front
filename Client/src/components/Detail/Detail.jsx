import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";
import videoBg from "../assets/videoBg.mp4";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className={style.contenedor}>
        <div className={style.imagen}>
          <img src={character.image && character.image} alt="" />
        </div>
        <div className={style.datos}>
          <h2>{character.name && character.name}</h2>
          <h3>Status: {character.status && character.status}</h3>
          <h3>Species: {character.species && character.species}</h3>
          <h3>Gender: {character.gender && character.gender}</h3>
          <h3>Origins: {character.origin?.name && character.origin?.name}</h3>
          <Link to="/home">
          <button className={style.botonH}>Home🏠</button>
          </Link>
          <Link to="/favorites">
          <button className={style.botonH}>Favoritos❤️</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
