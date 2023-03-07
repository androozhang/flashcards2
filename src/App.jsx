import './App.css';
import { useState } from 'react';
import Card from './components/Card'

const App = () => {
  const cardData = [
    {
      id: 1,
      question: "question1",
      answer: "answer1",
    },
    {
      id: 2,
      question: "question2",
      answer: "answer1",
    },
    {
      id: 3,
      question: "question3",
      answer: "answer1",
    },
    {
      id: 4,
      question: "question4",
      answer: "answer1",
    },
    {
      id: 5,
      question: "question5",
      answer: "answer1",
    
    },
    
  ]

  const nextQuestion = () => {
    setQuestionNum(Math.floor(Math.random() * cardData.length));
  }

  return (
    <div className="App">
      <h1>Flashcards</h1>
      <h2>Number of cards: {cardData.length}</h2>
      <div className="card" >
      <Card cards={cardData}/>
      </div>
      <button className='button' onClick={nextQuestion}>Next</button>
    </div>
  )
}

export default App