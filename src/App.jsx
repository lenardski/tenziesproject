import Die from "./components/Die"
import React from "react"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice())
  const [number, setNumber] = useState(randomDiceNumber())

  function randomDiceNumber() {
    return Math.ceil(Math.random() * 6)
  }
    
  function generateAllNewDice() {
      return new Array(10)
          .fill(0)
          .map(() => 
            ({ 
              value: randomDiceNumber(),
              isHeld: false,
              id: nanoid() 
            })
          )
  }
  
  function rollDices() {
    setDice( (currentDices) => {
      return currentDices.map( (dice) => {
        return !dice.isHeld ? {...dice, value: randomDiceNumber() } : dice
      })
    })
  }

  function holdDice(id) {
    setDice((currentDices) => {
      return currentDices.map((dice) => {
        return id === dice.id ? { ...dice, isHeld: !dice.isHeld } : dice
      })
    })
  }


  const diceElements = dice.map( (diceObject) => (
    <Die 
      key={diceObject.id}
      diceObject={diceObject}
      holdDice={holdDice} />
  ))

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDices}>Roll</button>
    </main>
  )
}

