//RPS Logic:

function rockPaperScissors() {
    const choice = prompt('Choose between rock, paper and scissors')
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = choices[Math.floor(Math.random() * 3)]
    /* try {
        if (choices.indexOf(choice)=== -1)
        throw new Error('Please try on of these options') 
    }
    catch(err){

    } */ 
   
    if(choice==='rock' && randomChoice==='rock'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert('it is a tie please try again')
    }else if(choice==='paper' && randomChoice==='paper'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert('it is a tie please try again')
        
    }else if(choice==='scissors' && randomChoice==='paper'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert('Congratualtions you win')
    }else if(choice==='scissors' && randomChoice==='rock'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert(`Sorry you lose`)
    }else if(choice==='paper' && randomChoice==='scissors'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert(`Sorry you lose`)
    }else if(choice==='paper' && randomChoice==='rock'){
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert('congratulations you win')
    } else if (choice === 'rock' && randomChoice === 'paper') {
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert(`sorry you lose`)
    }else if (choice === 'rock' && randomChoice === 'scissors') {
        console.log(`User Choice: ${choice} \n CPU Choice: ${choice}`)
        alert(`Congratulations you win`)
    }

}
