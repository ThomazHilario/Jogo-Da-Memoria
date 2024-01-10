import selectCard from '../../../audio/selected.mp3'
import matchsound from '../../../audio/matchsound.mp3'

// audioPlay
function audioPlay(url){
    // Instanciando o audio
    const audio = new Audio(url)

    // Alterando o volume do audio
    audio.volume = 0.1

    // Executando o audio
    audio.play()
}

// shuffle
function shuffle(array){

    // Estrutura que tera o total de array como valor, e a cada loop o valor e decrementado, e caso o i seja maior que 0, o valor do i e decrementado.
    for(let i = array.length - 1;i > 0; i--){

        // Escolhendo um emoji aleatorio
        const randomItem = Math.floor(Math.random() * array.length);

        // Trocando a posicao do emoji
        [array[i],array[randomItem]] = [array[randomItem],array[i]] 
    }

    // Retornando valor
    return array
}

// Startando game
export function gameStart(){

    // Array de emojis
    const emojis = [
        '🐺',
        '🐺',
        '🐻',
        '🐻',
        '🐼',
        '🐼',
        '🐯',
        '🐯',
        '🐬',
        '🐬',
        '🐱',
        '🐱'
    ]

    // Novo array com os valores aleátorios
    let newArray = shuffle(emojis)

    // Pegando todos os paineis
    const paineis = document.querySelectorAll('.painel')

    // Percorrendo paineis
    paineis.forEach(painel => {

        // removendo o disabled
        painel.removeAttribute('disabled')

        // Alterando o display dos spans
        painel.firstElementChild.style.display = 'none'

        // Escolhendo um emoji aleatorio do array
        const randomItemIndex = Math.floor(Math.random() * newArray.length)

        // Adicionando ao span o valor aleátorio
        painel.firstElementChild.textContent = newArray[randomItemIndex]

        // retirando o emoji do array
        newArray.splice(randomItemIndex,1)
    })

    // Alterando o display do buttonStartGame
    document.getElementById('buttonStartGame').style.display = 'none'

    // Alterando o display da gameInterface
    document.getElementById('gameInterface').style.display = 'grid'
}

// array de verificação.
const arrayVerification = []

// Array que vai contar quantos emojis foram achados.
const allEmoji = []

// clickPainel
export function clickPainel(painel){
    // Caso o total de elementos do arrayVerification seja menor que 2
    if(arrayVerification.length < 2){
        // Alterando o display do span
        painel.firstElementChild.style.display = 'block'

        // Pegando o emoji do span
        const emojiSelected = painel.firstElementChild.textContent

        // Jogando o valor para dentro do array
        arrayVerification.push(emojiSelected)

        // Alterando o rotateY para 0deg
        painel.style.webkitTransform = `rotateY(0deg)`

        // Acionando audio da carta virando
        audioPlay(selectCard)
    }

    // Lógica condicional
    if(arrayVerification.length == 2){

        if(arrayVerification[0] === arrayVerification[1]){

            // executando emojiequalemoji
            emojiequalemoji()

        }else{

            // Executando emojiDifferentEmoji
            emojiDifferentEmoji()
        }
    
    }

}

// Função que compara emojis iguais
function emojiequalemoji(){

    // capturando paineis
    const paineis = document.querySelectorAll('.painel')

    // Percorrendo Paineis
    paineis.forEach(painel => {

        //Pegando o span dentro do painel
        const painelSpan = painel.firstElementChild

        // Caso o texto contido do painel seja o mesmo do array ele ficara block
        if(painelSpan.textContent.includes(arrayVerification[0])){

            // Alterando o display do painelSpan para block 
            painelSpan.style.display = 'block'

            // Deixando o button desativado
            painel.setAttribute('disabled',false)

            // Adicionando emoji ao array de emoji
            allEmoji.push(painelSpan.textContent)
        }

        if(allEmoji.length === 12){

            // Alterando o display do buttonStartGame
            document.getElementById('buttonStartGame').style.display = 'block'

            // Alterando o display da gameInterface
            document.getElementById('gameInterface').style.display = 'none'

            // Removendo todos os emojis do allEmojis
            for(let i = 0; i < allEmoji.length; i++){
                allEmoji.splice(i)
            }

            // Alterando o rotateY dos paineis para 180deg
            paineis.forEach(painel => {
                painel.style.webkitTransform = `rotateY(180deg)`
            })
        }

    })

    // Removendo os dois emojis do array
    for(let i = 0;i <= arrayVerification.length;i++){
        arrayVerification.splice(i)
    }

    // Acionando audio de par encontrado
    audioPlay(matchsound)
}

// Função que compara emojis diferentes
function emojiDifferentEmoji(){

    // capturando paineis
    const paineis = document.querySelectorAll('.painel')

    // Percorrendo paineis
    paineis.forEach(painel => {

        // Pegando o span dentro do painel
        const painelSpan = painel.firstElementChild

        // Caso o painelSpan tenha o mesmo texto do array da posicao 0 e 1 ambos receberao display none
        if(painelSpan.textContent.includes(arrayVerification[0]) || painelSpan.textContent.includes(arrayVerification[1])){
            // Depois de meio segundo o display do span recebe none
            setTimeout(() => {
                // Adicionando rotate 180deg ao painel 
                painel.style.webkitTransform = `rotateY(180deg)`

                // Alterando o display para none
                painelSpan.style.display = 'none'
            },800)
        }
    })
    
    // Removendo os dois emojis do array
    setTimeout(() => {
        
        for(let i = 0;i <= arrayVerification.length;i++){
            arrayVerification.splice(i)
        }
    },800)
}