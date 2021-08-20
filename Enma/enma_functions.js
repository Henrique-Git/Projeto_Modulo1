
function enma_condicao1(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            document.getElementsByClassName("escolha1")[0].innerHTML = "<section class='box_escolhas'><h3>VOCÊ SE ESQUECEU QUE ENMA NÃO POSSUI MUITOS ATRIBUTOS DE FORÇA?!</h3><p>Enma se move em direção a Bruce e Wayne, se esforça ao máximo para levantar os escombros que os cobrem, mas ao fazer um movimento em falso se desequilibra, cai ao chão e acaba esmagada pelos mesmos destroços que tentara mover.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else if(pergunta == 2){
            location.replace("enma2.html");
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            enma_condicao1();
            break;
        }
    }
}

function enma_condicao2(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            location.replace("enma3.html");
            break;
        }
        else if(pergunta == 2){
            document.getElementsByClassName("escolha2")[0].innerHTML = "<section class='box_escolhas'><h3>ESSA DECISÃO NÃO FOI MUITO INTELIGENTE!</h3><p>Enma segue caminhando sem rumo definido, adentrando a noite profunda. Seus sentidos começam a enfraquecer, sua visão se enturva e ela cai ao chão, onde animais famintos se aproximam seguindo seus instintos. Enma é dilacerada sem chance de defesa.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            enma_condicao2();
            break;
        }
    }
}

function enma_condicao3(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            location.replace("enma4.html");
            break;
        }
        else if(pergunta == 2){
            document.getElementsByClassName("escolha3")[0].innerHTML = "<section class='box_escolhas'><h3>ENMA POSSUI HABILIDADES COM CRAFT... POR QUÊ NÃO UTILIZOU ?!</h3><p>Ao entrar na sala escura totalmente despreparada, um homem com um machado enferrujado pula de trás dos escombros e ataca Enma, acabando ali com a vida de nossa heroína. </p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            enma_condicao3();
            break;
        }
    }
}

function enma_condicao4(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            document.getElementsByClassName("escolha4")[0].innerHTML = "<section class='box_escolhas'><h3>ENMA É UMA MULHER INTELIGENTE, NÃO ESQUEÇA DISSO!</h3><p>Ao se aproximar para oferecer socorro ao homem, o mesmo, já enlouquecido por todo impacto sofrido até ali, segura o braço de Enma com toda a força, tira do bolso uma granada que encontrara, e sem pensar duas vezes causa uma explosão que engloba tudo em um raio de 10 metros. Enma não sobreviveu.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else if(pergunta == 2){
            location.replace("enma5.html");
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            enma_condicao4();
            break;
        }
    }
}