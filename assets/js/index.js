"use strict";



// FUNÇÃO DO BOTÃO 'CADASTRAR' INSERE TODAS INFORMAÇÕES NO LOCAL STORAGE E CRIA 'ATALHO' NO CAMPO "REGISTRO CADASTRO".
const btn = document.querySelector('#btnCadastro');

btn.addEventListener('click', () =>{ // AO CLICAR NO BOTÃO 'CADASTRAR' EXECUTA FUNÇÃO
    
    function firebase1(){ // NÃO SEI COMO ESSA FUNÇÃO PAROU AQUI (RISOS DE NERVOSO);
        


            // PEGA VALORES DOS INPUT's DA CRIANÇA.
let inputNameComplete = document.querySelector("#inputNameComplete").value;    
let inputCPF = document.querySelector("#inputCPF").value;
let inputDN = document.querySelector("#inputDN").value;
let inputCartaoSUS = document.querySelector("#inputCartaoSUS").value;
let inputRG = document.querySelector("#inputRG").value;
let inputContato = document.querySelector("#inputContato").value;


        //CIRA OBJETO PARA ARMAZENAR INFORMAÇÕES DA CRIANÇA E INSERIR NO LOCAL STORAGE

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


//CIRA OBJETO PARA ARMAZENAR INFORMAÇÕES DO RESPONSÁVEL E INSERIR NO LOCAL STORAGE

const armazenaRESP = {
    nomeCompleto_RESP   : inputNameResp,
    cpf_RESP            : inputCPFResp,
    RG_RESP             : inputRGResp,
    RUA_RESP            : inputRua,
    NUM_RESP            : inputNumero,
    BAIRRO_RESP         : inputENDER,
    CIDADE_RESP         : inputCidade,
    TITULO_RESP         : inputTitulo,
    ZONA_RESP           : inputZona,
    SECAO_RESP          : inputSecao

};
        
      localStorage.setItem('NOME_RESP',armazenaRESP.nomeCompleto_RESP);
      localStorage.setItem('CPF_RESP',armazenaRESP.cpf_RESP);
      localStorage.setItem('RG_RESP',armazenaRESP.RG_RESP);
      localStorage.setItem('RUA_RESP',armazenaRESP.RUA_RESP);
      localStorage.setItem('NUM_RESP',armazenaRESP.NUM_RESP);
      localStorage.setItem('BAIRRO_RESP',armazenaRESP.BAIRRO_RESP);
      localStorage.setItem('CIDADE_RESP',armazenaRESP.CIDADE_RESP);
      localStorage.setItem('TITULO_RESP',armazenaRESP.TITULO_RESP);
      localStorage.setItem('ZONA_RESP',armazenaRESP.ZONA_RESP);
      localStorage.setItem('SECAO_RESP',armazenaRESP.SECAO_RESP);







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
    setTimeout(() => {

        // CAMPOS CRIANÇA
            document.querySelector("#inputNameComplete").value="";    
            document.querySelector("#inputCPF").value="";
            document.querySelector("#inputDN").value="";
            document.querySelector("#inputCartaoSUS").value="";
            document.querySelector("#inputRG").value="";
            document.querySelector("#inputContato").value="";
        
        // CAMPOS RESPONSÁVEL
            document.querySelector("#inputNameResp").value="";       
            document.querySelector("#inputCPFResp").value="";
            document.querySelector("#inputRGResp").value="";
            document.querySelector("#inputRua").value="";
            document.querySelector("#inputNumero").value="";
            document.querySelector("#inputENDER").value="";
            document.querySelector("#inputCidade").value="";
            document.querySelector("#inputTitulo").value="";
            document.querySelector("#inputZona").value="";
            document.querySelector("#inputSecao").value="";
    
    }, 100) // CONTA OS MILISSEGUNDOS PARA LIMPAR OS CAMPOS  
    }
    
    
    
    return firebase1()

    
})
const pegaDADOSCrianca = {
            pegaNomeCrianca: localStorage.getItem('NOME_CRIANCA'),
            pegaCPFCrianca:  localStorage.getItem('CPF_CRIANCA'),
            pegaDNCrianca: localStorage.getItem('DN_CRIANCA'),
            pegaCartaoSUSCrianca: localStorage.getItem('CARTAOSUS_CRIANCA'),
            pegaRGCrianca: localStorage.getItem('RG_CRIANCA'),
            pegaContatoCrianca: localStorage.getItem('CONTATO_CRIANCA')
};




 
const pegaDADOSResp = {
            pegaNomeResp: localStorage.getItem('NOME_RESP'),
            pegaCPFResp:  localStorage.getItem('CPF_RESP'),
            pegaRGResp: localStorage.getItem('RG_RESP'),
            pegaRuaResp: localStorage.getItem('RUA_RESP'),
            pegaNumResp: localStorage.getItem('NUM_RESP'),
            pegaBairroResp: localStorage.getItem('BAIRRO_RESP'),
            pegaCidResp: localStorage.getItem('CIDADE_RESP'),
            pegaNUMTitulo: localStorage.getItem('NUMTITULO_RESP'),
            pegaZonaResp: localStorage.getItem('ZONA_RESP'),
            pegaSecaoResp: localStorage.getItem('SECAO_RESP')
        }



