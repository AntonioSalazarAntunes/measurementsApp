
const myTimeout = setTimeout(popUp, 2000);

const myTimeoutTwo = setTimeout(popUpTwo, 4000)

function myStopFunction() {
    clearTimeout(myTimeout);
    document.querySelector(".backbone").style.display = "none"
}



function myFunction() {
    
    const chicara = 250;
    const soup = 25;
    const tea = 5;
    const coffee = 2;

    const x = document.getElementById("dropdown").value;
    const valor = document.querySelector(".quantity").value;

    switch (x) {
        case "chicara":
            
            document.getElementById("resultado").innerHTML = valor*chicara +"ml";
            break;
        case "sopa":
            document.getElementById("resultado").innerHTML = valor*soup +"ml";
            break;
        case "cha":
            document.getElementById("resultado").innerHTML = valor*tea +"ml";
            break;
        case "cafe":
            document.getElementById("resultado").innerHTML = valor*coffee +"ml";
            break;
        default:
            "Error"
            break;
    }

}


function popUp() {
    document.querySelector(".messageOne").style.display = "flex";
    document.querySelector(".backbone").style.display = "flex";
    document.getElementById("segunda").style.display = "none";
    document.querySelector(".quantity").style.zIndex = "4";

}

function popUpTwo() {
     document.querySelector(".messageTwo").style.display = "flex";
     document.getElementById("segunda").style.display = "flex";
     document.getElementById("dropdown").style.zIndex = "4";       

 }