import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import logo from "../assets/logo2.png";
import formBg from "../assets/fondoForm.png"

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (

      <div>
      <img className={style.bg} src={formBg}></img>
        <form className={style.formulario}>
          <img src={logo} alt="" />
          <div className={style.input}>
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleChange}
              value={userData.email}
              type="text"
              name="email"
            />
            {errors.e1 ? (
              <p>{errors.e1}</p>
            ) : errors.e2 ? (
              <p>{errors.e2}</p>
            ) : (
              <p>{errors.e3}</p>
            )}
          </div>

          <div className={style.input}>
            <label htmlFor="password">Password: </label>
            <input
              onChange={handleChange}
              value={userData.password}
              type="password"
              name="password"
            />
            {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
          </div>

          <button className={style.boton} onClick={handleSubmit} type="submit">
            Entrar
          </button>
        </form>
      </div>
  );
};

export default Forms;
