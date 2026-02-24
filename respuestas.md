1) Variables básicas:

    a.	¿Qué diferencia hay entre let, var y const?

        var: tiene alcance global o de función (forma antigua).

        let: tiene alcance de bloque (más seguro).

        const: no permite reasignar el valor.

    b.	¿Qué tipo de dato es edad?

        El tipo de dato es numerico.

    c.	¿Qué es una variable?

        Es un espacio en memoria donde se guarda un dato.   
    
2) Función con el nombre que desee     :

    a. ¿Qué es una función?

        Es un bloque de código que realiza una tarea específica.

   b.  ¿Qué es un return?

        Es la palabra que devuelve un resultado.

    c. ¿Qué pasa si una función no tiene return?

        Devuelve undefined.

3) 
    ¿Qué son parámetros?
        Variables que recibe la función.

    ¿Qué son argumentos?
        Los valores que enviamos a la función.

    Diferencia:
        Parámetros se definen, argumentos se envían.

5) 

    ¿Qué es un objeto en JavaScript?
        Es una estructura que permite almacenar y organizar información relacionada mediante pares clave-valor, donde cada clave representa una propiedad del objeto.

    ¿Qué es una propiedad?
        Es un dato asociado a un objeto, compuesto por un nombre (clave) y un valor. Representa una característica o atributo del objeto.

    ¿Cómo se accede a una propiedad?
        Se puede acceder usando la notación de punto (objeto.propiedad) o la notación de corchetes (objeto["propiedad"]).

6) 
    ¿Cómo se agrega?
      Usando punto y asignando valor.

    ¿Se puede modificar un const?
        Sí, se pueden modificar sus propiedades, pero no reasignarlo completo.

7) 

    ¿Por qué enviamos el objeto completo?

        Enviamos el objeto completo porque agrupa toda la información relacionada en una sola estructura, lo que permite trabajar con sus propiedades dentro de la función sin necesidad de enviar cada dato por separado.

        Además, mantiene la coherencia entre los datos que pertenecen a una misma entidad.

    Ventaja:

        La principal ventaja es que reduce la cantidad de parámetros, hace el código más limpio y escalable, y facilita futuras modificaciones.

        Si el objeto cambia (por ejemplo, se agrega una nueva propiedad), no es necesario modificar la firma de la función, ya que el objeto completo ya se está enviando.

8) 
 ¿Cómo se accede a una propiedad dentro de otro objeto?
    Con punto encadenado: obj.propiedad.subpropiedad.

9) 
    ¿Qué ocurre si la propiedad no existe?
        Devuelve undefined.

    ¿Por qué validar?
       Para evitar errores.

10) 
    ¿Qué ocurre si la propiedad no existe?
        Devuelve undefined.

    ¿Por qué validar?
     Para evitar errores.

11)     
    ¿Cómo se modifica?
        Accediendo con punto y asignando nuevo valor.

    Modificar vs Copiar:
    . Modificar cambia el original.
    . Copiar crea uno nuevo.

12) 

    ¿Qué es desestructuración?
        Extraer propiedades en variables.

    Ventaja:
        Código más limpio.

13) 

    ¿Qué pasa si el nombre de la variable no coincide con la propiedad?
        La variable quedará como undefined.

14) 

    ¿Por qué se usan llaves dentro de llaves?

        Porque estamos extrayendo propiedades de un objeto que está dentro de otro objeto.

    ¿Qué significa anidamiento en desestructuración?

        Significa extraer propiedades de objetos internos (objetos dentro de otros objetos).

15) 
    ¿Qué significa desestructurar en el parámetro?

        Significa extraer directamente las propiedades del objeto cuando la función lo recibe.
    ¿Qué ventaja tiene?

        Hace el código más limpio y evita usar punto dentro de la función.

16) 
    ¿Por qué no necesitas usar punto dentro del return?

        Porque las propiedades ya fueron extraídas como variables.

    ¿Qué ocurre si el objeto no tiene esa propiedad?

        Se genera un error porque intenta desestructurar algo que no existe.
17) 
    ¿Qué es renombramiento?
        Cambiar el nombre al desestructurar.

    ¿Cuándo es útil?
        Cuando hay variables con el mismo nombre.

18) 
    ¿Qué hace el operador spread (...)?

        Copia las propiedades de un objeto dentro de otro.

    ¿La copia es profunda o superficial?

        Es superficial (no copia objetos internos completamente).

19) 

    ¿Por qué se debe copiar también el objeto interno?

        Porque si no lo haces, ambos objetos compartirán la misma referencia interna.

    ¿Qué pasa si no lo haces?

        Se modifica también el objeto original.

20) 
     
¿Es recomendable hacer desestructuración muy larga?

    No siempre. Puede dificultar la lectura.

¿Cuándo es mejor dividirla?git st

    uando el objeto es muy grande o complejo.

¿Errores comunes?

    Desestructurar propiedades que no existen.

    Escribir mal los nombres.

    No validar que el objeto exista.