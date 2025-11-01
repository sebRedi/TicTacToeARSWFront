export default function StatusBar({ next, winner, draw }){
    let text = `Turno: ${next}`;
    if (winner) text = `Ganador: ${winner}`;
    if (draw) text = 'Empate';
    return <h2>{text}</h2>;
  }