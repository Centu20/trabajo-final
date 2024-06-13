function postulantes() {

    const olpostulantes = document.querySelector("#info-de-postulantes")
    const postulantes = JSON.parse(localStorage.getItem("postulantes")) || [];



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
                     ${postulante.pregunta-1}
                   </li>

                   <li>
                     ${postulante.pregunta-2}
                   </li>

                   <li>
                     ${postulantepregunta-3}
                   </li>

                   <li>
                     ${postulante.pregunta-4}
                   </li>

                   <li>
                     ${postulante.pregunta-5}
                   </li>

                   <li>
                     ${postulante.pregunta-6}
                   </li>

                   <li>
                     ${postulante.pregunta-7}
                   </li>

                   <li>
                     ${postulante.curriculum}
                   </li>
               </ul>
           </li>
        `;
    });
}


postulantes();