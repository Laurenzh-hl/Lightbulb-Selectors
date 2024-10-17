// Write your code here

// const lightbulb1 = document.querySelector("#lightbulb1");
// const lightbulb2 = document.querySelector("#lightbulb2");
// const lightbulb3 = document.querySelector("#lightbulb3");
// const subtitle = document.querySelector(".subtitle");

// let count = 0;

// lightbulb1.addEventListener("click", function() {
//     count++;
//     if ( count == 1) {
//         subtitle.innerHTML = "You've clicked the lights " + count + " time"; 
//     } else {
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb1.classList.toggle("active");
//     }
// })

// lightbulb2.addEventListener("click", function() {
//     count++;
//     if ( count == 1) {
//         subtitle.innerHTML = "You've clicked the lights " + count + " time"; 
//     } else {
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb2.classList.toggle("active");
//     }
// })

// lightbulb3.addEventListener("click", function() {
//     count++;
//     if ( count == 1) {
//         subtitle.innerHTML = "You've clicked the lights " + count + " time"; 
//     } else {
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb3.classList.toggle("active");
//     }
// })


// lightbulb1.addEventListener("mouseover", function() {
//     lightbulb1.classList.toggle("active");
// })

// lightbulb1.addEventListener("mouseout", function() {
//     lightbulb1.classList.toggle("active");
// })


// lightbulb2.addEventListener("mouseover", function() {
//     lightbulb2.classList.toggle("active");
// })

// lightbulb2.addEventListener("mouseout", function() {
//     lightbulb2.classList.toggle("active");
// })


// lightbulb3.addEventListener("mouseover", function() {
//     lightbulb3.classList.toggle("active");
// })

// lightbulb3.addEventListener("mouseout", function() {
//     lightbulb3.classList.toggle("active");
// }) 


const lightbulbs = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");

let count = 0;

for (let i = 0; i < lightbulbs.length; i++) {
    lightbulbs[i].addEventListener("click", function() {
    count++;
    if ( count == 1) {
        subtitle.innerHTML = "You've clicked the lights " + count + " time"; 
    } else {
    subtitle.innerHTML = "You've clicked the lights " + count + " times";
    lightbulbs[i].classList.toggle("active");
    }
})
}

for (let i = 0; i < lightbulbs.length; i++) {
    lightbulbs[i].addEventListener("mouseover", function() {
        lightbulbs[i].classList.toggle("active");
    })
}

for (let i = 0; i < lightbulbs.length; i++) {
    lightbulbs[i].addEventListener("mouseout", function() {
        lightbulbs[i].classList.toggle("active");
    })
}