// BOTÃO PARA GERAR DOCUMENTO PDF E DISPONIBIZA PARA IMPRESSÃO
const btnImp = document.querySelector('#btn-imp');
//const imgLogo = document.querySelector('.imgLogo');
function imprime() {
    const conteudo = document.querySelector('body').innerHTML;


    let estilo = "<style>";
    estilo += "body {width: 100%; font: 20px Calibri};"
    estilo += "<strong>";
    estilo += "</strong>";
    estilo += "</style>";

    let page = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
            
            
            body {
        width: 100%;
        height: 100vh;
    }
    
    
    .conteudoPrincipal {
        display: flex;
        flex-direction: row;
        padding: 2rem;
        
    }
    
    
    .conteudoRegistro {
        display: block;
        
        padding: 0.5rem;
        border-radius: 10px;
        width: 40rem;
        overflow-y: scroll;
        height: 48rem;
    }
            
                
    
                    .mainRegistro {
                h3 {
                    font-size: x-large;
                    text-align: center;
                    padding: 1rem;
                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    
    
                }
            }
    
    
    
            .registroP {
                padding: 0.5rem;
                border-radius: 10px;
                margin: 10px;
                flex-wrap: wrap;
                display: grid;
            }
                
    
                    .link-a {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 1rem;
                        
                    }
    
    
    .imgLogo{
        display: block;
        width: 10rem;
        height: 5rem;
        border-radius: 5px;
        padding: 10px;
    }
    
    
    
    
    .dadosPessoais {
        display: grid;
        width: auto;
        margin: 0.5rem;
        padding: 0.5rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        align-content: center;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
        font-size: large;
    }
    
    p {
                    align-content: center;
                    margin-left: 20px;
                    
                }
    
    h1 {
                    text-align: center;
                    margin-top: 0.5rem;
                }
                
    
                .nameComplete {
                    display: flex;
                    flex-direction: row;
                    gap: 5px;
                    flex-wrap: wrap;
                    justify-content: space-between;          
    
         }
    
    
    .father1, .father2, .father3{
                    display: flex;
                    flex-direction: row;
                    background-color: rgba(179, 231, 201, 0.781);
                    border-radius: 10px;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 10px;
                    width: 60rem;
                    
    }
    
    h2 {
        margin-left: 20rem;
        margin-right: 10rem;
    }
    
    .imgLogo {
        width: max-content;
        height: 120px;
        margin-left: 22rem;
        
    }
    
                  
    
    
    
    
    
    
                
    
        
    
    
    
        </style>
    
    
        <title>DADOS PACIENTE</title>
        
    </head>
    <body>
        
    
    <div class="conteudoPrincipal">
        
        <div class="dadosPessoais">
                <img class="imgLogo" src="/assets/img/zapt-saude-logo.jpeg" alt="">
                <h1 class="titleSection">CADASTRO DE PACIENTE ZAPT SAÚDE</h1>
                
    
    
                <!--       INÍCIO DADOS CRIANÇA-->
                <div class="father1">
                    <h2>DADOS DA CRIANÇA</h2>
                    <div class="nameComplete">
                        
                        <div class="input">
                            <p >NOME COMPLETO: </p>
                            <p >${pegaDADOSCrianca.pegaNomeCrianca}</p>
                        </div>
                    
                        <div class="doughter">
                            <div class="cpf">
                                <p>CPF: </p>
                                <p>${pegaDADOSCrianca.pegaCPFCrianca}</p>
                                <div class="input">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>DATA DE NASCIMENTO: </p>
                                <p>${pegaDADOSCrianca.pegaDNCrianca}</p>
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>CARTÃO SUS</p>
                                <p>${pegaDADOSCrianca.pegaCartaoSUSCrianca}</p>
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>RG</p> 
                                <p>${pegaDADOSCrianca.pegaRGCrianca}</p>
                                
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>CONTATO</p>
                                <p>${pegaDADOSCrianca.pegaContatoCrianca}</p>
                                
                            </div>
                        </div>
    
                    </div>
                </div>
    
    
    
                <div class="father2">
                    <h2>DADOS DO RESPONSÁVEL</h2>
                    <div class="input">
                        <p class="nomeCompleto">NOME COMPLETO</p>
                        <p > ${pegaDADOSResp.pegaNomeResp}</p>
                    </div>
                    <div class="doughter">
                        <div class="cpf">
                            <p>CPF</p>
                            <p > ${pegaDADOSResp.pegaCPFResp}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="inputF">
                            <p>RG</p>
                            <p > ${pegaDADOSResp.pegaRGResp}</p>
                        </div>
                    </div>
                    <!-- DADOS DE ENDEREÇO -->
                    <div class="">
                        <div class="inputF">
                            <p>RUA</p>
                            <p > ${pegaDADOSResp.pegaRuaResp}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="inputF">
                            <p>NÚMERO</p>
                            <p > ${pegaDADOSResp.pegaNumResp}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="inputF">
                            <p>BAIRRO</p>
                            <p > ${pegaDADOSResp.pegaBairroResp}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="inputF">
                            <p>CIDADE</p>
                            <p > ${pegaDADOSResp.pegaCidResp}</p>
                        </div>
                    </div>
                    
                        <div class="">
                            <div class="inputF">
                                <p>Nº TÍTULO ELEITOR</p>
                                <p > ${pegaDADOSResp.pegaNUMTitulo}</p>
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>ZONA</p>
                                <p > ${pegaDADOSResp.pegaZonaResp}</p>
                            </div>
                        </div>
                        <div class="">
                            <div class="inputF">
                                <p>SEÇÃO</p>
                                <p > ${pegaDADOSResp.pegaSecaoResp}</p>
                            </div>
                        </div>
    
    
            </body>
            </html>
            `












    const win = window.open("", "", 'height=800, width=800');
    //win.document.write('<html><head>');
    win.document.write('<title>--------------- CADASTRO DE PACIENTES ZAPT SAÚDE ---------------</title>');
    //win.document.write('<img src="/assets/img/zapt-saude-logo.jpeg" alt="5555555">');
    //win.document.write('<h1>CADASTRO DE PACIENTES ZAPT SAÚDE</h1>');
    //win.document.write('<h2>DADOS DA CRIANÇA</h2>');
    //win.document.write(`NOME: ${pegaDADOSCrianca.pegaNomeCrianca}<br>`);
    //win.document.write(`CPF: ${pegaDADOSCrianca.pegaCPFCrianca}<br>`);
    //win.document.write(estilo); //Adicionando o css inline no documento
    //win.document.write('</head>');
    //win.document.write('<body>');
    win.document.write(page);
    //win.document.write('</body></html>');

    win.print()
    win.close()
   

    
};

 