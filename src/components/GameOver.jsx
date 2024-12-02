export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <h3>{winner} wins!</h3>}
      {!winner && <h3>It's a draw!</h3>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
}
