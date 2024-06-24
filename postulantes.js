function postulantes() {

    const olpostulantes = document.querySelector("#info-de-postulantes")
    const postulantes = JSON.parse(localStorage.getItem("candidatos")) || [];



    postulantes.forEach(postulante => {
        olpostulantes.innerHTML+=`
           <li class="postulante">
               <ul>
                   <li>
                     ${postulante.nombre}
                   </li>

                   <li>
                     ${postulante.telefono}
                   </li>

                   <li>
                     ${postulante.gmail}
                   </li>
                  
                   <li>
                     ${postulante.documento}
                   </li>

                   <li>
                     ${postulante.pregunta1}
                   </li>

                   <li>
                     ${postulante.pregunta2}
                   </li>

                   <li>
                     ${postulantepregunta3}
                   </li>

                   <li>
                     ${postulante.pregunta4}
                   </li>

                   <li>
                     ${postulante.pregunta5}
                   </li>

                   <li>
                     ${postulante.pregunta6}
                   </li>

                   <li>
                     ${postulante.pregunta7}
                   </li>

                   <li>
                     ${postulante.curriculum}
                   </li>

                   <li>
                     ${postulante.video}
                   </li>
               </ul>
           </li>
        `;
    });
}


postulantes();