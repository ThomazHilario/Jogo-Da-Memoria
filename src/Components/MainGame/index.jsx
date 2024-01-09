import './maingame.css'
import { GameInterface } from '../GameInterface'
import { gameStart } from '../GameInterface/engine'

export const MainGame = () => {
    return(
        <main>
            {/* Titulo da pagina */}
            <h1>Jogo da memória</h1>
            {/* button Start Game */}
            <button id='buttonStartGame' className='buttonCss' onClick={gameStart}>START GAME</button>

            {/* Interface do jogo da velha */}
            <GameInterface/>
        </main>
    )
}