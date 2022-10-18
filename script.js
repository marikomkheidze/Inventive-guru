let error = document.getElementById("error")

function validateName() {
    let name = document.getElementById("username").value;
    if (name.length < 1) {
        console.log(name)
        error.classList.remove('hide')
    }
    else
        error.classList.add('hide')
}

document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
    validateName();
});