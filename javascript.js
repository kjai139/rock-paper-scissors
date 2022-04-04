let playerWin = 0;
let computerWin = 0;
let tie = 0;
let createDiv =() =>{
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "d1");
    document.getElementsByTagName('body')[0].appendChild(newDiv);
    
   
} 




let computerPlay = () => {
    outP = Math.floor(Math.random() * (3 - 0)) + 0
    console.log(outP)
    if (outP == 0){
        outP = 'rock'
    } else if (outP == 1){
        outP = 'paper'
    } else if (outP == 2){
        outP = 'scissor'
    }
    return outP
}

let playSingleRound = (playerSelection, computerSelection) => {
    cS = computerPlay()
    pS = prompt('Please enter Rock, Paper, or Scissor')
    playerSelection = pS.toLowerCase()
    computerSelection = cS
    let br = document.createElement('br')
    

    console.log(playerSelection, computerSelection)
    if (playerSelection == computerSelection){
        console.log(`Tie! Both used ${playerSelection}`)
        node1 = document.createTextNode(`Tie! Both used ${playerSelection}`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return tie+=1
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`Winner is Computer! Paper beats rock!`)
        node1 = document.createTextNode('You lose! Paper beats rock!')
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return computerWin+=1
    } else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        console.log(`Winner is Player! Rock beats scissor`)
        node1 = document.createTextNode(`You win! Rock beats scissor`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        
        return playerWin+=1
    } else if (playerSelection =='scissor' && computerSelection =='rock'){
        console.log(`Winner is Computer! Scissor beats rock!`)
        node1 = document.createTextNode(`You lose! Scissor beats rock!`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return computerWin+=1
    } else if (playerSelection =='scissor' && computerSelection =='paper'){
        console.log(`Winner is Player! Scissor beats paper!`)
        node1 = document.createTextNode(`You win! Scissor beats paper!`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return playerWin+=1
    } else if (playerSelection =='paper' && computerSelection =='rock') {
        console.log(`Winner is Player! Paper beats rock!`)
        node1 = document.createTextNode(`You win! Paper beats rock!`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return playerWin+=1
    } else if (playerSelection =='paper' && computerSelection =='scissor') {
        console.log(`Winner is Computer! Scissor beats paper!`)
        node1 = document.createTextNode(`You lose! Scissor beats paper!`)
        document.body.appendChild(br)
        document.body.appendChild(node1)
        return computerWin+=1
    }


}

let game = () => {
    playerWin=0
    computerWin=0
    tie=0
    let br = document.createElement('br')
    let mh = document.createTextNode('=== Match History ===')
    document.body.appendChild(br)
    document.body.appendChild(mh)

    for (let rounds = 1;rounds <=5;rounds++){
        playSingleRound()
    }
    if (playerWin == computerWin) {
        console.log(`End Result: Tied at player:${playerWin}wins computer:${computerWin}wins`)
        result=(`End Result: Tied at player:${playerWin} wins computer:${computerWin}wins and ${tie} tie(s)`)
    } else if (playerWin > computerWin) {
        console.log(`End Result: Player wins at ${playerWin} vs ${computerWin}`)
        result=(`End Result: Player wins at ${playerWin} vs ${computerWin} and ${tie} ties`)
    } else if (playerWin < computerWin) {
        console.log(`End Result: Computer wins at ${computerWin} vs ${playerWin}}`)
        result=(`End Result: Computer wins with Score ${computerWin} vs ${playerWin} and ${tie} tie(s)`)
    }
    return document.getElementById('d1').textContent=result

}
createDiv()
game()


