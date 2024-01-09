import './gameInterface.css'
import { clickPainel } from './engine'
export const GameInterface = () => {
    return(
        <div id="gameInterface">
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
            <button className="painel" onClick={(e) => clickPainel(e.target)} ><span className='emoji'></span></button>
        </div>
    )
}