// función para pintar en el label la lista de fibinacci
const pintar = () => {
  const numero = document.getElementById("numero").value;
  document.getElementById("resul").innerHTML = fibonacci(numero);
};
// se ejecuta cuando se pulsa el boton cal
document.getElementById("cal").addEventListener("click", pintar);

// función que devuelve una lista con la secuencia de fibonacci
const fibonacci = n => {
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
