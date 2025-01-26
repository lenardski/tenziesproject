import Die from "./components/Die"
import React from "react"

function App() {

  const [diceRolls, setDiceRolls] = React.useState(generateDiceRolls())

  function generateDiceRolls() {
    return new Array(10)
      .fill(null)
      .map(() => Math.ceil(Math.random() * 6) + 1)
  }

  function generateDice() {
    return diceRolls.map((roll, index) => <Die key={index} value={roll} />)
  }

  return (
    <main>
      <div className="dice-container">
        {generateDice()}
      </div>
    </main>
  )
}

export default App
