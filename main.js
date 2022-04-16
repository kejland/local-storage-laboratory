//Challenge 1:
let form1 = document.querySelector("#challenge-1");

let stringInput = document.querySelector("#string-input");
let stringOutput = document.querySelector("#string-output");


stringOutput.innerText = localStorage.getItem("stringInput");

form1.addEventListener("submit", function(event){
    event.preventDefault();

    localStorage.setItem("stringInput", stringInput.value);

    stringOutput.innerText = localStorage.getItem("stringInput");

    stringInput.value = "";
})


//==================================================================

//Challenge 2:

window.addEventListener("load", function(event) {
    document.getElementById("reload").onclick = function() {
        location.reload(true);
    }
});

//let counter = document.createTextNode("1");

//load window
window.addEventListener("load", function(){
    let count = 0;
    let counter = localStorage.getItem("count", 0);

})