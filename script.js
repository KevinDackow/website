//validating and provessing forms with javascript and php class lynda
document.addEventListener('DOMContentLoaded', function() {
    var btnNames = document.getElementById('btnNames');
    
    btnNames.disabled = true;
    var firstName = document.getElementById('firstName'),
        lastName = document.getElementById('firstName'),
        firstNameEmpty = true,
        lastNameEmpty = true;
    
    firstName.addEventListener('change', function(){
        if(firstName.value === ""){
            firstNameEmpty = true;
        } else {
            firstNameEmpty = false;
        }        
        btnNames.disabled = (lastNameEmpty || firstNameEmpty);
    });
    
    lastName.addEventListener('change', function(){
        if(lastName.value === ""){
            lastNameEmpty = true;
        } else {
            lastNameEmpty = false;
        }        
        btnNames.disabled = (lastNameEmpty || firstNameEmpty);
    });

    document.getElementById('test_form').addEventListener('submit', function(event) {
        event.preventDefault();
        var newParaInput = alert("Hi, " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value + " it is nice to meet you!")
    });
});