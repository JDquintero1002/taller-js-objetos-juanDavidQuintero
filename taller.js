// 1) Variables básicas - declarar variables

let nombre = "Juan David";
let edad = 25;
let ciudad = "Popayan";
console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);


// 2. Función con el nombre que desee 
function sumarCinco(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sumarCinco(1, 2, 3, 4, 5));

//  3. Función con parámetros

function presentar(nombre, edad) {

    pres= "Hola " + nombre + ", tienes " + edad + " años.";
    return (pres)
}
console.log(presentar("JD",25))

// 5. Crear objeto

const persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

//  6. Agregar propiedad

const persona1= {
    nombre: "Juan",
    edad: 20,
    profesion: "Desarrollador"
};

// Agregar nueva propiedad
persona1.telefono = "3001234567";

console.log(persona1);


//  7. Función con objeto  (SIN DESESTRUCTURACIÓN)

const personA = {
    nombre: "Juan",
    edad: 20,
    profesion: "Desarrollador"
};


function mostrarPersona(obj) {
    console.log(obj.nombre + " es " + obj.profesion);
}


// 8. Objeto estudiante

const estudiante = {
    nombre: "Ana",
    notas: {
        matematicas: 4.5,
        ingles: 4.0
    }
};

console.log(estudiante.notas.matematicas);
console.log(estudiante.notas.ingles);


// 9. Objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Carlos",
        edad: 30
    }
};

console.log(carro.propietario.nombre);



// 10. Función (SIN desestructuración)

function mostrarCarro(obj) {
    console.log(obj.marca + " - Propietario: " + obj.propietario.nombre);
}


// 11. Modificar propiedad

const carro2 = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Carlos",
        edad: 30
    }
};

// Modificar la edad del propietario
carro2.propietario.edad = 35;

console.log(carro2.propietario.edad);


// 12. Desestructuración

const { nombre1, profesion } = persona;
console.log(nombre1, profesion);


// 13. Desestructuración carro
const carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Carlos",
        edad: 30
    }
};

// Desestructuración
const { marca, modelo } = carro1;

console.log(marca);
console.log(modelo);


//14. Desestructuración propietario
const { propietario: { nombreProp, edadProp } } = carro;

console.log(nombreProp);
console.log(edadProp);


// 15. Parámetro desestructurado

function mostrarPersona({ nombre, edad }) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

mostrarPersona(carro.propietario);


//16. Desestructuración en función

function mostrarPropietario({ propietario: { nombre, edad } }) {
    return nombre + " tiene " + edad + " años.";
}

console.log(mostrarPropietario(carro));

//17. Renombramiento
const persona2 = {
    nombre: "Juan",
    edad: 22,
    profesion: "Programador"
};

const { nombre: nombrePersona, edad: edadPersona } = persona2;

console.log(nombrePersona);
console.log(edadPersona);

//18. Copia con spread
const copiaPersona = { ...persona, edad: 30 };

console.log(copiaPersona);
console.log(persona);


// 19. Copiar objeto anidado
const carroCopia = {
    ...carro,
    propietario: {
        ...carro.propietario,
        edad: 40
    }
};

console.log(carroCopia);
console.log(carro);

// 20. Desestructuración completa
function mostrarLibro({
    titulo,
    autor: { nombre: nombreAutor },
    editorial: { nombre: nombreEditorial }
}) {
    return titulo + " fue escrito por " + nombreAutor +
           " y publicado por " + nombreEditorial + ".";
}

const libro = {
    titulo: "JavaScript Moderno",
    autor: {
        nombre: "Juan M Pérez"
    },
    editorial: {
        nombre: "TechBooks"
    }
};

console.log(mostrarLibro(libro));