//PARTE DE APAGAR E ACENDER AS LUZES//
function acenderLuzSetaCima() {
          trianguloCima.classList.remove('triangulo-cima-apagado')
          trianguloCima.classList.add('triangulo-cima-aceso')
}

function apagarLuzSetaCima() {
          trianguloCima.classList.remove('triangulo-cima-aceso')
          trianguloCima.classList.add('triangulo-cima-apagado')
}

function acenderLuzSetaDireita() {
          trianguloDireita.classList.remove('triangulo-direita-apagado')
          trianguloDireita.classList.add('triangulo-direita-aceso')
}

function apagarLuzSetaDireita() {
          trianguloDireita.classList.remove('triangulo-direita-aceso')
          trianguloDireita.classList.add('triangulo-direita-apagado')
}

function acenderLuzSetaBaixo() {
          trianguloBaixo.classList.remove('triangulo-baixo-apagado')
          trianguloBaixo.classList.add('triangulo-baixo-aceso')
}

function apagarLuzSetaBaixo() {
          trianguloBaixo.classList.remove('triangulo-baixo-aceso')
          trianguloBaixo.classList.add('triangulo-baixo-apagado')
}

function acenderLuzSetaEsquerda() {
          trianguloEsquerda.classList.remove('triangulo-esquerda-apagado')
          trianguloEsquerda.classList.add('triangulo-esquerda-aceso')
}

function apagarLuzSetaEsquerda() {
          trianguloEsquerda.classList.remove('triangulo-esquerda-aceso')
          trianguloEsquerda.classList.add('triangulo-esquerda-apagado')
}