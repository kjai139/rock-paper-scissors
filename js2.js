let playerWin = 0;
let computerWin = 0;
let tie = 0;
let roundNumber = 1
let choiceMade = false
let newQueue = false


newDiv = document.createElement('div');
newDiv.setAttribute("id", "d1");
document.body.appendChild(newDiv);
    

let image = document.createElement('img')
image.src = 'images/title.jpg'
image.setAttribute('class','titleimg')
newDiv.appendChild(image)

let outerBtnDiv = document.createElement('div')
outerBtnDiv.setAttribute('class', 'outerbtndiv')
newDiv.appendChild(outerBtnDiv)

let btnDiv = document.createElement('div')
btnDiv.setAttribute('class', 'btndiv')
outerBtnDiv.appendChild(btnDiv)
outerBtnDiv.style.justifyContent = 'center';

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
    btnDiv.textContent =''
    roundNumber = 1
    playerWin = 0
    computerWin = 0
    


    let startTextBox = document.createElement('div')
    startTextBox.classList.add('startTxtbox')
    newDiv.insertBefore(startTextBox, outerBtnDiv)

    let startText = document.createElement('span')
    startText.textContent = `Round ${roundNumber}! Make your choice!`
    startTextBox.appendChild(startText)

    btn1 = document.createElement('button')
    btn1.setAttribute('id', 'rock')
    btn1.classList.add('rockbtn1')
    btn1.classList.add('buttons')
    btnDiv.appendChild(btn1)
    
    btn2 = document.createElement('button')
    btn2.setAttribute('id','paper')
    btn2.classList.add('paperbtn1')
    btn2.classList.add('buttons')
    btnDiv.appendChild(btn2)


    btn3 = document.createElement('button')
    btn3.setAttribute('id', 'scissor')
    btn3.classList.add('scissorbtn1')
    btn3.classList.add('buttons')
    btnDiv.appendChild(btn3)

    allButtons = document.querySelectorAll('button')
    console.log(allButtons)
    BtnArrays = Array.from(allButtons)
    console.log(BtnArrays)

    let resultDiv = document.createElement('div')
    resultDiv.setAttribute('class', 'resultDiv')
    outerBtnDiv.insertBefore(resultDiv, btnDiv)

    let resultCpuDiv = document.createElement('div')
    resultCpuDiv.setAttribute('class','resultCpuDiv')
    outerBtnDiv.appendChild(resultCpuDiv)

    let resultPlayerText = document.createElement('span')
    resultPlayerText.setAttribute('class','resultPlayerText')
    resultDiv.appendChild(resultPlayerText)

    let resultCpuText = document.createElement('span')
    resultCpuText.setAttribute('class', 'resultCpuText')
    resultCpuDiv.appendChild(resultCpuText)

    let RoundResultBox = document.createElement('div')
    RoundResultBox.setAttribute('class', 'roundResultBox')
    newDiv.appendChild(RoundResultBox)
    outerBtnDiv.style.justifyContent = 'space-between'

    let EndResultSpan = document.createElement('span')
    EndResultSpan.setAttribute('class', 'endResultSpan')  
    RoundResultBox.appendChild(EndResultSpan)

    let scoreKeeperTxt = document.createElement('span')
    scoreKeeperTxt.setAttribute('class', 'scorekeepertxt')
    RoundResultBox.appendChild(scoreKeeperTxt)

    let nextMatchBox = document.createElement('div')
    nextMatchBox.setAttribute('class', 'nextMatchBox')
    newDiv.insertBefore(nextMatchBox, RoundResultBox )

    let nextMatchbtn = document.createElement('button')
    nextMatchbtn.setAttribute('class','nextMatchbtn')

    let endMsg = document.createElement('h1')


    let newGameButton = document.createElement('button')
    newGameButton.setAttribute('class', 'newGameButton')
    newGameButton.textContent = 'NEW GAME'


    BtnArrays.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add(`${element.id}clicked`)
            console.log(element.id)
            btnDiv.classList.add('unclickable')
            playerSelection = element.id
            computerSelection = computerPlay()
            console.log(playerSelection, computerSelection)
            element.addEventListener('transitionend', () => {
                element.classList.remove(`${element.id}clicked`)
            })
            

            resultPlayerText.textContent = `Player used ${element.id}!`
            resultCpuText.textContent = `CPU used ${computerSelection}!`
        


            if (playerSelection == computerSelection) {
                EndResultSpan.textContent = `Tie! Both used ${playerSelection}`
                tie+=1

            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                EndResultSpan.textContent =`You lose! Paper beats rock!`
                computerWin+=1
            } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
                EndResultSpan.textContent =`You win! Rock beats scissor!`
                playerWin+=1
            } else if (playerSelection =='scissor' && computerSelection =='rock') {
                EndResultSpan.textContent =`You lose! Rock beats scissor!`
                computerWin+=1
            } else if (playerSelection =='scissor' && computerSelection =='paper') {
                EndResultSpan.textContent =`You win! Scissor beats paper`
                playerWin+=1
            } else if (playerSelection =='paper' && computerSelection =='rock') {
                EndResultSpan.textContent =`You win! Paper beats rock!`
                playerWin+=1
            } else if (playerSelection =='paper' && computerSelection =='scissor') {
                EndResultSpan.textContent =`You lose! Scissor beats paper!`
                computerWin+=1
            }
            scoreKeeperTxt.textContent = `Player:${playerWin} wins || Computer:${computerWin} wins || Ties: ${tie}`
        
            if (roundNumber <= 5) {
                nextMatchBox.appendChild(nextMatchbtn)
                nextMatchbtn.textContent = 'Next Round'
                roundNumber += 1
            }

            if (roundNumber > 5) {
                nextMatchbtn.textContent ='End Results'
            }



             nextMatchbtn.addEventListener('click', () => {
                    if (roundNumber == 6 || roundNumber > 5 ){
                        scoreKeeperTxt.textContent = ''
                        resultPlayerText.textContent = ''
                        resultCpuText.textContent = ''
                        EndResultSpan.textContent = ''
                        startText.textContent = ''
                        btnDiv.textContent = ''
                        if (playerWin > computerWin){
                            
                            endMsg.textContent = `YOU WIN!${playerWin}WINS VS ${computerWin}LOSSES`
                            
                        } else if (computerWin > playerWin){
                            
                            endMsg.textContent = `YOU LOSE!${playerWin}WINS VS ${computerWin}LOSSES`
                            
                        } else if (playerWin == computerWin) {
                            
                            endMsg.textContent = `DRAW!${playerWin}WINS VS ${computerWin}LOSSES AND ${tie}TIES`
                            
                        }
                        btnDiv.appendChild(endMsg)
                        newQueue = true
                        if (newQueue == true) {
                            nextMatchBox.textContent = ''
                            btnDiv.appendChild(playBtn)
                            playBtn.textContent = 'NEW GAME'
                            btnDiv.classList.remove('unclickable')
                        }

                    } else {
                        
                        btnDiv.classList.remove('unclickable')
                        console.log(roundNumber)
                        scoreKeeperTxt.textContent = ''
                        resultPlayerText.textContent = ''
                        resultCpuText.textContent = ''
                        EndResultSpan.textContent = ''
                        startText.textContent = `Round ${roundNumber}! Make your choice!`

                    } 

                    
                    

                }
                
            ) 

            })
    })





    

   


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