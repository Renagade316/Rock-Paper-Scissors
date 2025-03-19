// Setup the web page
// 
window.addEventListener('load', loadPage)
function loadPage() {
    playButton = document.querySelector('#btn')
    playButton.addEventListener('click', rpsSetup)
}

//Setup Game Stage
function rpsSetup(){
    console.log('Successful connection')
    //Game stage container
    div = document.createElement('div')
    div.id = "game-stage"
    document.body.appendChild(div)

    const header = document.createElement('h3')
    header.id = 'hi'
    div.appendChild(header)
    header.textContent = 'Rock Paper Scissors'

    const instructions = document.createElement('p')
    instructions.id = 'instructions'
    div.appendChild(instructions)
    instructions.textContent = 'Choose between Rock, Paper, and Scissors:'

    let rockImg = document.createElement('img')
    rockImg.id = "rock"
    rockImg.src = "../images/Rock-Image.jpg"
    div.appendChild(rockImg)

    let paperImg = document.createElement('img')
    paperImg.id = "paper"
    paperImg.src = "../images/Paper-Image.JPG"
    div.appendChild(paperImg)

    let scissorsImg = document.createElement('img')
    scissorsImg.id = "scissors"
    scissorsImg.src = "../images/Scissors-Image.jpeg"
    div.appendChild(scissorsImg)

    let gameLog = document.createElement('div')
    gameLog.id = 'game-log'
    div.appendChild(gameLog)

    let gameLogHeader = document.createElement('div')
    gameLogHeader.id = 'game-log-header'
    gameLog.appendChild(gameLogHeader)
    

    let gameLogTag = document.createElement('p4')
    gameLogTag.textContent = 'Game Log: '
    gameLogHeader.appendChild(gameLogTag)

    //RPS Game Logic
    rockImg = document.querySelector('#rock')
    rockImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('rock')
    })

    paperImg = document.querySelector('#paper')
    paperImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('paper')
    })

    scissorsImg = document.querySelector('#scissors')
    scissorsImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('scissors')
    })
    stopPlayingButton()
}


function rockPaperScissorsLogic(choice) {
    //Counter Setup:
    let userWinCounter = 0
    let cpuWinCounter = 0
    let tieCounter = 0

    //Tags setup to display the win count
    let pTag = document.createElement('p')
    div = document.querySelector('#game-log')
    div.appendChild(pTag)
    //pTag.textContent = 'This is a test'
    //pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`

    // Display final count after they click stop playing!!!!
    let counterTag = document.createElement('p')
    div = document.querySelector('#game-stage')
    div.appendChild(counterTag)
    

    //const choice = prompt('Choose between rock, paper and scissors')
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = choices[Math.floor(Math.random() * 3)]
 
   //Choice Logic
    if(choice==='rock' && randomChoice==='rock'){
        tieCounter+=1
        console.log(`Tie Counter: ${tieCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert('it is a tie please try again')
        

    }else if(choice==='paper' && randomChoice==='paper'){
        tieCounter+=1
        console.log(`Tie Counter: ${tieCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert('it is a tie please try again')
        

    } else if (choice==='scissors' && randomChoice==='scissors') {
        tieCounter+=1
        console.log(`Tie Counter: ${tieCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert('it is a tie please try again')
          

    }else if(choice==='scissors' && randomChoice==='paper'){
        userWinCounter+=1
        console.log(`Win Counter: ${userWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert('Congratualtions you win')
        

    }else if(choice==='scissors' && randomChoice==='rock'){
        cpuWinCounter+=1
        console.log(`Loss Counter: ${cpuWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert(`Sorry you lose`)
        

    }else if(choice==='paper' && randomChoice==='scissors'){
        cpuWinCounter+=1
        console.log(`Loss Counter: ${cpuWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert(`Sorry you lose`)
        

    }else if(choice==='paper' && randomChoice==='rock'){
        userWinCounter+=1
        console.log(`Win Counter: ${userWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert('congratulations you win')
        

    } else if (choice === 'rock' && randomChoice === 'paper') {
        cpuWinCounter+=1
        console.log(`Loss Counter: ${cpuWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert(`sorry you lose`)
        

    }else if (choice === 'rock' && randomChoice === 'scissors') {
        userWinCounter+=1
        console.log(`Win Counter: ${userWinCounter}`)
        pTag.textContent = `\n You chose: ${choice} the CPU chose: ${randomChoice}`
        //alert(`Congratulations you win`)
    } 
}

//Changes play button to stop playing
function stopPlayingButton() {
    playButton.removeEventListener('click', rpsSetup)
    playButton.textContent = 'Stop playing'
    playButton.style.height = '75px'
    playButton.style.width = '75px'
    playButton.addEventListener('click', loadingScreen)
}


function loadingScreen(){ 
    let header = document.querySelector('#hi')
    header.remove()
    
    let rockImg = document.querySelector('#rock')
    rockImg.remove()

    let p = document.querySelector('#instructions')
    p.remove()

    let paperImg = document.querySelector('#paper')
    paperImg.remove()

    let scissorsImg = document.querySelector('#scissors')
    scissorsImg.remove()

    let gameLog = document.querySelector('#game-log')
    gameLog.remove()

    let img = document.createElement('img')
    img.id = 'loadingGif'
    img.src = '../images/Rock-Paper-ScissorsGIF.gif'
    img.style.height = '100%'
    img.style.width = '100%'
    let div = document.querySelector('#game-stage')
    div.appendChild(img)

    playButton.textContent = 'Play again'
    playButton.addEventListener('click', rpsSetupAgain)
    setTimeout(5000)
    img.remove() 
}

function rpsSetupAgain(){
    console.log('Successful connection')
    div.remove()
    //Game stage container
    div = document.createElement('div')
    div.id = "game-stage"
    document.body.appendChild(div)

    const header = document.createElement('h3')
    header.id = 'hi'
    div.appendChild(header)
    header.textContent = 'Rock Paper Scissors'

    const instructions = document.createElement('p')
    instructions.id = 'instructions'
    div.appendChild(instructions)
    instructions.textContent = 'Choose between Rock, Paper, and Scissors:'

    let rockImg = document.createElement('img')
    rockImg.id = "rock"
    rockImg.src = "../images/Rock-Image.jpg"
    div.appendChild(rockImg)

    let paperImg = document.createElement('img')
    paperImg.id = "paper"
    paperImg.src = "../images/Paper-Image.JPG"
    div.appendChild(paperImg)

    let scissorsImg = document.createElement('img')
    scissorsImg.id = "scissors"
    scissorsImg.src = "../images/Scissors-Image.jpeg"
    div.appendChild(scissorsImg)

    let gameLog = document.createElement('div')
    gameLog.id = 'game-log'
    div.appendChild(gameLog)

    let gameLogHeader = document.createElement('div')
    gameLogHeader.id = 'game-log-header'
    gameLog.appendChild(gameLogHeader)
    

    let gameLogTag = document.createElement('p4')
    gameLogTag.textContent = 'Game Log: '
    gameLogHeader.appendChild(gameLogTag)

    //RPS Game Logic
    rockImg = document.querySelector('#rock')
    rockImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('rock')
    })

    paperImg = document.querySelector('#paper')
    paperImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('paper')
    })

    scissorsImg = document.querySelector('#scissors')
    scissorsImg.addEventListener('click', ()=>{
        rockPaperScissorsLogic('scissors')
    })
    stopPlayingButton()
}