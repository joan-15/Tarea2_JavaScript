//primer arreglo
let edades = [23, 45, 18, 30, 16];


//reduce
let sumaEdades = edades.reduce((suma, edad) => suma + edad, 0);
console.log("la suma de las edades es:", sumaEdades);


//foreach
edades.forEach(edad => console.log("Edad:", edad));


//filter
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log("Edades mayores o iguales a 18: "), mayoresDeEdad;


//map
let edadesTexto = edades.map(edad => edad + " años");
console.log("Edades como texto:", edadesTexto);


//----------------------------------------------------------------


//segundo arreglo
let animales = ["Perro", "Gato", "Caballo", "Canario"];


//reduce
let nombresConcatenados = animales.reduce((acumulador, animal) => acumulador + " " + animal);
console.log("Animales concatenados:", nombresConcatenados);


//foreach
animales.forEach(animal => console.log("Animal:", animal));


//filter
let animalesLargos = animales.filter(animal => animal.length > 4);
console.log("Animales con nombres largos:", animalesLargos);


//map
let animalesMayusculas = animales.map(animal => animal.toUpperCase());
console.log("Animales en mayúsculas:", animalesMayusculas);


//----------------------------------------------------------------


//tercer
let precios = [12.99, 99.99, 45.50, 150.0, 32.75];


//reduce
let totalPrecios = precios.reduce((total, precio) => total + precio, 0);
console.log("Total de precios:", totalPrecios);



//foreach
precios.forEach(precio => console.log("Precio:", precio));


//filter
let preciosAltos = precios.filter(precio => precio > 50);
console.log("Precios mayores a 50:", preciosAltos);


//map
let preciosConDescuento = precios.map(precio => (precio * 0.9).toFixed(2));
console.log("Precios con 10% de descuento:", preciosConDescuento);


//----------------------------------------------------------------


//cuarto arreglo
let distancias = [5, 10, 3.2, 7.5, 12];



//reduce
let distanciaTotal = distancias.reduce((total, distancia) => total + distancia, 0);
console.log("Distancia total recorrida:", distanciaTotal);


//foreach
distancias.forEach(distancia => console.log("Distancia recorrida:", distancia));


//filter
let distanciasLargas = distancias.filter(distancia => distancia > 5);
console.log("Distancias mayores a 5 km:", distanciasLargas);


//map
let distanciasMetros = distancias.map(distancia => distancia * 1000);
console.log("Distancias en metros:", distanciasMetros);


//----------------------------------------------------------------


//quinto arreglo
let calificaciones = [85, 92, 58, 74, 89];


//reduce
let promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;
console.log("Promedio de calificaciones:", promedio);



//foreach
calificaciones.forEach(calificacion => console.log("Calificación:", calificacion));


//filter
let aprobados = calificaciones.filter(calificacion => calificacion >= 60);
console.log("Calificaciones aprobatorias:", aprobados);


//map
let calificacionesEscala10 = calificaciones.map(calificacion => (calificacion / 10).toFixed(1));
console.log("Calificaciones en escala de 10:", calificacionesEscala10);