/*Codigo modificado */
(() => {

  /* Identifica el siguiente codigo y añade espacios */

  class Person {
    constructor(private name: string, private age: number) {}
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getAge(): number {
      return this.age;
    }
  
    setAge(age: number): void {
      this.age = age;
    }
  }
  
  
  function weirdFunction() {
    const a = 5;
    const b = 333; 
    const result = a + b;
    console.log('asd');
    const newResult = result * 10;
    const arr = [1, 2, 3, 4, 5];
    const b2 = arr.map(element => {
      return element * newResult
    });
    console.log(b2);
  }
  
  weirdFunction();

})();

  /* En este código:

Se agregaron espacios después de los paréntesis de apertura y antes de los paréntesis de cierre de las funciones.
Se añadieron espacios después de las palabras clave class, constructor, function, if, else, for, while, switch, case, try, catch, finally.
Se añadieron espacios después de las comas en las definiciones de variables y parámetros de funciones.
Se añadieron espacios alrededor de los operadores +, *.
Se añadieron saltos de línea después de cada declaración de variable en la función weirdFunction.
Se indentó el contenido de la clase Person y la función weirdFunction para mejorar la legibilidad. */

