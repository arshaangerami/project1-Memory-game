
let imgNameList=['batman.png','black-widow.png','captain-america.png','hulk.png','spider-man.png','wonder-woman.png']
//this function gets the list of image arrays and duplicate it 
function getImageList(array){
    let duplicateImageName = array.concat(array)
//shuffle the cards randomly every time the game starts
    duplicateImageName.sort(()=> Math.random() - .5)
    return duplicateImageName

}

// function prepareCards(){

// }
window.addEventListener('load',() =>{
    let playGameBtn =document.getElementById('play-game')
    playGameBtn.onclick = () => {
        alert(getImageList(imgNameList))
        
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

