 /*Codigo modificado */
 
(() => {

  /* NOMBRE CORRECTAMENTE LAS SIGUIENTES VARIABLES 
     ADEMÁS DE COMPROBAR SI USA LET O CONST,
     SE PUEDE REFACTORIZAR, ETC.
  */

  // Lista de correos electrónicos de usuarios de Meta-X

  const emailsUsuariosMetaX: Array<string> = [
    "email1@gmail.com",
    "email1@gmail.com",
    "email1@gmail.com"
  ];

  console.log(emailsUsuariosMetaX);

  // Lista de compras de un carrito
  const carritoCompras: Array<Object> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(carritoCompras);

  // Función para sumar más 3 a un número y retornarlo
  const sumarTres = (numero: number): number => {
    return numero + 3;
  }

  console.log(sumarTres(2));

  // Función para capitalizar una palabra pasada por parámetro
  // Se identa y se refactoriza para que la palabra se capitalice correctamente
  // El resultado no debería cambiar
  function capitalizar(palabra: string): string {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }

  console.log(capitalizar("capricorn"));

  // Variable que alerta en caso de que algún evento suceda
  let evento: boolean = false;

  if (evento) console.log('event');

  // Variable que se encarga de verificar si un usuario puede acceder o no
  let accesoPermitido: boolean = true;

  if (accesoPermitido) console.log('welcome');

  // Variable para hallar el promedio de 3 números
  const promedio: number = (1 + 2 + 3) / 3;

  console.log(promedio);

  // Variable que almacena el valor de PI
  let pi: number = 3.141592654;

  console.log(pi);

  // Variable que controla si un archivo es modificable 
  let archivoEditable: boolean = false;

  if (archivoEditable) console.log('edit this file?');

  // Variable para almacenar el valor de e
  const euler: number = 2.718281828;

})();

/*En este código:

Se han renombrado las variables para que sean más descriptivas y sigan las convenciones de nombres de JavaScript/TypeScript.
Se ha refactorizado la función capitalizar para capitalizar correctamente la primera letra de la palabra y convertir las demás 
letras a minúsculas.
Se ha mejorado la legibilidad y claridad del código mediante la aplicación de nombres más descriptivos y refactorización de la 
función capitalizar.*/

