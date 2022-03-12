const trianguloCima = document.querySelector('.triangulo-cima')
const trianguloDireita = document.querySelector('.triangulo-direita')
const trianguloBaixo = document.querySelector('.triangulo-baixo')
const trianguloEsquerda = document.querySelector('.triangulo-esquerda')
const divCircle = document.querySelector("#circle")
const placarAtual = document.createElement('h2');
const pontuacaoLista = document.getElementById('pontuacao');
let botaoReset = document.getElementById('reset');
let chosenResetButton = document.querySelector("#reset")
chosenResetButton.classList.add('display')

let max = 4

function numeroAleatorio(max) {

     return Math.floor(Math.random() * max + 1)

}

let sequenciaMaquina = []
let sequenciaJogador = []
let quantidadeVitoria = 0;

function arrayMaquina() {
     console.log(quantidadeVitoria);
     
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

let chosenStartButton = document.querySelector("#start-button")
startButton = chosenStartButton.addEventListener('click', (event)=> {

     chosenStartButton.classList.add('display')
     p.innerText = 'Seja bem vindo!'

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {

               p.innerText = 'Observe a sequência a seguir:'

               setTimeout(() => {

                    arrayMaquina()

                    
               }, 2000)

          }, 2000)

     }, 2000) 

})




const validacao = () => {

     if(sequenciaMaquina[sequenciaJogador.length -1]  !== sequenciaJogador[sequenciaJogador.length -1]) {

          addPontuacao(quantidadeVitoria)
          p.innerText = 'Infelizmente você perdeu.'
          setTimeout(() => {
               p.classList.add('display')
               chosenResetButton.classList.remove('display')
          }, 2000)
          
          sequenciaJogador =1;
     }

     for(let contador = 0;contador < sequenciaMaquina.length; contador++){
          if( sequenciaMaquina.length == sequenciaJogador.length && sequenciaMaquina[contador] == sequenciaJogador[contador]) {
               console.log(quantidadeVitoria)
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
     }

          
          divCircle.appendChild(chosenResetButton)
          botaoReset = chosenResetButton.addEventListener('click', (event)=> {
          chosenResetButton.classList.add('display')
          p.innerText = '' ;
          p.classList.remove('display')   
          sequenciaMaquina = []
          sequenciaJogador = []
          quantidadeVitoria = 0;

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {

               p.innerText = 'Observe a sequência a seguir:'

               setTimeout(() => {

                    arrayMaquina()

                    

               }, 2000)

          }, 2000)

     }, 2000) 

})
          

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

function addPontuacaoAtual(ptAtual) {

    placarAtual.classList.add('placar_atual')
    placarAtual.innerHTML = `Pontuação Atual: ${ptAtual}`
    pontuacaoLista.appendChild(placarAtual);

}

     let primeiroLugar = 0
     let segundoLugar= 0
     let terceiroLugar = 0
function addPontuacao(qtdpontos) {

     const divPontuacao = document.getElementById('pontuacao');
     divPontuacao.innerHTML = '';
     
     const listaPontuacao = document.createElement('ol')
     listaPontuacao.classList.add('lista_pontuacao')

     const posicao1 = document.createElement('li')
     //const posicao2 = document.createElement('li')
     //const posicao3 = document.createElement('li')
     
     posicao1.innerHTML = `Ultima Pontuação: ${qtdpontos} pontos`

    // if(qtdpontos > primeiroLugar) {
    //    posicao1.innerHTML = `1º Lugar: ${qtdpontos} pontos`
    //    primeiroLugar = qtdpontos
    //}   
    //
    //else if(qtdpontos <= primeiroLugar) {
    //     posicao1.innerHTML = `1º Lugar: ${primeiroLugar} pontos`
    //}

    //else if(qtdpontos > segundoLugar && qtdpontos < primeiroLugar) {
    //     posicao2.innerText = `2º Lugar: ${qtdpontos} pontos`
    //}

    //else if(qtdpontos <= segundoLugar || qtdpontos >= primeiroLugar) {
    //    posicao2.innerHTML = `2º Lugar: ${segundoLugar} pontos`
    //}

    //else if(qtdpontos > terceiroLugar && qtdpontos < segundoLugar) {
    // posicao3.innerHTML = `3º Lugar: ${qtdpontos} pontos`
    //}

    //else if(qtdpontos <= terceiroLugar || qtdpontos >= segundoLugar) {
    // posicao3.innerHTML = `3º Lugar: ${terceiroLugar} pontos`
    //}

    //     posicao1.innerHTML = `1º Lugar: ${primeiroLugar} pontos`
    //     posicao2.innerHTML = `2º Lugar: ${segundoLugar} pontos`
    //     posicao3.innerHTML = `3º Lugar: ${terceiroLugar} pontos`
    //

     listaPontuacao.appendChild(posicao1)
     //listaPontuacao.appendChild(posicao2)
     //listaPontuacao.appendChild(posicao3)
     pontuacaoLista.appendChild(listaPontuacao)

}