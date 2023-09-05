"use strict";

/* const nomeTeste = 'JOSEFA DA SILVA NASCIMENTO DOS SANTOS';
const cpfCria = 'JOAQUINA DA SILVA NASCIMENTO GOMES'
const conteudoRegistro = document.querySelector(".conteudoRegistro"); */

//console.log(conteudoRegistro);


/* function create(){

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
     
} */




//const btn = document.querySelector('#bnt');


/* function firebase1(){

    // PEGA VALORES DOS INPUT's.
let inputNameComplete = document.querySelector("#inputNameComplete").value;
        
let inputNameResp = document.querySelector("#inputNameResp").value;

// PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
let conteudoRegistro = document.querySelector(".conteudoRegistro");

// INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
let btn = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
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

return btn;
   
    
 
}; */



const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
    
    function firebase1(){
        
            // PEGA VALORES DOS INPUT's DA CRIANÇA.
let inputNameComplete = document.querySelector("#inputNameComplete").value;    
let inputCPF = document.querySelector("#inputCPF").value;
let inputDN = document.querySelector("#inputDN").value;
let inputCartaoSUS = document.querySelector("#inputCartaoSUS").value;
let inputRG = document.querySelector("#inputRG").value;
let inputContato = document.querySelector("#inputContato").value;


        
        console.log(localStorage.getItem('Nome Completo da Criança'))

const armazena = {
    nomeCompletoCrianca : inputNameComplete,
    cpfCrianca          : inputCPF,
    dataNascimento      : inputDN,
    cartaoSus           : inputCartaoSUS,
    rg                  : inputRG,
    contato             : inputContato
};
        
            localStorage.setItem('NOME_CRIANCA',armazena.nomeCompletoCrianca);
            localStorage.setItem('CPF_CRIANCA',armazena.cpfCrianca);
            localStorage.setItem('DN_CRIANCA',armazena.dataNascimento);
            localStorage.setItem('CARTAOSUS_CRIANCA',armazena.cartaoSus);
            localStorage.setItem('RG_CRIANCA',armazena.rg);
            localStorage.setItem('CONTATO_CRIANCA',armazena.contato);
   
        // FIM DA COLETA DE INPUT's DA CRIANÇA.




        // PEGA VALORES DOS INPUT's DO RESPONSÁVEL.
let inputNameResp = document.querySelector("#inputNameResp").value;       
let inputCPFResp = document.querySelector("#inputCPFResp").value;
let inputRGResp = document.querySelector("#inputRGResp").value;
let inputRua = document.querySelector("#inputRua").value;
let inputNumero = document.querySelector("#inputNumero").value;
let inputENDER = document.querySelector("#inputENDER").value;
let inputCidade = document.querySelector("#inputCidade").value;
let inputTitulo = document.querySelector("#inputTitulo").value;
let inputZona = document.querySelector("#inputZona").value;
let inputSecao = document.querySelector("#inputSecao").value;

// PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
let conteudoRegistro = document.querySelector(".conteudoRegistro");

// INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
let btn = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
<p class="namePaciente"><strong>PACIENTE: ${inputNameComplete}</strong><br>MÃE: ${inputNameResp}</p> 
    
<div class="incon-link">
<div class="link-a">    
        <a id="a-link" href="#registros" target="_blank" rel="noopener noreferrer">
            <img  href="#registros" src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
        </a>
        
        <button id="btn-imp" type="submit" onclick="imprime()">imprimir</button>
        
        
</div>
</div>`;
    
    // LIMPAR CAMPOS DO INPUT.
console.log(armazena)


    setTimeout(() => {
        document.querySelector("#inputNameComplete").value="";
        document.querySelector("#inputNameResp").value=""
    }, 100)

        
    }
    
    
    
    return firebase1()

    
})
const pegaDADOSCrianca = {
            pegaNomeCrianca: localStorage.getItem('NOME_CRIANCA'),
            //localStorage.setItem('CPF_CRIANCA',armazena.cpfCrianca);
           // localStorage.setItem('DN_CRIANCA',armazena.dataNascimento);
           //localStorage.setItem('CARTAOSUS_CRIANCA',armazena.cartaoSus);
            //localStorage.setItem('RG_CRIANCA',armazena.rg);
           // localStorage.setItem('CONTATO_CRIANCA',armazena.contato);
}

// BOTÃO PARA GERAR DOCUMENTO PDF E DISPONIBIZA PARA IMPRESSÃO
const btnImp = document.querySelector('#btn-imp');
function imprime() {
    const conteudo = document.querySelector('.registroP').innerHTML;
    const teste = `dfdf`

    let estilo = "<style>";
    estilo += "table {width: 100%; font: 25px Calibri};"
    estilo += "<strong>";
    estilo += "</strong>";
    estilo += "</style>";

    const win = window.open("", "", 'height=700, width=700');
    win.document.write('<html><head>');
    win.document.write('<title>CADASTRO DE PACIENTES ZAPT SAÚDE</title>');
    win.document.write('<h1>CADASTRO DE PACIENTES ZAPT SAÚDE</h1>');
    win.document.write('<h2>DADOS DA CRIANÇA</h2>');
    win.document.write(`NOME: ${pegaDADOSCrianca.pegaNomeCrianca}`);
    win.document.write(estilo); //Adicionando o css inline no documento
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');

    win.print()
   

    
};

 