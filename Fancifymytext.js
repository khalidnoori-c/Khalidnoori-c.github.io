// altering the test function
function hello() {
    alert("Hello, world!");
}


//making the input text bigger
function makeBigger() {
    let textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
    hello(); 
}


// to make it more fancy I used this
function makeFancy() {
    let textArea = document.getElementById("textInput");

    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}


function makeBoring() {
    let textArea = document.getElementById("textInput");

    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}


// the funcion for MOO
function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;

    // I did this to make the input all upercase
    text = text.toUpperCase();

   
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }

    textArea.value = sentences.join(". ");
}

// connecting my js to html
window.onload = function() {
    document.getElementById("biggerBtn").onclick = makeBigger;
    document.getElementById("fancyRadio").onchange = makeFancy;
    document.getElementById("boringRadio").onchange = makeBoring;
    document.getElementById("mooBtn").onclick = mooify;
};
