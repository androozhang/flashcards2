import './App.css';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

const App = () => {
  var [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);
  const [guess, setGuess] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  
  const handleNextCard = () => {
    setCount((count + 1) % cards.length);
    setFlip(false);
    setGuess("");
    setIsAnswerCorrect(null); 
  };
  
  const handlePrevCard = () => {
    setCount((count + cards.length - 1) % cards.length);
    setFlip(false);
    setGuess('');
  };

  const handleSubmit = () => {
    if (guess.toLowerCase() === cards[count].answer.toLowerCase()) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };
  
  const submitButtonColor = isAnswerCorrect === null ? "gray" : isAnswerCorrect ? "green" : "red";
  
  return (
    <div className="App">
      <div>
        <h2>
          Droo Quiz
        </h2>
      </div>
        
      <div>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
  <div onClick={() => setFlip(!flip)} className="front">
    <div className="card-text">{cards[count].question}</div>
    <div className="card-nav">
      
    </div>
  </div>
  <div onClick={() => setFlip(!flip)} className="back">
    <div className="card-text">{cards[count].answer}</div>
    {guess.toLowerCase() === cards[count].answer.toLowerCase() ? (
      <div className="feedback correct">Correct!</div>
    ) : (
      <div className="feedback incorrect">Incorrect!</div>
    )}
    
  </div>
</ReactCardFlip>
      <div>
  <input type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
  <button className="button" style={{ backgroundColor: submitButtonColor }} onClick={handleSubmit}>
          Submit
        </button>
</div>
      </div>
      <button onClick={handlePrevCard}>Back</button>
    <button onClick={handleNextCard}>Next</button>
    </div>
  )
}

const cards = [
  {
    id: "1",
    question: "What zodiac sign am I?",
    answer: "Aquarius",
  },
  {
    id: "2",
    question: "Do I like pizza?",
    answer: "Not really",
  },
  {
    id: "3",
    question: "Favorite color",
    answer: "Blue is cool",
  },
  {
    id: "4",
    question: "Favorite time of day?",
    answer: "3:12 PM",
  },
  {
    id: "5",
    question: "Go to meat at chipotle?",
    answer: "Chicken",
  },
  {
    id: "6",
    question: "Favorite food truck?",
    answer: "Jamaican",
  },
  {
    id: "7",
    question: "What time was I born?",
    answer: "6:30 PM",
  },
  {
    id: "8",
    question: "How many siblings do I have?",
    answer: "0",
  },
  {
    id: "9",
    question: "Favorite lays chip?",
    answer: "Salt and vinegar",
  },
  {
    id: "10",
    question: "2+2?",
    answer: "4",
  }
];
export default App