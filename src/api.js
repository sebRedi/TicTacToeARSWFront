const API = 'http://localhost:8080/api/tictactoe';

export async function getState(){
  const res = await fetch(`${API}/state`);
  return res.json();
}

export async function sendMove(index, player){
  const res = await fetch(`${API}/move`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index, player })
  });
  return res.json();
}

export async function reset(){
  const res = await fetch(`${API}/reset`, { method: 'POST' });
  return res.json();
}