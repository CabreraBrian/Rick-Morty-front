import style from "./Favorites.module.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, getAllFav, orderCards } from "../../Redux/action";
import { useEffect } from "react";

const Favorites = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFav())
  },[dispatch])

  const allFavorites = useSelector((state) => state.myFavorites)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));

  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  useEffect(()=>{
    
    return ()=>{
      dispatch(filterCards("allCharacters"))
    }
  },[dispatch])

  return (
    <div>
      <div className={style.filtros}>
        <h1 className={style.etiqueta}>Orden:</h1>
        <select className= {style.filtroL} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <h1 className={style.etiqueta}>Genero:</h1>
        <select className= {style.filtroR} onChange={handleFilter}>
          <option value="allCharacters">Todos los generos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={style.contenedor}>
        {allFavorites?.map(
          ({ id, name, status, species, gender, origin, image, onClose }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Favorites;
