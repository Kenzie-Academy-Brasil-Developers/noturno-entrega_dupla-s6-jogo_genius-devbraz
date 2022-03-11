const trianguloCima = document.querySelector('.triangulo-cima')
const trianguloDireita = document.querySelector('.triangulo-direita')
const trianguloBaixo = document.querySelector('.triangulo-baixo')
const trianguloEsquerda = document.querySelector('.triangulo-esquerda')
const divCircle = document.querySelector("#circle")

let max = 4
let cima = 1
let direita = 2
let baixo = 3
let esquerda = 4

function numeroAleatorio(max) {
     return Math.floor(Math.random() * max + 1)
}

let random = numeroAleatorio(max)

let sequenciaMaquina = []
let sequenciaJogador = []
let quantidadeVitoria = 0;

function arrayMaquina(random) {

     sequenciaMaquina.push(random)

     for (let counter = 0; counter < sequenciaMaquina.length; counter++ ) {

          if(sequenciaMaquina[counter] === 1 ) {
               setTimeout(() => {
                    acenderLuzSetaCima()
                    setTimeout(() => {
                         apagarLuzSetaCima()
                    }, 600)  
               }, 600 * counter)    
          } 
          
          else if (sequenciaMaquina[counter] === 2) {
               setTimeout(() => {
                    acenderLuzSetaDireita()
                    setTimeout(() => {
                         apagarLuzSetaDireita()
                    }, 600) 
               }, 600 * counter)  
          }
          
          else if (sequenciaMaquina[counter] === 3) {
               setTimeout(() => {
                    acenderLuzSetaBaixo()
                    setTimeout(() => {
                         apagarLuzSetaBaixo()
                    }, 600) 
               }, 600 * counter) 
          } 
          else if (sequenciaMaquina[counter] === 4) {
               setTimeout(() => {  
                    acenderLuzSetaEsquerda()
                    setTimeout(() => {
                         apagarLuzSetaEsquerda()
                    }, 600)  
               }, 600 * counter)   
          }  
     }   
}

function loopPart() {

     arrayMaquina(random)

     const div1 = document.getElementById('1');
     div1.addEventListener('click', () => { 
          sequenciaJogador.push(1)
          acenderLuzSetaCima()
          setTimeout(() => {
               apagarLuzSetaCima()
          }, 600)  
         validaDerrota(sequenciaMaquina,sequenciaJogador);
         mostrarVitoria(sequenciaMaquina,sequenciaJogador)
     })
     
     const div2 = document.getElementById('2');
     div2.addEventListener('click', () => {
          sequenciaJogador.push(2)
          acenderLuzSetaDireita()
          setTimeout(() => {
               apagarLuzSetaDireita()
          }, 600) 
          validaDerrota(sequenciaMaquina,sequenciaJogador)
          mostrarVitoria(sequenciaMaquina,sequenciaJogador)
     })
     
     const div3 = document.getElementById('3');
     div3.addEventListener('click', () => {
          sequenciaJogador.push(3)
          acenderLuzSetaBaixo()
          setTimeout(() => {
               apagarLuzSetaBaixo()
          }, 600) 
          validaDerrota(sequenciaMaquina,sequenciaJogador)
          mostrarVitoria(sequenciaMaquina,sequenciaJogador)
     })
     
     const div4 = document.getElementById('4');
     div4.addEventListener('click', () => {
          sequenciaJogador.push(4)
          acenderLuzSetaEsquerda()
          setTimeout(() => {
               apagarLuzSetaEsquerda()
          }, 600)  
          validaDerrota(sequenciaMaquina,sequenciaJogador)
          mostrarVitoria(sequenciaMaquina,sequenciaJogador)
     })

}

const p = document.createElement('p')
divCircle.appendChild(p)

const chosenStartButton = document.querySelector("#start-button")
const startEvent = chosenStartButton.addEventListener('click', (event)=>{

     chosenStartButton.classList.add('display')
     p.innerText = 'Seja bem vindo!'

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {
               p.innerText = 'Observe a sequencia a seguir:'
               setTimeout(() => {
                    loopPart()
               }, 3000)
          }, 3000)
     }, 3000) 
})

