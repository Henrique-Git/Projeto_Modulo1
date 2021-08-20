function jonathan_condicao1(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            document.getElementsByClassName("escolha1")[0].innerHTML = "<section class='box_escolhas'><h3>ESSA NÃO FOI UMA ESTRATÉGIA MUITO SÁBIA!</h3><p>Jonathan atira com tudo o que tem na enorme bola de fogo, mas é tudo em vão. Assim que a esfera atinge o chão uma enorme explosão acontece, varrendo tudo que está ao redor, inclusive o nosso herói.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else if(pergunta == 2){
            location.replace("jonathan2.html");
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            jonathan_condicao1();
            break;
        }
    }
}

function jonathan_condicao2(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            document.getElementsByClassName("escolha2")[0].innerHTML = "<section class='box_escolhas'><h3>JONATHAN POSSUI BONS PONTOS DE RESISTÊNCIA ... SE ESQUECEU DISSO ?!</h3><p>Jonathan não tem motivação para conseguir se levantar em meio aos destroços e aguarda deitado à medida que sua vida se esvai. O homem que um dia havia sido um bravo guerreiro militar, hoje não possui mais força de vontade para continuar vivendo.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else if(pergunta == 2){
            location.replace("jonathan3.html");
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            jonathan_condicao2();
            break;
        }
    }
}

function jonathan_condicao3(){

    while(pergunta !== 1 || pergunta !== 2){
        var pergunta = prompt("\nRESPONDA COM 1 OU 2");

        if(pergunta == 1){
            document.getElementsByClassName("escolha3")[0].innerHTML = "<section class='box_escolhas'><h3>VOCÊ DEVERIA TER MAIS EMPATIA COM OS OUTROS ...</h3><p>Jonathan deixa o rapaz para trás e segue seu caminho, mas poucos metros a frente o chão se abre novamente engolindo nosso herói.</p> <p class='game_over'>GAME OVER!!!</p><a href='../index.html'><button class='botao_resp'>RECOMEÇAR</button></a></section>"
            break;
        }
        else if(pergunta == 2){
            location.replace("jonathan4.html");
            break;
        }
        else{
            alert("Resposta Inválida, sua resposta deve ser 1 ou 2!");
            jonathan_condicao3();
            break;
        }
    }
}

