export default function Die(props) {

    const handleHeldStyle = { backgroundColor: props.diceObject.isHeld ? "#59E391" : "white" }

    return (
        <button 
        style={handleHeldStyle}
        onClick={ () => props.holdDice(props.diceObject.id)}>{props.diceObject.value}</button>
    )
} 