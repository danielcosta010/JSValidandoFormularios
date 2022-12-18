let $ = document.querySelector.bind(document);
const botaoIniciarCamera = $('[data-video-botao]');
const campoCamera = $('[data-camera');
const video = $('[data-video]');
const botaoTirarFoto = $('[data-tirar-foto]');
const canvas = $('[data-video-canvas]');
const mensagem = $('[data-mensagem]');
const botaoEnviarFoto = $('[data-enviar]')

let imagemURL = '';


botaoIniciarCamera.addEventListener('click', async function() {
  const iniciarVideo = await navigator.mediaDevices
  .getUserMedia({video:true, audio: false})

  botaoIniciarCamera.style.display = 'none';
  campoCamera.style.display = 'block';

  video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener('click', function () {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  imagemURL = canvas.toDataURL('image/jpeg');

  campoCamera.style.display = 'none';
  mensagem.style.display = 'block';
})

botaoEnviarFoto.addEventListener('click', () => {
  const receberDadosExixtentes = localStorage.getItem('cadastro');
  const converteRetorno = JSON.parse(receberDadosExixtentes);

  converteRetorno.imagem = imagemURL;

  localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

  window.location.href = './abrir-conta-form-3.html'
})