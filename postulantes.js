function infocandidatos() {

    const olcandidatos = document.querySelector("#info-del-candidato")
    const candidatos = JSON.parse(localStorage.getItem("candidatos")) || [];



    candidatos.forEach(candidato => {
        olcandidatos.innerHTML+=`
           <li class="candidato">
               <ul>
                   <li>
                     ${candidato.nombre}
                   </li>

                   <li>
                     ${candidato.telefono}
                   </li>

                   <li>
                     ${candidato.gmail}
                   </li>
                  
                   <li>
                     ${candidato.documento}
                   </li>

                   <li>
                     ${candidato.pregunta1}
                   </li>

                   <li>
                     ${candidato.pregunta2}
                   </li>

                   <li>
                     ${candidatopregunta3}
                   </li>

                   <li>
                     ${candidato.pregunta4}
                   </li>

                   <li>
                     ${candidato.pregunta5}
                   </li>

                   <li>
                     ${candidato.pregunta6}
                   </li>

                   <li>
                     ${candidato.pregunta7}
                   </li>

                   <li>
                     ${candidato.curriculum}
                   </li>

                   <li>
                     ${candidato.video}
                   </li>
               </ul>
           </li>
        `;
    });
}


infocandidatos();