import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/action';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);
   const {pathname} = useLocation();

   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
      setIsFav(!isFav)
    };

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);  

   return (
      <div className={style.contenedor}>

         <div className={style.titulo}>
            
            <h1>{name}</h1>
            
            {pathname === "/home" && <button onClick={()=> {onClose(id)}} className ={style.buttonClose}>X</button>}
         
         </div>
         <Link to={`/detail/${id}`} >
         <img src={image} alt="" />
         </Link>
         <div className={style.text}>
            <h2> {species}</h2>
            {(<button className={style.corazon} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>) }
            <h2> {status}</h2>
         </div>

      </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
   return{
     myFavorites: state.myFavorites
   }
 };

export default connect(mapStateToProps,mapDispatchToProps)(Card)
