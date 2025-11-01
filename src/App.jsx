import { useEffect, useState } from 'react'
import { getState, sendMove, reset } from './api'
import Board from './components/Board'
import StatusBar from './components/StatusBar'

export default function App(){
  const [cells, setCells] = useState(Array(9).fill(null))
  const [next, setNext] = useState('X')
  const [winner, setWinner] = useState(null)
  const [draw, setDraw] = useState(false)
  const [loading, setLoading] = useState(true)

  async function refresh(){
    const s = await getState()
    setCells(s.cells.map(c => c === '\u0000' ? null : c))
    setNext(s.nextPlayer)
    setWinner(s.winner)
    setDraw(s.draw)
    setLoading(false)
  }

  useEffect(() => { refresh() }, [])

  async function handlePlay(i){
    if (winner || draw || cells[i]) return
    await sendMove(i, next)
    await refresh()
  }

  async function handleReset(){
    await reset();
    await refresh();
  }

  return (
    <div style={{ display:'grid', placeItems:'center', minHeight:'100vh', gap:16 }}>
      <h1>Tic‑Tac‑Toe</h1>
      {loading ? <p>Cargando…</p> : (
        <>
          <StatusBar next={next} winner={winner} draw={draw} />
          <Board cells={cells} onPlay={handlePlay} disabled={!!winner || draw} />
          <button onClick={handleReset}>Reiniciar</button>
        </>
      )}
    </div>
  )
}