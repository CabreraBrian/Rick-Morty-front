const data = (data) => {
    let  errors = {};

    if(!data.email){
        errors.e1 = 'Ingrese Email'
    }
    if(!data.email.includes('@')){
        errors.e2 = 'Email no valido';
    }
    if(data.email.length > 35){
        errors.e3 = 'Menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }
    return errors
};

export default data