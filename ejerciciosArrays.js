/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 }
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]


let totalPrice = 0;

shoppingCart.forEach (product => {
    totalPrice += product.price * product.quantity
})


/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/
const tasks = [
    {description: 'tarea 1', completed: true},
    {description: 'tarea 2', completed: false},
    {description: 'tarea3', completed : true}
]

const tasks1 = [
    {description: 'tarea 1', status: 'pending'},
    {description: 'tarea 2', status: 'completed'},
    {description: 'tarea3', status: 'pending'}
]

const completedTasks = tasks.filter (function (task) {
    return task.completed
})

const pendingTasks = tasks.filter (function (task) {
    return !task.completed
})




/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];


const fruits = frutas.map(function(name) {
    const fromTree = ['manzana','pera','granada'].includes(name);
    return {
        name,
        fromTree
    }
})

console.log(fruits)

const fruitsAnotherWay = frutas.map (function(name){
    let fromTree = name === 'manzana ' || name === 'pera' || name === 'granada';
    return {
        name,
        fromTree
    }
})

co
/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/
const shoppingCart1 = [
	{ product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

const shoppingCartWithTaxes = shoppingCart1.map(function (item){
    return {
        ...item,
        taxes: item.price * 0.1 * item.quantity
    }
})

console.log(shoppingCartWithTaxes)


/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart2 = [
	{ product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

function removeItem(shoppingCart,productName) {
    const newShoppingCart = shoppingCart.map (function(item){
        if (item.product === productName){
            return {
                ...item,
                quantity: item.quantity -1,
            }
        }

        return item;
    });

    return newShoppingCart.filter(function (item){
        return item.quantity > 0;
    });
}



const shoppingCartLessWine= removeItem(shoppingCart2,'Red wine')
console.log(shoppingCartLessWine)








/*
   5B (CON forEach y Push). Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart3 = [
	{ product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

function removeItem(shoppingCart,productName) {
    const newShoppingCart = [];
    shoppingCart.forEach((item) => {
        if (newItem.product !== productName){
            newShoppingCart
        }
        
    });
    return newShoppingCart;
}



const shoppingCartLessWine2= removeItem(shoppingCart3,'Red wine')
console.log(shoppingCartLessWine2)







