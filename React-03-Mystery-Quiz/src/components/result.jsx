function Result(props) {
  const percentage = Math.round(
    (props.score / props.total) * 100
  );

  return (
    <div className="result">

      <div className="result-icon">
        🏆
      </div>

      <p className="result-label">
        QUIZ COMPLETE
      </p>

      <h2>Your Performance</h2>

      <div className="final-score">
        {props.score}
        <span> / {props.total}</span>
      </div>

      <div className="percentage">
        {percentage}%
      </div>

      <div className="result-stats">

        <div>
          <strong>{props.score}</strong>
          <span>Correct</span>
        </div>

        <div>
          <strong>{props.total - props.score}</strong>
          <span>Wrong</span>
        </div>

      </div>

      <button
        className="restart-button"
        onClick={props.onRestart}
      >
        Play Again
      </button>

    </div>
  );
}

export default Result;