#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/JavaScript-game-orange.svg)
 
O **Movimenta câmera** é um projeto simples que utilizei para implementar esse conceito de desenvolvimento de games.

![Imagem](https://github.com/DouglasAugustoJunior/MovimentaCameraJS/blob/master/_images/Game.PNG?raw=true)

 
Desenvolvido em HTML5,CSS3 e JS, ele traz uma forma para utilizar esse recurso.
 
## Interação com o usuário
 
Movimentação do personagem:
(Setas do teclado)
Cima: Up
Baixo: Down
Esquerda: Left
Direta: Right

    function keydown(event){
    var key = event.keyCode;
    switch(key){
        case 37:
            mvleft = true;
        break;
        case 38:
            mvup = true;
        break;
        case 39:
            mvright = true;
        break;
        case 40:
            mvdown = true;
        break;
    }
    }
    
    function keyup(event){
        var key = event.keyCode;
        switch(key){
            case 37:
                mvleft = false;
            break;
            case 38:
                mvup = false;
            break;
            case 39:
                mvright = false;
            break;
            case 40:
                mvdown = false;
            break;
        }
    }

 

 
##                                                                                                                                                                                                                                                                        Movimentação
 

        if (mvleft && !mvright){//se estiver pressionando para esquerda decrementa X
           char.x-=2;
       }
       if (mvright && !mvleft){//se estiver pressionando para esquerda incrementa X
           char.x+=2;
       }
       if (mvup && !mvdown){//se estiver pressionando para esquerda decrementa Y
           char.y-=2;
       } 
       if (mvdown && !mvup){//se estiver pressionando para esquerda incrementa Y
           char.y+=2;
       }
    


 
## Front-End
 
 

        ctx.save(); // salva configurações do contexto
        ctx.translate(-camera.x,-camera.y); // move o cenário para dar a impressão de movimentação da camera
       for(var i in sprites){
           var spr = sprites[i]; // atribui posiçaõ do sprite na variável, o background gamewolrd
           ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height); // desenha imagem
       }
        ctx.restore(); // restaura configurações
        ctx.font = "bold 17px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("SCORE: 0",15,30);
        ctx.fillText("RECORD: 0",200,30);

Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).