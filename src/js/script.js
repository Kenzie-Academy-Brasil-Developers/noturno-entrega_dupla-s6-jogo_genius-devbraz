const trianguloCima = document.querySelector('.triangulo-cima')
const trianguloDireita = document.querySelector('.triangulo-direita')
const trianguloBaixo = document.querySelector('.triangulo-baixo')
const trianguloEsquerda = document.querySelector('.triangulo-esquerda')
const divCircle = document.querySelector("#circle")
const placarAtual = document.createElement('h2');
const pontuacaoLista = document.getElementById('pontuacao');

let max = 4

function numeroAleatorio(max) {

     return Math.floor(Math.random() * max + 1)

}

let sequenciaMaquina = []
let sequenciaJogador = []
let quantidadeVitoria = 0;

function arrayMaquina() {

     sequenciaMaquina.push(numeroAleatorio(max))

     for (let counter = 0; counter < sequenciaMaquina.length; counter++ ) {

          setTimeout(() => {

               if(sequenciaMaquina[counter] === 1 ) {

                    setTimeout(() => {
                         acenderLuzSetaCima()
                         setTimeout(() => {
                              apagarLuzSetaCima()
                         }, 500)  
                    }, 600 * counter) 

               } 

          },1000) 

          setTimeout(() => {

               if (sequenciaMaquina[counter] === 2) {

                    setTimeout(() => {
                         acenderLuzSetaDireita()
                         setTimeout(() => {
                              apagarLuzSetaDireita()
                         }, 500) 
                    }, 600 * counter)  

               }

          },1000) 

          setTimeout(() => {

               if (sequenciaMaquina[counter] === 3) {

                    setTimeout(() => {
                         acenderLuzSetaBaixo()
                         setTimeout(() => {
                              apagarLuzSetaBaixo()
                         }, 500) 
                    }, 600 * counter) 

               } 

          },1000) 

          setTimeout(() => {

               if (sequenciaMaquina[counter] === 4) {

                    setTimeout(() => {  
                         acenderLuzSetaEsquerda()
                         setTimeout(() => {
                              apagarLuzSetaEsquerda()
                         }, 500)  
                    }, 600 * counter)  

               } 

          },1000) 
 
     }  

     if (sequenciaMaquina.length === 1) {

          setTimeout(() => {

               p.innerText = 'Faça a sequência.'

          }, 2000) 
               
     }

}

const p = document.createElement('p')
divCircle.appendChild(p)

const chosenStartButton = document.querySelector("#start-button")
startButton = chosenStartButton.addEventListener('click', (event)=> {

     chosenStartButton.classList.add('display')
     p.innerText = 'Seja bem vindo!'

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {

               p.innerText = 'Observe a sequência a seguir:'

               setTimeout(() => {

                    arrayMaquina()

                    const div1 = document.getElementById('1');
                    div1.addEventListener('click', () => { 

                         sequenciaJogador.push(1)
                         acenderLuzSetaCima()
                         setTimeout(() => {
                              apagarLuzSetaCima()
                         }, 600)
                         validacao();

                    })
                    
                    const div2 = document.getElementById('2');
                    div2.addEventListener('click', () => {

                         sequenciaJogador.push(2)
                         acenderLuzSetaDireita()
                         setTimeout(() => {
                              apagarLuzSetaDireita()
                         }, 600)
                         validacao();

                    })
                    
                    const div3 = document.getElementById('3');
                    div3.addEventListener('click', () => {

                         sequenciaJogador.push(3)
                         acenderLuzSetaBaixo()
                         setTimeout(() => {
                              apagarLuzSetaBaixo()
                         }, 600) 
                         validacao();

                    })
                    
                    const div4 = document.getElementById('4');
                    div4.addEventListener('click', () => {

                         sequenciaJogador.push(4)
                         acenderLuzSetaEsquerda()
                         setTimeout(() => {
                              apagarLuzSetaEsquerda()
                         }, 600) 
                         validacao(); 

                    })

               }, 2000)

          }, 2000)

     }, 2000) 

})

const validacao = () => {

     if(sequenciaMaquina[sequenciaJogador.length -1]  !== sequenciaJogador[sequenciaJogador.length -1]) {

          addPontuacao(quantidadeVitoria)
          p.innerText = 'Infelizmente você perdeu.'
     
          // setTimeout(() => {
          //      p.innerText = ''
          //      setTimeout(() => {
          //           chosenStartButton.classList.remove('display')
          //      }, 600)
          // }, 2000)

          return true
          
     }

     if(sequenciaMaquina.length === sequenciaJogador.length) {

          quantidadeVitoria += 1
          addPontuacaoAtual(quantidadeVitoria)
          sequenciaJogador = []
          

          setTimeout(() => {

               p.innerText = 'Parabéns você acertou!.'

               setTimeout(() => {

                    p.innerText = 'Faça a nova sequência.'

                    setTimeout(() => {arrayMaquina()}, 2000) 

               }, 2000) 

          }, 2000) 
    
     }  

}

function addPontuacaoAtual(ptAtual) {

    placarAtual.classList.add('placar_atual')
    placarAtual.innerHTML = `Pontuação Atual: ${ptAtual}`
    pontuacaoLista.appendChild(placarAtual);

}

function addPontuacao(qtdpontos) {

     const listaPontuacao = document.createElement('ol')
     listaPontuacao.classList.add('lista_pontuacao')

     const posicao1 = document.createElement('li')
     const posicao2 = document.createElement('li')
     const posicao3 = document.createElement('li')
     
     let primeiroLugar = 0//vale 11 pontos
     let segundoLugar= 0
     let terceiroLugar = 0

     if(qtdpontos > primeiroLugar) {
         posicao1.innerHTML = `1º Lugar: ${qtdpontos} pontos`
         primeiroLugar = qtdpontos
     }
       
     if(qtdpontos <= primeiroLugar) {
          posicao1.innerHTML = `1º Lugar: ${primeiroLugar} pontos`
     }

     if(qtdpontos > segundoLugar && qtdpontos < primeiroLugar) {
          posicao2.innerText = `2º Lugar: ${qtdpontos} pontos`
     }

     if(qtdpontos <= segundoLugar || qtdpontos >= primeiroLugar) {
         posicao2.innerHTML = `2º Lugar: ${segundoLugar} pontos`
     }

     if(qtdpontos > terceiroLugar && qtdpontos < segundoLugar) {
      posicao3.innerHTML = `3º Lugar: ${qtdpontos} pontos`
     }

     if(qtdpontos <= terceiroLugar || qtdpontos >= segundoLugar) {
      posicao3.innerHTML = `3º Lugar: ${terceiroLugar} pontos`
     }

     listaPontuacao.appendChild(posicao1)
     listaPontuacao.appendChild(posicao2)
     listaPontuacao.appendChild(posicao3)
     pontuacaoLista.appendChild(listaPontuacao)

}