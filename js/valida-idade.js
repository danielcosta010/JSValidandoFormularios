export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value.split('-'));
  //dataNascimento.setDate(dataNascimento.getDate() + 1)
  validaIdade(dataNascimento);

  console.log(validaIdade(dataNascimento));
  
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= dataMais18;
}