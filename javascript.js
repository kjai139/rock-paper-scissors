let playerWin = 0;
let computerWin = 0;
let tie = 0;

newDiv = document.createElement('div');
newDiv.setAttribute("id", "d1");
document.body.appendChild(newDiv);
    

let image = document.createElement('img')
image.src = 'images/title.jpg'
image.setAttribute('class','titleimg')
newDiv.appendChild(image)

let btnDiv = document.createElement('div')
btnDiv.setAttribute('class', 'btndiv')
newDiv.appendChild(btnDiv)

let playBtn = document.createElement('button')
playBtn.setAttribute('class', 'playbtn')
playBtn.textContent = 'PRESS TO PLAY'
btnDiv.appendChild(playBtn)

    

    
   







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
    btnDiv.removeChild(playBtn)

    let startTextBox = document.createElement('div')
    startTextBox.classList.add('startTxtbox')
    newDiv.insertBefore(startTextBox, btnDiv)

    let startText = document.createElement('span')
    startText.textContent = 'BEST OF 5, CHOOSE YOUR WEAPON!'
    startTextBox.appendChild(startText)

    btn1 = document.createElement('button')
    btn1.classList.add('rockbtn1')
    btn1.classList.add('buttons')
    btnDiv.appendChild(btn1)
    
    btn2 = document.createElement('button')
    btn2.classList.add('paperbtn1')
    btn2.classList.add('buttons')
    btnDiv.appendChild(btn2)


    btn3 = document.createElement('button')
    btn3.classList.add('scissorbtn1')
    btn3.classList.add('buttons')
    btnDiv.appendChild(btn3)

    btn1.addEventListener('click', () => {
        btn1.classList.add('clicked')
        playerSelection = 'rock'
        computerSelection = computerPlay()
        console.log(playerSelection, computerSelection)
        btn1.addEventListener('transitionend', () => {
            btn1.classList.remove('clicked')
            
        } )
    })




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




let playB = document.querySelector('.playbtn')
playB.addEventListener('click', playSingleRound)