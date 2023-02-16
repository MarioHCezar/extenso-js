const form = document.querySelector("form");
const botao = document.querySelector(".botao");
const pf = document.querySelector("#checkCPF");
const pj = document.querySelector("#checkCNPJ");
const select = document.querySelector("select");
// const documento = document.querySelector("#documento");

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
botao.classList.add("botao__disabled");

function checkInputs(inputs) {
  let filled = true;
  inputs.forEach(function (input) {
    if (input.value === "") {
      filled = false;
    }
  });
  return filled;

}

let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (checkInputs(inputs)) {
      botao.disabled = false;
      botao.classList.remove("botao__disabled");
    } else {
      botao.disabled = true;
botao.classList.add("botao__disabled")
    }
  });
});

botao.addEventListener("click", () => {
  nome_dec.innerText = form.nome.value;
  endereco_dec.innerText = form.endereco.value;
  documento_dec.innerText = form.documento.value;
  processo_dec.innerText = form.processo.value;
  vara_dec.innerText = form.vara.value;
  secao_dec.innerText = `${form.secao.value}, `;
  valor_dec.innerText = form.valor.value;
  let extenso = form.valor.value;
  extenso_dec.innerText = extenso.extenso(",");
  if (select.options[select.selectedIndex].value === "cpf") {
    pf.checked = true;
  } else {
    pj.checked = true;
//     documento.maxLength = 18;
  }
  local_dec.innerText = `${form.local.value}, `;
  let data = new Date(form.data.value);
  data_dec.innerText = `${data.toLocaleDateString("pt-BR", {
    timeZone: 'UTC', 
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  })}.`;
  print();
});
