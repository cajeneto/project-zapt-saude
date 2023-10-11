export function registerLog(){
    // PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
    let conteudoRegistro = document.querySelector(".conteudoRegistro");
    // INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
    let btn = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
    <p class="namePaciente"><strong>PACIENTE: ${inputNameComplete}</strong><br>RESPONSÁVEL: ${inputNameResp}</p> 
    <div class="incon-link">
        <div class="link-a">    
            <a id="a-link" href="./formCadastro.html" target="_blank" rel="noopener noreferrer">
                <img  src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
            </a>
            <a id="a-link" href="./formCadastro.html" target="_blank" rel="noopener noreferrer">
                <img  src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
            </a>
        </div>
    </div>`;
 }
 //registerLog();
    

              



