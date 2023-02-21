function formataCPF() {
  documento.addEventListener("input", () => {
    documento.value = documento.value
      .replace(/(\D)/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2");
  });
}

function formataCNPJ() {
  documento.addEventListener("input", () => {
    documento.value = documento.value
      .replace(/(\D)/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
  });
}

formataCPF();

window.formataDocumento = () =>{

  select.addEventListener("change", () => {
    documento.value = "";
  
    if (select.selectedIndex === 0) {
      console.log("cpf");
      documento.maxLength = 14;
      console.log(documento);
      formataCPF();
    }
    if (select.selectedIndex === 1) {
      console.log("cnpj");
      documento.maxLength = 18;
      console.log(documento);
      formataCNPJ();
    }
  
    documento.value = "";
  });
}

formataDocumento()

function formataCEP() {
  cep.addEventListener("input", () => {
    cep.value = cep.value.replace(/(\D)/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  });
}

valor.addEventListener("input", formatarMoeda);
function formatarMoeda(e) {
  let real = e.target.value.replace(/\D/g, "");
  real = (real / 100).toFixed(2) + "";
  real = real.replace(".", ",");
  real = real.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  real = real.replace(/(\d)(\d{3}),/g, "$1.$2,");
  e.target.value = real;
}


formataCEP();

