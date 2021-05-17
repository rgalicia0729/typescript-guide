// Aserciones de tipos
let cualquierCosa: any = 'Cualquier cosa';
let largoCosa: number = (<string>cualquierCosa).length;

console.log(largoCosa);
