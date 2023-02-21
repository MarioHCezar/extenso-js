async function buscaCep(numeroCep) {
  try {
    let retornaCep = await fetch(`https://viacep.com.br/ws/${numeroCep}/json/`);
    let cepJSON = await retornaCep.json();
    if (cepJSON.error) {
      throw Error("CEP não encontrado.");
    } else {
      endereco.value = cepJSON.logradouro;
      bairro.value = cepJSON.bairro;
      cidade.value = cepJSON.localidade;
      uf.value = cepJSON.uf;
      console.log(cepJSON.localidade);
      return cepJSON;
    }
  } catch (error) {
    console.log(`There was an error`);
  }
}

cep.addEventListener("blur", () => {
  buscaCep(cep.value);
});
