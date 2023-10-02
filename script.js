function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name == "" || email == "") {
        alert("Please fill out all fields");
        return false;
    }
    
    return true;
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
