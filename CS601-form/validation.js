function checkFirst() {
    const letter = /[A-Za-z]/;
    let firstName = document.forms["myForm"]["firstName"].value;
    if (firstName.match(letter) && firstName.length >= 2){
        document.getElementById("hidden-first").style.visibility = "hidden";
        document.getElementById("firstName").className = document.getElementById("firstName").className.replace(" error", "");
        // continue;
    }else{
        document.getElementById("hidden-first").style.visibility = "visible";
        document.getElementById("firstName").className = document.getElementById("firstName").className + " error";
        return false;
    }
}

function checkLast() {
    const letter = /[A-Za-z]/;
    let lastName = document.forms["myForm"]["lastName"].value;
    if (lastName.match(letter) && lastName.length >= 2){
        document.getElementById("hidden-last").style.visibility = "hidden";
        document.getElementById("lastName").className = document.getElementById("lastName").className.replace(" error", "");
        // continue;
    }else{
        document.getElementById("hidden-last").style.visibility = "visible";
        document.getElementById("lastName").className = document.getElementById("lastName").className + " error";
        return false;
    }
}

function checkFacilitator() {
    let facilitator = document.forms["myForm"]["facilitator"].value;
    if (facilitator === "Jen" || facilitator === "Behdad" || facilitator === "Josh" || facilitator === "Chris" || facilitator === "Christian"){
        document.getElementById("hidden-faci").style.visibility = "hidden";
        document.getElementById("facilitator").className = document.getElementById("facilitator").className.replace(" error", "");
        // continue;
    }else{
        alert("Please enter only following names: Jen, Behdad, Josh, Chris, Christian.");
        document.getElementById("hidden-faci").style.visibility = "visible";
        document.getElementById("facilitator").className = document.getElementById("facilitator").className + " error";
        return false;
    }
}

function checkAll(){
    if(checkFirst() === false || checkLast() === false || checkFacilitator() === false){
        alert("There's an error in your input, please change it!");
        return false;
    }
}

function nyancat(){
    let NyanCat = document.getElementById("nyancat");
    NyanCat.addEventListener('click',playNyancat,false);
}

const audio = new Audio("https://ia800501.us.archive.org/33/items/nyannyannyan/NyanCatoriginal.mp3");
let play = false;

function playNyancat(){
    document.getElementById("hide-nyancat").style.display = "inline";
    document.getElementById("display-nyancat").style.visibility = "visible";
    if (play === false){
        audio.play();
        play = true;
    }else{
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}

function hideNyancat(){
    play = false;
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("hide-nyancat").style.display = "none";
    document.getElementById("display-nyancat").style.visibility = "hidden";
}

window.addEventListener('load',nyancat,false);
