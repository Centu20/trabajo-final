function informe () {

  const nombreEnviado = document.querySelector("#primero").Value;
  const telefonoEnviado = document.querySelector("#segundo").Value;
  const gmailEnviado = document.querySelector("#tercero").Value;
  const documentoEnviado = document.querySelector("#cuarto").Value;
  const pregunta1Enviado = document.querySelector("#quinto").Value;
  const pregunta2Enviado = document.querySelector("#sexto").Value;
  const pregunta3Enviado = document.querySelector("#septimo").Value;
  const pregunta4Enviado = document.querySelector("#octavo").Value;
  const pregunta5Enviado = document.querySelector("#noveno").Value;
  const pregunta6Enviado = document.querySelector("#decimo").Value;
  const pregunta7Enviado = document.querySelector("#onceavo").Value;
  const curriculumEnviado = document.querySelector("#curriculum").Value;
  const videoEnviado = document.querySelector("#video").Value;

  
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