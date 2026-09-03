function AnswerOptions(props) {
  return (
    <div className="answer-options">

      <h3>Answer Options</h3>

      <button
        onClick={() => props.onAnswer(props.options[0])}
        className="answer-button"
        disabled={props.answered}
      >
        {props.options[0]}
      </button>

      <button
        onClick={() => props.onAnswer(props.options[1])}
        className="answer-button"
        disabled={props.answered}
      >
        {props.options[1]}
      </button>

      <button
        onClick={() => props.onAnswer(props.options[2])}
        className="answer-button"
        disabled={props.answered}
      >
        {props.options[2]}
      </button>

      <button
        onClick={() => props.onAnswer(props.options[3])}
        className="answer-button"
        disabled={props.answered}
      >
        {props.options[3]}
      </button>

    </div>
  );
}

export default AnswerOptions;