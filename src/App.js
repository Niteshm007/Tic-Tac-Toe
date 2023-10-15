import React, { useState } from 'react';
import './App.css';

const TicTacToe = () => {
  const[Board, setBoard] = useState(Array(9).fill(''))
  const[Player, setPlayer] = useState(true);
  const[Winner, setWinner] = useState(''); 


const handleClick = (index) => {
  if (Board[index] === '' && !Winner) {
  const newBoard = [...Board];
    newBoard[index] = Player ? 'X' : 'O';
    setBoard(newBoard);
    setPlayer(!Player);
    checkWinner(newBoard);
  }
};

const checkWinner = (Board) => {
  const WinningStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < WinningStates.length; i++) {
    const [a,b,c] = WinningStates[i];
    if (Board[a] && Board[a] === Board[b] && Board[a] === Board[c]){
      setWinner (Board[a]);
      return;
    }
  }

  if (Board.every((cell) => cell !== '')){
    setWinner('draw')
  }
};

const resetBoard = () => {
  setBoard(Array(9).fill(''))
  setPlayer(true);
  setWinner('');
}

return (
  <div className='TTT'>
    <h1 className='hd'>Tic Tac Toe</h1>
    <h2>Player {Player ? "X" : "O"}'s Turn</h2>
    <div className="Board">
        {Board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {Winner && (
        <div className='result'>
          {Winner === 'draw' ? (
            <h2>It's a draw!</h2>
          ) : (
            <h2>{Winner} is Winner🥇</h2>
          )}
          <button onClick={resetBoard}>Restart Game</button>
        </div>
      )}
  </div>
)};

export default TicTacToe;