
let imgNameList=['batman.png','black-widow.png','captain-america.png','hulk.png','spider-man.png','wonder-woman.png']

let timer = 60
let timerIntervalID;
//make a obj of array with 12 empty item in it
let cardArray = new Array(12)
let lastSelectedCard = null
let moveCount = 0 

//this function gets the list of image arrays and duplicate it 
function getImageNameList(array){
    let duplicateImageName = array.concat(array)
//shuffle the cards randomly every time the game starts
    duplicateImageName.sort(()=> Math.random() - .5)
    return duplicateImageName

}

function prepareCards(){
    //Refactor my html with for loop
    let cardContainer = document.getElementById('card-container')
    //clear the board each time when push play game 
    cardContainer.innerHTML = ""

    let imageNames = getImageNameList(imgNameList)

    for(i=0 ; i< 12 ; i++){

        let gameCard = document.createElement('div')
        gameCard.classList.add('game-card')
        gameCard.setAttribute('id',i)
        
        let frontImage = document.createElement('img')
        frontImage.classList.add('card-front','card-style')
        let imageName = imageNames.pop()
        frontImage.setAttribute('src',`./img/${imageName}`)

        let backImage =document.createElement('img')
        backImage.classList.add('card-back','card-style')
        backImage.setAttribute('src','./img/general-assembly.png')

        gameCard.appendChild(frontImage)
        gameCard.appendChild(backImage)

        cardContainer.appendChild(gameCard)
        //with this obj I can access to the card and the permisssion for flip it
        cardArray[i] = {
            'card' : gameCard,
            'flipPermission' : true,
            'name' : imageName
        }

        gameCard.onclick = (event) =>{
            //This the current card that I picked
            let cardID = parseInt(event.target.parentElement.id)
            let currentCard = cardArray[cardID]
            
            //set condition for when I click on card then I couldn't click on it again
            if(currentCard.flipPermission === true){
                currentCard.card.classList.toggle('flip')
                currentCard.flipPermission = false
               
                
            
                // //tell that the card is second card choose by player not the first card
                // if(lastSelectedCard !== null){
                //     //check the matching cards
                //     if(lastSelectedCard.name === currentCard.name){
                //         //when two cards matched the thirdv card again will be our first card 
                //         lastSelectedCard = null


                //     }else{

                //     }


                // }else{
                //     //if this click is my first click
                //     moveCount++;
                //     lastSelectedCard =currentCard




                // }


        }


    }
    
 }
}
//this function count down the timer
 function timerCountDown(){
     timer--;
     document.getElementById('timer').innerHTML = timer
     //we need to clearInterval to set time till 0 
     if(timer === 0){
         clearInterval(timerIntervalID)
     }


 }
window.addEventListener('load',() =>{
    let playGameBtn =document.getElementById('play-game')
    playGameBtn.onclick = () => {
        prepareCards()
        timer = 60
        timerIntervalID = setInterval(timerCountDown,1000)
        
        
    }
})





