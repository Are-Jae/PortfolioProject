const bioButton = document.getElementById("profile")
const bioImg = document.querySelector(".container");
const textBlock = document.querySelector(".text-block")

bioImg.style.opacity= "0";
textBlock.style.opacity= "0";

// add event listener to  bio button so that when we click it, something will hapenn
bioButton.addEventListener("click", function () {
    bioImg.style.opacity = "1"
    bioImg.style.transitionDelay = '.5s'
    textBlock.style.opacity = "1"
    textBlock.style.transitionDelay = ".75s"
})



 