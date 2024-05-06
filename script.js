const buttonДа = document.querySelector(`.Да`);
const buttonНет = document.querySelector(`.Нет`);

let buttonДаFontSize = 2;
let buttonНетFontSize = 2; 

buttonНет.addEventListener(`click`, doДаMore);
buttonДа.addEventListener(`click`, buttonДаPushed);

function doДаMore (){
    buttonДаFontSize = buttonДаFontSize + 0.4;
    buttonДа.style.fontSize = buttonДаFontSize + `em`;
    buttonНетFontSize = buttonНетFontSize - 0.5;
    buttonНет.style.fontSize = buttonНетFontSize + `em`;
}

function buttonДаPushed() {
    location.href = `./page2.html`;
}