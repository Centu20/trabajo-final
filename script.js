function informe () {

  const nombreEnviado = document.querySelector("#primero").value;
  const telefonoEnviado = document.querySelector("#segundo").value;
  const gmailEnviado = document.querySelector("#tercero").value;
  const documentoEnviado = document.querySelector("#cuarto").value;
  const pregunta1Enviado = document.querySelector("#quinto").value;
  const pregunta2Enviado = document.querySelector("#sexto").value;
  const pregunta3Enviado = document.querySelector("#septimo").value;
  const pregunta4Enviado = document.querySelector("#octavo").value;
  const pregunta5Enviado = document.querySelector("#noveno").value;
  const pregunta6Enviado = document.querySelector("#decimo").value;
  const pregunta7Enviado = document.querySelector("#onceavo").value;
  const curriculumEnviado = document.querySelector("#curriculum").value;
  const videoEnviado = document.querySelector("#video").value;

  
  const candidatos = JSON.parse(localStorage.getItem("candidatos")) || [];


  candidatos.push({
    nombre: nombreEnviado,
    telefono: telefonoEnviado,
    gmail: gmailEnviado,
    documento: documentoEnviado,
    pregunta1: pregunta1Enviado,
    pregunta2: pregunta2Enviado,
    pregunta3: pregunta3Enviado,
    pregunta4: pregunta4Enviado,
    pregunta5: pregunta5Enviado,
    pregunta6: pregunta6Enviado,
    pregunta7: pregunta7Enviado,
    curriculum: curriculumEnviado,
    video: videoEnviado,
  });

  localStorage.setItem("candidatos", JSON.stringify(candidatos));
}