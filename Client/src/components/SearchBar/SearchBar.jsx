import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar= ({onSearch}) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSubmit = (id) => {
      onSearch(id)
      setId("")
   }

   return (
      <div className={style.contenedor}>
         <input type='search' name='input' placeholder="Insertar ID. . ." onChange={handleChange} value={id}></input>
         <button onClick={()=>{handleSubmit(id)}} className={style.searchButton}>Agregar</button>
      </div>
   );
}

export default SearchBar;