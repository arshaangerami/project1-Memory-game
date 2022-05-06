let imgNameList = ['batman.png', 'black-widow.png', 'captain-america.png', 'hulk.png', 'spider-man.png', 'wonder-woman.png']
let timer = 60;
let timerIntervalID;
//make a obj of array with 12 empty item in it
let cardArray = new Array(12)
let firstSelectedCard = null;
let moveCount = 0;
  

//flip all 12 cards
function flipAllCards(){
    cardArray.forEach((object) => {
        object.card.classList.toggle('flip')
    })
}
//this function gets the list of image arrays and duplicate it and shuffle them
function getImageNameList(array){
    let duplicateImgName = array.concat(array);
    duplicateImgName.sort(() => Math.random() - 0.5);
    return duplicateImgName;
}
//when two cards doesn't match
function flipMissMatchCard(card1, card2){
    card1.card.classList.toggle('flip')
    card1.flipPremission = true

    card2.card.classList.toggle('flip')
    card2.flipPremission = true
}
//check the game is finished or not
function isFinished(){
    for(let i=0; i<12; i++){
        if(cardArray[i].flipPremission === true)
            return false
    }
    return true
}
//make the board game and set attributes to it
function prepareCards() {

    let cardContainer = document.getElementById('card-container')
    //prevents make board game multiple time 
    cardContainer.innerHTML = "";
    //This is the array with 12 cards and shuffled
    let imageNames = getImageNameList(imgNameList)
    //Refactor my html with for loop and make the board game
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
        //makes flip the cards
        gameCard.onclick = () => {
            let currentCard = cardArray[i]
            //set condition for when I click on card then I couldn't click on it again
            if(currentCard.flipPremission === true){
                currentCard.card.classList.toggle('flip')
                //makes the card not flip again
                currentCard.flipPremission = false
                //we select two cards here so go for match them
                if(firstSelectedCard !== null){
                    if(firstSelectedCard.name === currentCard.name){
                        //after match happen the third card will be the first card
                        firstSelectedCard = null;
                        //check finishing the game here,all card are matched
                        if (isFinished() === true){
                            setTimeout(() => {
                                alert('Victory!');
                                clearInterval(timerIntervalID);
                            }, 500)
                        }
                    //when the two cards are not matched
                    }else{
                        setTimeout(flipMissMatchCard, 1000, firstSelectedCard, currentCard)
                        firstSelectedCard = null;
                    }

                }//here click on first card
                else{
                    moveCount++;
                    firstSelectedCard = currentCard
                }
    
                document.getElementById('move-number').innerHTML = moveCount

            }
            
        }
    
    }
    //when the bord cards make with for loop this func flip all cards and again after 3s it flip the cards again
    flipAllCards();
    setTimeout(flipAllCards, 3000);

}
//this function count down the timer
function timerCountDown(){
    timer--;
    document.getElementById('timer').innerHTML = timer;

    if(timer === 0){

        if (isFinished() === true)
            alert('Victory')
        else
            alert('Game over!')

        clearInterval(timerIntervalID);
        
    }
}

window.addEventListener('load', () => {
    let playGameBtn = document.getElementById('play-game')

    playGameBtn.onclick = () => {

        timer = 60;
        moveCount = 0;
        clearInterval(timerIntervalID)
        document.getElementById('move-number').innerHTML = moveCount;
        document.getElementById('timer').innerHTML = timer;

        prepareCards()

        timerIntervalID = setInterval(timerCountDown, 1000);
    }
})






