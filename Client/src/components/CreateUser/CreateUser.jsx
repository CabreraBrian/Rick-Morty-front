import style from "./CreateUser.module.css"
import { useState } from "react";
import axios from "axios"

const CreateUser = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "campo obligatorio",
        password: "campo obligatorio",
        password2: "debe coincidir con la anterior",
    });
    
    const [passwordV, setPasswordV] = useState("");

    const validateEmail = (input) => {
        input.email === ""
        ? setErrors({...errors, email:"Campo obligatorio"})
        : (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email))
        ? setErrors({...errors, email: "Formato invalido"})
        : setErrors({...errors, email: ""})
    };

    const validatePassword = (input) => {
        input.password === ""
        ? setErrors({...errors, password:"Campo obligatorio"})
        : (input.password.length < 6 || input.password.length > 15)
        ? setErrors({...errors, password:"Debe tener mínimo 6 caracteres y maximo 15"})
        : (!/\d/.test(input.password))
        ? setErrors({...errors, password:"Debe tener mínimo un número"})
        : input.password !== passwordV
        ? setErrors({...errors, password:"", password2:"Las contraseñas no coinciden"})
        : setErrors({...errors, password:"", password2:""})
    };

    const handleEmail = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        validateEmail({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handlePassword = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        validatePassword({
            ...input,
            [e.target.name]: e.target.value,
        });

    }

    const handleSecondPassword = (e) => {
        setPasswordV(e.target.value);
        (e.target.value === input.password)
        ? setErrors({...errors, password2:""})
        : setErrors({...errors, password2:"La contraseña no coincide"})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/login", input)
            console.log(response.data)
            if (response.data[1] === false)
            return alert("El usuario ya existe")
            alert("El usuario se creo exitosamente")
        } catch (error) {
            alert("error")
        }
    }

    return (
        <div className={style.contenedor}>
            <form className={style.create} onSubmit={handleSubmit}>
                <h1>Ingrese su Email</h1>
                <input name="email" type="text" placeholder="Ingrese su Email aqui..." value={input.email} onChange={handleEmail}></input>
                <p>{errors.email}</p>

                <h1>Ingrese su Contraseña</h1>
                <input name="password" type="password" placeholder="Ingrese su Contraseña aqui..." value={input.password} onChange={handlePassword}></input>
                <p>{errors.password}</p>

                <h1>Repita su Contraseña</h1>
                <input name="password2" type="password" placeholder="Repita su contraseña..." value={passwordV} onChange={handleSecondPassword}></input>
                <p>{errors.password2}</p>

                {
                    errors.email || errors.password || errors.password2
                    ? <h4>llene todos los campos para crear su usuario</h4>
                    : <button type="submit"> crear usuario</button>
                }
            </form>
        </div>
    )
}

export default CreateUser