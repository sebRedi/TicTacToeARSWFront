import Square from './Square'

export default function Board({ cells, onPlay, disabled }){
  const renderSquare = (i) => (
    <Square key={i} value={cells[i]} disabled={!!cells[i] || disabled} onClick={() => onPlay(i)} />
  )
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 96px)', gap: 8 }}>
      {Array.from({length:9}, (_,i)=>renderSquare(i))}
    </div>
  )
}