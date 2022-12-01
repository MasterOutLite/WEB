const workCodeOut = document.querySelector("#working-code");
const thingCodeOut = document.querySelector("#thing-code");
const buttonChange = document.querySelector(".create-code")

buttonChange.addEventListener("click",CreateCode)

function CreateCode(){
    thingCodeOut.textContent = GenerateString(4) + " " + GenerateRandomNumber(6);
    workCodeOut.textContent = GenerateRandomNumber(8);
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function GenerateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function GenerateRandomNumber(length){

    let result = "";
    for(let i = 0; i < length; i++){
        result += Math.floor(Math.random() * 10);
    }

    return result;
}