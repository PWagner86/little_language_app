// Variablen

let trigger = document.querySelector(".trigger");
let nav = document.querySelector("nav");
let navOpen = false;

let result = false;

const linkOne = document.querySelector(".task-btn-one");
const linkTwo = document.querySelector(".task-btn-two");
const linkThree = document.querySelector(".task-btn-three");
const linkFour = document.querySelector(".task-btn-four");
const backTop = document.querySelector(".back-top-btn");

const subBtnOne = document.querySelector(".submit-one-btn");
const solOne = document.querySelector(".solution-one");

const subBtnTwo = document.querySelector(".submit-two-btn");
const solTwo = document.querySelector(".solution-two");

const subBtnThree = document.querySelector(".submit-three-btn");
const solThree = document.querySelector(".solution-three");

const subBtnFour = document.querySelector(".submit-four-btn");
const solFourOne = document.querySelector(".solution-four-one");
const solFourTwo = document.querySelector(".solution-four-two");

let onOff = document.querySelector(".darkmode-wrapper i");
let darkOn = false;

// Eventlisteners

// Window
window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 50){
        backTop.style.opacity = 1;
        backTop.style.pointerEvents = "all";
    }else{
        backTop.style.opacity = 0;
        backTop.style.pointerEvents = "none";
    };
});

// Navigation
trigger.addEventListener("click", ()=> {
    console.log("clicked");

    if(!navOpen){
        nav.classList.add("nav-open");
        navOpen = true;
    }else{
        nav.classList.remove("nav-open");
        navOpen = false;
    };
});


// Links
linkOne.addEventListener("click", (e)=> {
    e.preventDefault();
    scrollSection("#task-one");
});

linkTwo.addEventListener("click", (e)=> {
    e.preventDefault();
    scrollSection("#task-two");
});

linkThree.addEventListener("click", (e)=> {
    e.preventDefault();
    scrollSection("#task-three");
});

linkFour.addEventListener("click", (e)=> {
    e.preventDefault();
    scrollSection("#task-four");
});

backTop.addEventListener("click", (e)=> {
    e.preventDefault();
    scrollSection("header");
});

// Eingabe
subBtnOne.addEventListener("click", (e)=> {
    let checkOne = document.querySelector("#task-one .check-wrapper");

    e.preventDefault();
    console.log("clicked One");
    console.log(solOne.value);

    solutionEnter(solOne.value, "schöner", linkOne);

    deleteChilde(checkOne);

    checkCross(solOne, "schöner", checkOne);
});

subBtnTwo.addEventListener("click", (e)=> {
    let checkTwo = document.querySelector("#task-two .check-wrapper");

    e.preventDefault();
    console.log("clicked Two");
    console.log(solTwo.value);

    solutionEnter(solTwo.value, "Spass", linkTwo);

    deleteChilde(checkTwo);

    checkCross(solTwo, "Spass", checkTwo);

});

subBtnThree.addEventListener("click", (e)=> {
    let checkThree = document.querySelector("#task-three .check-wrapper");

    e.preventDefault();
    console.log("clicked Three");
    console.log(solThree.value);

    solutionEnter(solThree.value, "Angebot", linkThree);

    deleteChilde(checkThree);

    checkCross(solThree, "Angebot", checkThree);

});

subBtnFour.addEventListener("click", (e)=> {
    let checkFour = document.querySelector("#task-four .check-wrapper");

    e.preventDefault();
    console.log("clicked Four");
    console.log(solFourOne.value);
    console.log(solFourTwo.value);

    multiSolutionEnter(solFourOne.value, "pfeift", solFourTwo.value, "Lippen", linkFour);

    deleteChilde(checkFour);

    checkCrossMulti(solFourOne, "pfeift", solFourTwo, "Lippen", checkFour);

});

// Darkmode on / off
onOff.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode();
});

// Funktionen

// Scrollfunktion
function scrollSection(section){
    gsap.to(window, {
        duration: 2,
        scrollTo: section,
    });
};

// Lösungsfunktion
function solutionEnter(value,solution, button){ 

    if(value === solution){
        result = true;
        button.style.background = "rgb(47, 182, 47)";
        
    }else{
        result = false
        button.style.background = "rgb(216, 63, 63)";
    };
};

function multiSolutionEnter(value1, solution1, value2, solution2, button){

    if(value1 === solution1 && value2 === solution2){
        result = true;
        button.style.background = "rgb(47, 182, 47)";
    }else{
        result = false
        button.style.background = "rgb(216, 63, 63)";
    };
};

// Deletefunktion

function deleteChilde(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
};

// Check und Cross Funktion
function checkCross(item, value, container){
    if(item.value === value){
        let check = document.createElement("i");
        check.classList.add("fas");
        check.classList.add("fa-check");
        check.classList.add("check");
        container.appendChild(check);
    }else{
        let cross = document.createElement("i");
        cross.classList.add("fas");
        cross.classList.add("fa-times-circle");
        cross.classList.add("cross");
        container.appendChild(cross);
    };
};

function checkCrossMulti(item, value, itemTwo, valueTwo, container){
    if(item.value === value && itemTwo.value === valueTwo){
        let check = document.createElement("i");
        check.classList.add("fas");
        check.classList.add("fa-check");
        check.classList.add("check");
        container.appendChild(check);
    }else{
        let cross = document.createElement("i");
        cross.classList.add("fas");
        cross.classList.add("fa-times-circle");
        cross.classList.add("cross");
        container.appendChild(cross);
    };
};

// Darkmode

function darkMode(){
    let body = document.querySelector("body");
    let tasks = document. querySelectorAll(".task");

    if(!darkOn){
        darkOn = true

        onOff.classList.remove("fa-moon")
        onOff.classList.add("fa-lightbulb");

        body.classList.add("dark");
        tasks.forEach(task => {
            task.classList.add("dark-two");
        });
    }else{
        darkOn = false

        onOff.classList.remove("fa-lightbulb");
        onOff.classList.add("fa-moon");

        body.classList.remove("dark");
        tasks.forEach(task => {
            task.classList.remove("dark-two");
        });
    };
};