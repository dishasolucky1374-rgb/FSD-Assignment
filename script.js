function showMessage() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Hello " + name + "! Welcome to the FSD Git Assignment.");
    }
}