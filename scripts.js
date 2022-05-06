let imgNameList = ['batman.png', 'black-widow.png', 'captain-america.png', 'hulk.png', 'spider-man.png', 'wonder-woman.png']
let timer = 10;
let timerIntervalID;
let cardArray = new Array(12)
let lastSelectedCard = null;
let moveCount = 0;
  


function flipAllCards(){
    cardArray.forEach((object) => {
        object.card.classList.toggle('flip')
    })
}

function getImageNameList(array){
    let duplicateImgName = array.concat(array);
    duplicateImgName.sort(() => Math.random() - 0.5);
    return duplicateImgName;
}

function flipMissMatchCard(card1, card2){
    card1.card.classList.toggle('flip')
    card1.flipPremission = true

    card2.card.classList.toggle('flip')
    card2.flipPremission = true
}

function isFinished(){
    for(let i=0; i<12; i++){
        if(cardArray[i].flipPremission === true)
            return false
    }
    return true
}



function prepareCards() {

    let cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";

    let imageNames = getImageNameList(imgNameList)

    for (let i=0; i<12; i++){

        let imageName = imageNames.pop()

        let gameCard = document.createElement('div')
        gameCard.classList.add('game-card')

        let frontImage = document.createElement('img')
        frontImage.classList.add('card-front', 'card-style')
        frontImage.setAttribute('src', `./img/${imageName}`)

        let backImage = document.createElement('img')
        backImage.classList.add('card-back', 'card-style')
        backImage.setAttribute('src', './img/general-assembly.png')

        gameCard.appendChild(frontImage)
        gameCard.appendChild(backImage)

        cardContainer.appendChild(gameCard)

        cardArray[i] = {
            'card': gameCard,
            'flipPremission': true,
            'name': imageName
        }


        gameCard.onclick = () => {
            let presentCard = cardArray[i]
            if(presentCard.flipPremission === true){
                presentCard.card.classList.toggle('flip')
                presentCard.flipPremission = false
                if(lastSelectedCard !== null){
                    if(lastSelectedCard.name === presentCard.name){
                        lastSelectedCard = null;
                        
                        if(isFinished === true){
                            setTimeout(() => {
                                alert('Victory')
                                clearInterval(timerIntervalID)
                            },500)
                        }
                    }else{
                        setTimeout(flipMissMatchCard, 1000, lastSelectedCard, presentCard)
                        lastSelectedCard = null;

                    }
                }else{ 
                    moveCount++;
                    lastSelectedCard = presentCard
                    
                }
                document.getElementById('move-number').innerHTML = moveCount

            }
            
            
        }
    
    }


    flipAllCards();
    setTimeout(flipAllCards, 3000);




}

function timerCountDown(){
    timer--;
    document.getElementById('timer').innerHTML = timer;

    if(timer === 0){
        if(isFinished() === true){
            alert('victory')
        }else{
            alert('Game Over')
        }

        clearInterval(timerIntervalID);
        ///// 
    }
}

window.addEventListener('load', () => {
    let playGameBtn = document.getElementById('play-game')

    playGameBtn.onclick = () => {
        timer =10
        moveCount = 0
        clearInterval(timerIntervalID)
        document.getElementById('move-number').innerHTML = moveCount
        document.getElementById('timer').innerHTML = timer
        prepareCards()

        timerIntervalID = setInterval(timerCountDown, 1000);
    }
})


// let imgNameList=['batman.png','black-widow.png','captain-america.png','hulk.png','spider-man.png','wonder-woman.png']

// let timer = 60
// let timerIntervalID;
// //make a obj of array with 12 empty item in it
// let cardArray = new Array(12)
// let lastSelectedCard = null
// let moveCount = 0 

// function flipAllcards(){
//     cardArray.forEach((object)=>{
//         object.card.classList.toggle('flip')

//     })
// }

// //this function gets the list of image arrays and duplicate it 
// function getImageNameList(array){
//     let duplicateImageName = array.concat(array)
// //shuffle the cards randomly every time the game starts
//     duplicateImageName.sort(()=> Math.random() - .5)
//     return duplicateImageName

// }

// function flipMissmatchCard(card1,card2){
//     card1.card.classList.toggle('flip')
//     card1.flipPermission = true

//     card2.card.classList.toggle('flip')
//     card2.flipPermission = true

// }

// function isFinished(){
//     for(let i=0 ; i <12 ; i++){
//         ///find one card that game is not finished
//         if(cardArray[i].flipPermission === true)
//           return false
//     }
//     return true

// }


// function checkFinished()






// function prepareCards(){
//     //Refactor my html with for loop
//     let cardContainer = document.getElementById('card-container')
//     //clear the board each time when push play game 
//     cardContainer.innerHTML = ""

//     let imageNames = getImageNameList(imgNameList)

//     for(i=0 ; i< 12 ; i++){

//         let gameCard = document.createElement('div')
//         gameCard.classList.add('game-card')
//         // gameCard.setAttribute('id',i)
        
//         let frontImage = document.createElement('img')
//         frontImage.classList.add('card-front','card-style')
//         let imageName = imageNames.pop()
//         frontImage.setAttribute('src',`./img/${imageName}`)

//         let backImage =document.createElement('img')
//         backImage.classList.add('card-back','card-style')
//         backImage.setAttribute('src','./img/general-assembly.png')

//         gameCard.appendChild(frontImage)
//         gameCard.appendChild(backImage)

//         cardContainer.appendChild(gameCard)
//         //with this obj I can access to the card and the permisssion for flip it
//         cardArray[i] = {
//             'card' : gameCard,
//             'flipPermission' : true,
//             'name' : imageName
//         }

//         gameCard.onclick = () =>{
//             //This the current card that I picked
//             // let cardID = parseInt(event.target.parentElement.id)
//             // let currentCard = cardArray[cardID]
//             let currentCard = cardArray[i]
            
//             //set condition for when I click on card then I couldn't click on it again
//             if(currentCard.flipPermission === true){
//                 //flip the card
//                 currentCard.card.classList.toggle('flip')
//                 currentCard.flipPermission = false
               
//                 //tell that the card is second card choose by player not the first card
//                 if(lastSelectedCard !== null){
//                     //check the matching cards
//                     if(lastSelectedCard.name === currentCard.name){
//                         //when two cards matched the thirdv card again will be our first card 
//                         lastSelectedCard = null
//                         //
//                         if (isFinished())
//                             alert('The game is finished')

//                     }//the cards are not matched
//                     else{
//                         setTimeout(flipMissmatchCard,1000,lastSelectedCard,currentCard)
//                         lastSelectedCard = null
//                     }
//                 }else{
//                     //if this click is my first click
//                     moveCount++;
//                     lastSelectedCard = currentCard
//                 }
//                 document.getElementById('move-number').innerHTML = moveCount

//         }


//     }
    
//  }
//     //when the bord cards make with for loop this func flip all cards and again after 5s it flip the cards again
//     flipAllcards()
//     setTimeout(flipAllcards,5000)


// }
// //this function count down the timer
//  function timerCountDown(){
//      timer--;
//      document.getElementById('timer').innerHTML = timer
//      //we need to clearInterval to set time till 0 
//      if(timer === 0){
//          clearInterval(timerIntervalID)
//      }


//  }
// window.addEventListener('load',() =>{
//     let playGameBtn =document.getElementById('play-game')
//     playGameBtn.onclick = () => {
//         prepareCards()
//         timer = 60
//         timerIntervalID = setInterval(timerCountDown,1000)
        
        
//     }
// })





