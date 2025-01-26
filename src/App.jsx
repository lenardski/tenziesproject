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
      setDice(generateAllNewDice())
      setNumber(randomDiceNumber())
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
      <h1>Tenzies</h1>
      <h2>Current Number: {number}</h2>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDices}>Roll</button>
    </main>
  )
}

