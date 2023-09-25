//const pdf = require("html-pdf");
//import { pegaDADOSCrianca } from "./index.js"

//import { pegaDADOSCrianca } from ".";





      /* var page = `<!DOCTYPE html>
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
       
        
        
        
        
         */

            export const imprime = ("olá mundo");
            


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
    




            const btnImp = document.querySelector('#btn-imp');
              
        
            
        

                btnImp.addEventListener('click', ()=>{
                    const teste = `mostra: ${pegaDADOSCrianca.pegaNomeCrianca}`
                    let _nomeCrianca = pegaDADOSCrianca.pegaNomeCrianca;
                    let insereNomeCria = document.querySelector('#insereNomeCria');
                    insereNomeCria.innerHTML = _nomeCrianca;
                    

                        //window.print()
                    
                    
                
                })
            
    

              



