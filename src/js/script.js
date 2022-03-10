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

const chosenStartButton = document.querySelector("#start-button")
const startEvent = chosenStartButton.addEventListener('click', (event)=>{

     chosenStartButton.classList.add('display')

     const p = document.createElement('p')
     p.innerText = 'Seja bem vindo!'
     divCircle.appendChild(p)

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {
               p.innerText = 'Observe a sequencia a seguir:'
          }, 3000)

          setTimeout(() => {
               
               arrayMaquina(random)

               const eventoClickCima = trianguloCima.addEventListener('click', ()=>{
                    acenderLuzSetaCima()
                    setTimeout(() => {
                         apagarLuzSetaCima()
                    }, 600)  
                    sequenciaJogador.push(1)
               })
               
               const eventoClickDireita = trianguloDireita.addEventListener('click', ()=>{
                    acenderLuzSetaDireita()
                    setTimeout(() => {
                         apagarLuzSetaDireita()
                    }, 600) 
                    sequenciaJogador.push(2)
               })
               
               const eventoClickBaixo = trianguloBaixo.addEventListener('click', ()=>{
                    acenderLuzSetaBaixo()
                    setTimeout(() => {
                         apagarLuzSetaBaixo()
                    }, 600) 
                    sequenciaJogador.push(3)
               })
               
               const eventoClickEsquerda = trianguloEsquerda.addEventListener('click', ()=>{
                    acenderLuzSetaEsquerda()
                    setTimeout(() => {
                         apagarLuzSetaEsquerda()
                    }, 600)  
                    sequenciaJogador.push(4)
               })

          }, 3000)

     }, 3000)

})










