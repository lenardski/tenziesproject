import Die from "./components/Die"
import React from "react"
import { useState } from "react"

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice())
    
  function generateAllNewDice() {
      return new Array(10)
          .fill(0)
          .map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: true })
          )
  }
  
  function rollDices() {
      setDice(generateAllNewDice())
  }

  const diceElements = dice.map( (diceObject, index) => { return <Die key={index} diceObject={diceObject}/>})

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDices}>Roll</button>
    </main>
  )
}

