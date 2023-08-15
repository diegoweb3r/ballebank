const card = document.querySelector(".cardContainer");
const cvvButton = document.getElementById("cardCvv");
let frontInfo = document.getElementById('frontCardNumber');
let inputnumber = document.getElementById('cardNumber');
const ctaButton = document.getElementById('buttonCta');

const cardNumberRegex = /^\d{16}$/;
const cardNameRegex = /^[A-Za-z\s]+$/;
const cardValidityRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cardCVVRegex = /^\d{3}$/;


function rotateCard() {
    card.style.transform = "rotateY(180deg)";
}

function revertRotation() {
    card.style.transform = "rotateY(0)";
}

function inputError() {
    alert("Dados de entrada invalido, digite novamente!")
}


cvvButton.addEventListener('focus', rotateCard);
cvvButton.addEventListener('blur', revertRotation);


function typeInformation(input, cardInfos) {
    const frontCardInfo = document.getElementById(cardInfos);
    let cardInformation = document.getElementById(input);
    frontCardInfo.textContent = cardInformation.value;
}


/*function validateInput(input, value) {
    const validations = {
        cardNumber: /^\d{16}$/,
        cardName: /^[A-Za-z\s]+$/,
        cardValidity: /^(0[1-9]|1[0-2])\/\d{2}$/,
        cardCvv: /^\d{3}$/
    };

    if (!validations[input].test(value)) {
        inputError();
        document.getElementById(input).value = ' ';
    }

    inputnumber.addEventListener('input', function () {
        validateInput('cardNumber', this.value);
    });

    document.getElementById('cardName').addEventListener('input', function () {
        validateInput('cardName', this.value);
    });

    document.getElementById('cardValidity').addEventListener('input', function () {
        validateInput('cardValidity', this.value);
    });

    document.getElementById('cardCvv').addEventListener('input', function () {
        validateInput('cardCvv', this.value);
    });

    alert("Cartao Cadastrado")

}*/



