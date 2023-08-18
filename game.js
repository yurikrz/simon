//JQuery
// const buttonColours = ["red", "blue", "green","yellow"]
// let gamePattern = []
// let userClickedPattern =[]
// let contKeyPress = 0
// let level = 0

// function nextSequence(){
//     let randomNumber = Math.floor(Math.random() * 4) 
//     let randomChosenColour = buttonColours[randomNumber]
//     level ++
//     gamePattern.push(randomChosenColour)
    
//     $('h1').text('Level ' + level)
//     //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//     playSound(randomChosenColour)
//     animatePress(randomChosenColour)
// }


// $('.btn').click(handleClick)

// function handleClick() {
//     if (contKeyPress !=0){
//         let userChosenColour = $(this).attr("id")
//         userClickedPattern.push(userChosenColour)
//         animatePress(userChosenColour)
//         playSound(userChosenColour)
//         checkAnswer(userClickedPattern.length-1)
//     }
//     //
// }

// function animatePress(currentColour){
//     $('#'+currentColour).toggleClass('pressed ')
//     setTimeout(function(){
//         $('#'+currentColour).toggleClass('pressed ')
//     },100)
// }

// function playSound(name){
//     let audio  = new Audio('./sounds/' + name + '.mp3')
//     audio.play()
// }

// $(document).keypress(function(Event){
//     contKeyPress ++
//     //alert(contKeyPress)
//     if (contKeyPress ===1){
//        nextSequence() 
//     }
// })

// function checkAnswer(currentLevel){
//     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
//         if (userClickedPattern.length === gamePattern.length){
//             setTimeout(function(){
//                 nextSequence()
//             },1000)
//             userClickedPattern = []
//         }
//     } else {
//         playSound('wrong')
//         $('h1').text('Game Over, Press Any Key to Restart')
//         $('body').toggleClass('game-over')
//         setTimeout(function(){
//             $('body').toggleClass('game-over')
//         },200) 
//         startOver()    
//     }
// }

// function startOver(){
//     level =0
//     gamePattern = []
//     userClickedPattern = []
//     contKeyPress = 0
// }

//JavaScrip
const buttonColours = ["red", "blue", "green","yellow"]
let gamePattern = []
let userClickedPattern =[]
let contKeyPress = 0
let level = 0

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4) 
    let randomChosenColour = buttonColours[randomNumber]
    level ++
    gamePattern.push(randomChosenColour)
    
    document.querySelector('h1').innerHTML = 'Level ' + level
    //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour)
    animatePress(randomChosenColour)
}

document.querySelectorAll('.btn').forEach(function(item){
    item.addEventListener('click',handleClick)
})


//$('.btn').click(handleClick)

function handleClick() {
    if (contKeyPress !=0){
        //let userChosenColour = $(this).attr("id")
        let userChosenColour = this.getAttribute("id")
        userClickedPattern.push(userChosenColour)
        animatePress(userChosenColour)
        playSound(userChosenColour)
        checkAnswer(userClickedPattern.length-1)
    }
}

function animatePress(currentColour){
    document.querySelector('#'+currentColour).classList.toggle('pressed')
    //$('#'+currentColour).toggleClass('pressed ')
    setTimeout(function(){
        //$('#'+currentColour).toggleClass('pressed ')
        document.querySelector('#'+currentColour).classList.toggle('pressed')
    },100)
}

function playSound(name){
    let audio  = new Audio('./sounds/' + name + '.mp3')
    audio.play()
}

$(document).keypress(function(Event){
    contKeyPress ++
    //alert(contKeyPress)
    if (contKeyPress ===1){
       nextSequence() 
    }
})

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
            userClickedPattern = []
        }
    } else {
        playSound('wrong')
        //$('h1').text('Game Over, Press Any Key to Restart')
        //$('body').toggleClass('game-over')
        document.querySelector('h1').innerHTML = 'Game Over, Press Any Key to Restart'
        document.querySelector('body').classList.toggle('game-over')
        setTimeout(function(){
            document.querySelector('body').classList.toggle('game-over')
            //$('body').toggleClass('game-over')
        },200) 
        startOver()    
    }
}

function startOver(){
    level =0
    gamePattern = []
    userClickedPattern = []
    contKeyPress = 0
}