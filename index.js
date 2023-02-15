const form = document.querySelector("form");
const botao = document.querySelector(".botao");

let nome_dec = document.querySelector(".nome");
let endereco_dec = document.querySelector(".endereco");
let documento_dec = document.querySelector(".documento");
let processo_dec = document.querySelector(".processo");
let vara_dec = document.querySelector(".vara");
let secao_dec = document.querySelector(".secao");
let valor_dec = document.querySelector(".valor");
let extenso_dec = document.querySelector(".extenso");
let local_dec = document.querySelector(".local");
let data_dec = document.querySelector(".data");


botao.addEventListener("click", (e) => {
  e.preventDefault();

  nome_dec.innerText = form.nome.value;
  endereco_dec.innerText = form.endereco.value;
  documento_dec.innerText = form.documento.value;
  processo_dec.innerText = form.processo.value;
  vara_dec.innerText = form.vara.value;
  secao_dec.innerText = form.secao.value;
  valor_dec.innerText = form.valor.value;
  let extenso = form.valor.value;
  extenso_dec.innerText = extenso.extenso(",");
  console.log(extenso_dec)
  local_dec.innerText = form.local.value;
  let data = new Date(form.data.value);
  data_dec.innerText = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });;
  print();
});
