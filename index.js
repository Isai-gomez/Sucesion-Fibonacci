// función para pintar en el label la lista de fibinacci
const pintar = () => {
  const numero = document.getElementById("numero").value;
  document.getElementById("resul").innerHTML = fibonaci(numero);
};
// se ejecuta cuando se pulsa el boton cal
document.getElementById("cal").addEventListener("click", pintar);

// funcion que devuelve una lista con la secuencia de fibonacci
const fibonaci = n => {
  let v1 = 0,
    v2 = 1,
    s;
  if (n === 1) {
    return [0, 1];
  } else {
    let a = [];

    for (let i = 0; i < n; i++) {
      s = v1;
      v1 = v1 + v2;
      v2 = s;

      a[i] = v2;
    }
    return a;
  }
};
//console.log(fibonaci(5));
