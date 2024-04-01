 /*Para aplicar el principio DRY (Don't Repeat Yourself) a las funciones proporcionadas, podemos identificar patrones repetidos y 
 refactorizarlos para evitar la duplicación de código. Aquí hay algunas formas de mejorar el código:

EX - 1: Las funciones calculateOperation1 y calculateOperation2 realizan la misma secuencia de operaciones. Podemos crear una 
función genérica para calcular una operación que toma los valores y la operación como argumentos.

EX - 2: Las funciones calculateRectangleArea y calculateCircleArea realizan cálculos de área, pero con diferentes fórmulas. 
Podemos crear una función que tome la forma geométrica y sus dimensiones como argumentos para calcular el área.

Voy a aplicar estas mejoras al código:*/

(() => {

  /* APLICA DRY */

  // EX - 1
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    return sumResult * c;
  }

  // EX - 2
  function calculateArea(shape: string, ...dimensions: number[]): number {
    if (shape === 'rectangle' && dimensions.length === 2) {
      return dimensions[0] * dimensions[1];
    } else if (shape === 'circle' && dimensions.length === 1) {
      return Math.PI * dimensions[0] * dimensions[0];
    } else {
      throw new Error('Shape or dimensions are invalid.');
    }
  }

  // EX - 3
  // No es necesario aumentar código en este ejercicio

})();

 /*Con estos cambios:

La función calculateOperation ahora toma los valores y realiza la operación sin duplicar el código.
La función calculateArea toma el tipo de forma geométrica y sus dimensiones como argumentos, y calcula el área correspondiente. 
Esto evita la duplicación de código al manejar diferentes formas geométricas en una sola función.
No se necesita modificar la función validateEmail o validateUsername ya que no hay duplicación de código en ellas.*/

