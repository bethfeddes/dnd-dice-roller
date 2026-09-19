
function rollDice() {
    const sides = parseInt(document.getElementById('dieType').value, 10);
    const result = document.getElementById('diceResult')
    
    const value = Math.floor(Math.random() * sides) + 1;
    
    result.value = value;

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        rollDice();
    }
});