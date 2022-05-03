
let imgNameList=['batman.png','black-widow.png','captain-america.png','hulk.png','spider-man.png','wonder-woman.png']

let timer = 10
let timerIntervalID;

//this function gets the list of image arrays and duplicate it 
function getImageNameList(array){
    let duplicateImageName = array.concat(array)
//shuffle the cards randomly every time the game starts
    duplicateImageName.sort(()=> Math.random() - .5)
    return duplicateImageName

}

function prepareCards(){
    //getElementbyClassname return a HTML Collection
    let imageCards = document.getElementsByClassName('card-back')
    let imageNames = getImageNameList(imgNameList)
    //console.log(imageCards)
    //array.from make a copy of array and I want to make a src for 12 cards
    Array.from(imageCards).forEach((el) => {
        let imageName = imageNames.pop()
        el.src = `./img/${imageName}`

    })
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
        timerIntervalID = setInterval(timerCountDown,1000)
        
        
    }
})
//set an empty array to push card choices into it
// playerChoice =[]

//Flip card to reveal the character image
// function flipBack(){
//     // console.log("hi")
//     // console.log(this)
//     //with toggle if the class is there remove it if it's not added
//     this.classList.toggle('flip')
//     // if(playerChoice.length !== 2){
//     //     //only clicked on one card
//     //     playerChoice.push()
        
        
//     // }
    
// }

// Add eventListener to each card when I click on ech of them do flipBack function
// gameCards.forEach(card => card.addEventListener('click',flipBack))
// window.addEventListener('load' , ()=>{
//     setTimeout()

// })

