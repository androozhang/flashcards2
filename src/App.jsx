import './App.css';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

const App = () => {
  var [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);
  
  const handleNextCard = () => {
    setCount(Math.floor(Math.random() * 9) + 1);
    setFlip(false);
  };

  return (
    <div className="App">
      <div>
        <h2>
          Droo Quiz
        </h2>
      </div>
        
      <div>
      <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <div onClick={() => setFlip(!flip)} className='front'>
                {cards[count].question}
            </div>
            <div onClick={() => setFlip(!flip)} className='back'>
              {cards[count].answer}
            </div>
      </ReactCardFlip>
      </div>
      <button className="button" onClick={handleNextCard}>
        Next Card
      </button>
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