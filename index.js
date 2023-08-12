const card = document.querySelector(".cardContainer");
const cvvButton = document.getElementById("cardCvv");
let frontInfo = document.getElementById('frontCardNumber');
let inputnumber = document.getElementById('cardNumber');


function rotateCard() {
    card.style.transform = "rotateY(180deg)";
}

function revertRotation() {
    card.style.transform = "rotateY(0)";
}


cvvButton.addEventListener('focus', rotateCard);
cvvButton.addEventListener('blur', revertRotation);


function typeInformation(input, cardInfos){
    const  frontCardInfo = document.getElementById(cardInfos);
    let cardInformation = document.getElementById(input);
    frontCardInfo.textContent = cardInformation.value;
}
