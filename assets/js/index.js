"use strict";

/* const nomeTeste = 'JOSEFA DA SILVA NASCIMENTO DOS SANTOS';
const cpfCria = 'JOAQUINA DA SILVA NASCIMENTO GOMES'
const conteudoRegistro = document.querySelector(".conteudoRegistro"); */

//console.log(conteudoRegistro);


function create(){

        // PEGA VALORES DOS INPUT's.
    const inputNameComplete = document.querySelector("#inputNameComplete").value;
            
    const inputNameResp = document.querySelector("#inputNameResp").value;

    // PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
    const conteudoRegistro = document.querySelector(".conteudoRegistro");

    // INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
const newNamePaciente = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
<p class="namePaciente"><strong>PACIENTE: ${inputNameComplete}</strong><br>MÃE: ${inputNameResp}</p> 

<a href="#registros" target="_blank" rel="noopener noreferrer">
    <img src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
</a>

</div>`;
    // LIMPAR CAMPOS DO INPUT.

    setTimeout(() => {
        document.querySelector("#inputNameComplete").value="";
        document.querySelector("#inputNameResp").value=""
    }, 100)
    
    return newNamePaciente;
     
}




