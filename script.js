function EsPerfecto(n) {
  let sum = 1;

  for (let i = 2; i * i < n; i++) {
    if (n % i == 0) {
      if (i * i != n) sum = sum + i + n / i;
      else sum = sum + i;
    }
  }

  if (sum == n && n != 1) return true;
  else return false;
}

function NumerosPerfectosRango(rango) {
  for (let i = 1; i <= rango; i++) {
    if (EsPerfecto(i)) {
      let createElement = document.createElement("div");
      createElement.innerHTML = i + " es número natural perfecto";
      document.body.appendChild(createElement);
    }
  }
}

NumerosPerfectosRango(
  (rango = parseInt(
    prompt(
      "Introduce un número para saber en ese rango números perfectos existentes "
    )
  ))
);

lista = [
  {
    text: "Números naturales perfectos",
  },
];

localStorage.setItem("list", JSON.stringify(lista));
lista = JSON.parse(localStorage.getItem("list"));
lista.forEach((element) => {
  let elements = document.getElementById("elements");
  let div = document.createElement("h2");
  elements.appendChild(div);
  div.innerHTML = element.text + ": ";
});
