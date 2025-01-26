import Die from "./components/Die"

function App() {
  return (
    <main>
      <div className="dice-container">
        <Die value={1}></Die>
        <Die value={2}></Die>
        <Die value={3}></Die>
        <Die value={4}></Die>
        <Die value={5}></Die>
        <Die value={6}></Die>
        <Die value={1}></Die>
        <Die value={1}></Die>
        <Die value={1}></Die>
        <Die value={1}></Die>
      </div>
    </main>
  )
}

export default App
