const card = document.querySelector(".cardContainer");
const cvvButton = document.getElementById("cardCvv");
const inputCardNumber = document.getElementById("cardNumber");
const  frontCardNumberInfo = document.getElementById("frontCardNumber");

function rotateCard() {
    card.style.transform = "rotateY(180deg)";
}

function revertRotation() {
    card.style.transform = "rotateY(0)";
}


cvvButton.addEventListener('focus', rotateCard);
cvvButton.addEventListener('blur', revertRotation);


function typeInformation(input, cardInfos){
    let cardInformation = document.getElementById(input).value;
    const  frontCardInfo = document.getElementById(cardInfos);
    frontCardInfo.textContent = cardInformation;
}