function mostrarVitoria(sequenciaMaquina,sequenciaJogador) {

     if(sequenciaMaquina.length === sequenciaJogador.length){
          quantidadeVitoria += 1;
          addPontuacaoAtual(quantidadeVitoria);
          p.innerText = 'Parabéns você acertou!.' 
          loopPart()   
     }      
}


function validaDerrota(sequenciaMaquina,sequenciaJogador){

     if(sequenciaMaquina[sequenciaJogador.length -1]  !== sequenciaJogador[sequenciaJogador.length -1]){
          addPontuacao(quantidadeVitoria)
          p.innerText = 'Infelizmente você perdeu.' 
     }
}

const pontuacaoLista = document.getElementById('pontuacao');

function addPontuacaoAtual(ptAtual){
    const placarAtual = document.createElement('h2');
    placarAtual.classList.add('placar_atual');

    placarAtual.innerHTML = `Pontuação Atual: ${ptAtual}`;

    pontuacaoLista.appendChild(placarAtual);
    //*
}

function addPontuacao(qtdpontos){

    const listaPontuacao = document.createElement('ol');
    listaPontuacao.classList.add('lista_pontuacao');


    const posicao1 = document.createElement('li');
    const posicao2 = document.createElement('li');
    const posicao3 = document.createElement('li');
    
    
    let primeiroLugar = 0;//vale 11 pontos
    let segundoLugar= 0;
    let terceiroLugar = 0;

    if(qtdpontos > primeiroLugar){
        posicao1.innerHTML = `1º Lugar: ${qtdpontos} pontos`
        primeiroLugar = qtdpontos;
        console.log(primeiroLugar)
    }
   if(qtdpontos <= primeiroLugar){
       posicao1.innerHTML = `1º Lugar: ${primeiroLugar} pontos`
       console.log(primeiroLugar)
   }
   if(qtdpontos > segundoLugar && qtdpontos < primeiroLugar){
        posicao2.innerText = `2º Lugar: ${qtdpontos} pontos`
    }
   if(qtdpontos <= segundoLugar || qtdpontos >= primeiroLugar){
       posicao2.innerHTML = `2º Lugar: ${segundoLugar} pontos`
   }
   if(qtdpontos > terceiroLugar && qtdpontos < segundoLugar){
    posicao3.innerHTML = `3º Lugar: ${qtdpontos} pontos`
    }
    if(qtdpontos <= terceiroLugar || qtdpontos >= segundoLugar){
    posicao3.innerHTML = `3º Lugar: ${terceiroLugar} pontos`
    }

   listaPontuacao.appendChild(posicao1)
   listaPontuacao.appendChild(posicao2)
   listaPontuacao.appendChild(posicao3)
   pontuacaoLista.appendChild(listaPontuacao)

}










               // const eventoClickCima = trianguloCima.addEventListener('click', ()=>{
               //      acenderLuzSetaCima()
               //      setTimeout(() => {
               //           apagarLuzSetaCima()
               //      }, 600)  
               //      sequenciaJogador.push(1)
               // })
               
               // const eventoClickDireita = trianguloDireita.addEventListener('click', ()=>{
               //      acenderLuzSetaDireita()
               //      setTimeout(() => {
               //           apagarLuzSetaDireita()
               //      }, 600) 
               //      sequenciaJogador.push(2)
               // })
               
               // const eventoClickBaixo = trianguloBaixo.addEventListener('click', ()=>{
               //      acenderLuzSetaBaixo()
               //      setTimeout(() => {
               //           apagarLuzSetaBaixo()
               //      }, 600) 
               //      sequenciaJogador.push(3)
               // })
               
               // const eventoClickEsquerda = trianguloEsquerda.addEventListener('click', ()=>{
               //      acenderLuzSetaEsquerda()
               //      setTimeout(() => {
               //           apagarLuzSetaEsquerda()
               //      }, 600)  
               //      sequenciaJogador.push(4)
               // })