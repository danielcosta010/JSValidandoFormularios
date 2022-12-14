export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value.split('-'));
  //dataNascimento.setDate(dataNascimento.getDate() + 1)
  
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity('O usuário não é maior de idade');
  }
  
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= dataMais18;
}