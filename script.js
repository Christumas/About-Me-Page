// adding the functionality to the hamburger menu for mobile
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
const menuBackground = document.querySelector(".menuBackground")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navbar.classList.toggle("change")
    menuBackground.classList.toggle("change")


})


// add the bubble popping effect to 
const bubbles  = document.querySelectorAll(".bubble");
console.log(bubbles)

const dontPressButton = document.querySelector(".dontPress")
let poppedCount = 0;
const bubbleArray = Array.from(bubbles); //convert the nodelist to array 


dontPressButton.addEventListener("click", ()=>{
    const shuffled = [...bubbleArray].sort( () => { Math.random() -0.5})    //shuffle the array so the bubbles get popped in different orders
    
    //add the animation to each blob after a delay through settimeout
    shuffled.forEach( (element) => {
        const animationDelay = Math.random() * 2000 //generate a delay of about 2s

        //the function adds the animation to each bubble after this generated delay
        setTimeout( () => {
            element.style.animation = "pop 1s ease-out forwards"

            element.addEventListener("animationend", ()=> {
                poppedCount++;

                if(poppedCount == bubbleArray.length){
                    setTimeout(() => { //bring back the bubbles after 2s 
                        bubbleArray.forEach( (bubble) => {
                            bubble.style.transform = "scale(1.0)";
                            bubble.style.animation = "";
                            bubble.style.opacity = 1;
                            poppedCount = 0;
                        })

                    }, 500)

                }
            }, {once:true})

        },animationDelay)


    })

})

