function validateName(nameid, errorid, n) {
    let error = document.getElementById(errorid)
    let name = document.getElementById(nameid).value;
    if (name.length < n) {
        console.log(name)
        error.classList.remove('hide')
    }
    else
        error.classList.add('hide')
}
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
    validateName(nameid = 'username', errorid = 'username_error', n = 1);
    validateName(nameid = 'usersurname', errorid = 'usersurname_error', n = 1);
    validateName(nameid = "email", errorid = "email_error", n = 10);
    validateName(nameid = "textarea", errorid = "message_error", n = 30);
});