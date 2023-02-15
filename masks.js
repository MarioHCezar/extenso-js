const cpf = document.querySelector(".cpf");

input.addEventListener("keyup", formatarCPF);

function formatarCPF(e){

let valor =e.target.value.replace(/\D/g,"");

valor=valor.replace(/(\d{3})(\d)/,"$1.$2");

valor=valor.replace(/(\d{3})(\d)/,"$1.$2");

valor=valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

e.target.value = valor;
}

const valor = document.querySelector("#valor");

input.addEventListener("keyup", formatarMoeda);

function formatarMoeda(e) {
  let valor = e.target.value.replace(/\D/g, "");

  valor = (valor / 100).toFixed(2) + "";

  valor = valor.replace(".", ",");

  valor = valor.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");

  valor = valor.replace(/(\d)(\d{3}),/g, "$1.$2,");

  e.target.value = valor;
}
