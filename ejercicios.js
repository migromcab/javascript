/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser eléctricas o de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/

const coche1 = {
    vehiculo : 'coche eléctrico',
    ruedas : 2,
    pedales : 0,
    Motor: 'Eléctrico'
 }
 
 const coche2 = {
    vehiculo : 'coche gasolina',
    ruedas : 2,
    pedales : 0,
    Motor: 'Gasolina'
 }

 const moto1 = {
    vehiculo : 'moto gasolina',
    ruedas : 2,
    pedales: 0,
    motor: 'Gasolina'
 }
 
 const moto2 = {
    vehiculo : 'moto eléctrica',
    ruedas : 2,
    pedales : 0,
    motor: 'Eléctrico'
 }

 const bici1 = {
    vehiculo : 'bici manual',
    ruedas : 2,
    pedales : 2,
    Motor : 'Manual'
 }

 const bici2 = {
    vehiculo : 'bici eléctrica',
    ruedas : 2,
    pedales : 2,
    Motor : 'Electrica'
 }

 const patinete1 =  {
    vehiculo : 'patinete manual',
    ruedas : 2,
    pedales : 0,
    Motor : 'Manual',
 }

 const patinete2 =  {
    vehiculo : 'patinete eléctrico',
    ruedas : 2,
    pedales : 0,
    Motor : 'Eléctrico',
 }


 const tipoDeVehiculo = () =>  {
    if ( ruedas, pedales, Motor) {
        return vehiculo
    }
 }
