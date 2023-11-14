/*
  Crea una función que indique si un número es par o impar.
*/

function isEven (number) {
    return number % 2 === 0;
}


if(isEven(2)) {
    console.log('2 es par')
}

/*
  Crea una función que indique el mayor de dos números
*/

function isGreaterOutOf2 (number1, number2) {
    if (number1 > number2) {
        return (`${number1} es mayor que ${number2}`);
    } if (number1 < number2) {
        return (`${number2} es mayor que ${number1}`);
    }
    return (`${number1} es igual a ${number2}`);
}


isGreater (3, 1)

/*
  Crea una función que indique el mayor de tres números
*/

function isGreaterOutOf3 (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return (`${number1} es mayor que ${number2} y ${number3}`);
    } if (number2 > number1 && number2 > number3) {
        return (`${number2} es mayor que ${number1} y ${number3}`);
    } if (number3 > number1 && number3 > number2) {
        return (`${number3} es mayor que ${number1} y ${number2}`);
    } if (number1 === number2) {
        return (`${number1} es mayor que ${number3}`);
    }
    return (`${number2} es mayor que ${number1}`);
}


isGreaterOutOf3 (10, 18, 18)

/*
  Crea una función que, dados dos edades, te diga cuántos años hay entre ellas

   Math.abs para pasar negativos a positivos.
*/

const ageDifference = (age1, age2) => {
    return Math.abs(age1 - age2);
}


if(ageDifference(6, 9)) {
    console.log('La diferencia es de 3 años');
}

/*
 Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso, aprobado, bien, 
 notable o sobresaliente.
*/

function qualification (mark) {
    if (mark >= 0 && mark <= 10) {
        if (mark < 5) {
            return ('suspenso');
        } if (mark >= 5 && mark < 6) {
            return ('aprobado');
        } if (mark >= 6 && mark < 7) {
            return ('bien');
        } if (mark >= 7 && mark < 9) {
            return ('notable');
        }
        return ('sobresaliente')
    }
    return ('El valor introducido no es una nota válida')
}


qualification (9.5)


/*
  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/

/*
march 21 - june 20 spring
june 21 - sept 20 summer
sept 22 - dec 21 fall
dec 22 - march 20 winter
*/

function season (day, month) {
    if (month === "Marzo" && day >= 21 || month === "Abril" || month === "Mayo" || month === "Junio" & day < 20) {
        return ("Estamos en primavera")
    } if (month === "Junio" && day >= 21 || month === "Julio" || month === "Agosto" || month === "Septiembre" & day < 20) {
        return ("Estamos en verano")
    } if (month === "Septiembre" && day >= 22 || month === "Octubre" || month === "Noviembre" || month === "Diciembre" & day < 22) {
        return ("Estamos en otoño")
    }
    return ("Estamos en invierno")
}


season (1, "Septiembre")

/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/

function vehicleType (wheels, engine, hasPedals) {
    if (wheels === 4 && !hasPedals && (engine === "eléctrico" || engine === "manual")) {
        return "Este vehículo es un coche";
    } if (wheels === 2 && engine === 'gasolina' && !hasPedals) {
        return "Este vehículo es una moto";
    } if (wheels === 2 && (engine === "eléctrico" || engine === "manual") && hasPedals) {
        return "Este vehículo es una bicicleta";
    } if (wheels === 2 && (engine === "eléctrico" || engine === "manual") && !hasPedals) {
        return "Este vehículo es un patinete";        
    }
    return "Desconocido"
}

/*
  Del ejercicio anterior, hacer un objeto con esas propiedades que se pueda pasar como parámetro a esa función y dé que tipo de 
  vehículo es (hay que cambiar el código de la función para que se pueda usar un objeto).
*/

const carElectric = {
    wheels: 4,
    pedals: false,
    engine: "eléctrico"
}

const carGas = {
    wheels: 4,
    pedals: false,
    engine: "gasolina"
}

const motorcycle = {
    wheels: 2,
    pedals: false,
    engine: "gasolina"
}

const bicycleElectric = {
    wheels: 2,
    pedals: true,
    engine: "eléctrico"
}

const bicycle = {
    wheels: 2,
    pedals: true,
    engine: "manual"
}

const scooterElectric = {
    wheels: 2,
    pedals: false,
    engine: "eléctrico"
}

const scooterKick = {
    wheels: 2,
    pedals: false,
    engine: "manual"
}


function vehicleType (vehicle) {
    if (vehicle.wheels === 4 && !vehicle.pedals && (vehicle.engine === "eléctrico" || vehicle.engine === "gasolina")) {
        return "Este vehículo es un coche";
    } if (vehicle.wheels === 2 && vehicle.engine === 'gasolina' && !vehicle.pedals) {
        return "Este vehículo es una moto";
    } if (vehicle.wheels === 2 && (vehicle.engine === "eléctrico" || vehicle.engine === "manual") && vehicle.pedals) {
        return "Este vehículo es una bicicleta";
    } if (vehicle.wheels === 2 && (vehicle.engine === "eléctrico" || vehicle.engine === "manual") && !vehicle.pedals) {
        return "Este vehículo es un patinete";        
    }
    return "Desconocido"
}


vehicleType (bicycle)


CORRECCIÓN

function vehicleType2 (vehicle) {
    const wheels = vehicle.wheels;
    const hasPedals = vehicle.hasPedals;
    const engine = vehicle.engine;

    if (wheels === 4 && !hasPedals && (engine === "eléctrico" || engine === "gasolina")) {
        return "Este vehículo es un coche";
    } if (wheels === 2 && engine === 'gasolina' && !hasPedals) {
        return "Este vehículo es una moto";
    } if (wheels === 2 && (engine === "eléctrico" || engine === "manual") && hasPedals) {
        return "Este vehículo es una bicicleta";
    } if (wheels === 2 && (engine === "eléctrico" || engine === "manual") && !hasPedals) {
        return "Este vehículo es un patinete";        
    }
    return "Desconocido"
}





