var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');
    
// recursos do jogo
var background = new Image();
background.src = "_images/scene.png"; // pega a imagem de fundo
var person = new Image();
person.src = "_images/monster.png"; // pega imagem do personagem

//movimentação
var mvleft = mvright = mvup = mvdown = false;

//objetos
var sprites = [];
var gameworld = {
    img: background,
    x:0,
    y:0,
    width:800,
    height:600
}; // objeto com o mundo
var char = {
    img:person,
    x:0,
    y:0,
    width:64,
    height:64
}; // objeto do personagem
var camera = {
    x:0,
    y:0,
    width:canvas.width, // camera tem a largura do canvas
    height:canvas.height,
    limiteleft: function(){
        return this.x+(this.width*0.25); // retorna o limite que o personagem pode ir sem movimentar a camera na esquerda
    },
    limiteright: function(){
        return this.x+(this.width*0.75); // retorna o limite que o personagem pode ir sem movimentar a camera na direita
    },
    limitetop: function(){
        return this.y+(this.height*0.25); // retorna o limite que o personagem pode ir sem movimentar a camera para cima
    },
    limitebottom: function(){
        return this.y+(this.height*0.75); // retorna o limite que o personagem pode ir sem movimentar a camera para baixo
    },
}; // objeto camera

// centraliza camera
camera.x = (gameworld.width - camera.width)/2;
camera.y = (gameworld.height - camera.height)/2;

// centraliza personagem
char.x = (gameworld.width - char.width)/2;
char.y = (gameworld.height - char.height)/2;

sprites.push(gameworld);
sprites.push(char);

//move personagem
window.addEventListener('keyup',keyup);
window.addEventListener('keydown',keydown);

function loop(){
    window.requestAnimationFrame(loop,canvas);
    update(); // atualiza
    render(); // desenha
}
    
function update(){
   // move personagem
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
    
   //Atualiza posição da camera em relação ao personagem
   if (char.x<camera.limiteleft()){ // se o personagem passar do limite na esquerda
        camera.x = char.x - (camera.width*0.25); // move a camera para esquerda
    }
   if (char.x+char.width > camera.limiteright()){ // se o personagem passar do limite na direita
        camera.x = char.x +char.width - (camera.width*0.75); // move a camera para direita
    }
   if (char.y<camera.limitetop()){ // se o personagem passar do limite na esquerda
        camera.y = char.y - (camera.height*0.25); // move a camera 25% pra esquerda
    }
   if (char.y+char.height>camera.limitebottom()){ // se o personagem passar do limite na esquerda
        camera.y = char.y + char.height - (camera.height*0.75); // move a camera 25% pra esquerda
    }
    
    // limite da camera
    if (camera.x<0){// se a camera passar do ponto 0
        camera.x=0; // posiciona camera no limite
    }
    if (camera.x+camera.width>gameworld.width){// se a camera passar do tamanho do game
        camera.x = gameworld.width - camera.width; // posiciona no limite a direita
    }
    if(camera.y<0){
        camera.y=0;
    }
    if(camera.y+camera.height>gameworld.height){
        camera.y = gameworld.height-camera.height;
    }
    
    // limite do personagem
    if (char.x<0){// se a camera passar do ponto 0
        char.x=0; // posiciona camera no limite
    }
    if (char.x+char.width>gameworld.width){// se a camera passar do tamanho do game
        char.x = gameworld.width - char.width; // posiciona no limite a direita
    }
    if(char.y<0){
        char.y=0;
    }
    if(char.y+char.height>gameworld.height){
        char.y = gameworld.height-char.height;
    }
}
    
function render(){
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
}
    
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

loop();