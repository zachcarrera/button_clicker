function logIn(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
    // console.log(element.innerText);
}

function hide(element) {
    element.remove();
}

function like() {
    alert("Ninja was liked");
}
