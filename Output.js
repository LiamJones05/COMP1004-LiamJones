const button = document.querySelector("input");

button.addEventListener("click", outputDetails);

function outputStrength() {
    var CheckPass = document.getElementById('NewPassword').value;
    var PassStrength = 0;
    if (CheckPass.length >=8) {//check length >=8
        PassStrength += 2;
        if (CheckPass.length >=12) {//check length >=12
            PassStrength += 2;
        }
    }
    if (CheckPass.match(/[A-Z]/)) {//Check password contains at least one capital letter
        
        PassStrength += 2;
    }
    if (CheckPass.match(/\d/)) {
        PassStrength += 2;
    }
    if (CheckPass.match(/[^a-zA-Z\d]/)) {
        PassStrength += 2;
    }
    var paragraph = document.getElementById("StrengthOutput");
    paragraph.innerHTML = ("Password Strength(0-10): " + PassStrength);

}


function StoreDetails() {
    var URLData = document.getElementById('NewURL').value;
    var UsernameData = document.getElementById('NewUsername').value;
    var PasswordData = document.getElementById('NewPassword').value;
    alert("Following details stored:\nURL: " + URLData +"\nUsername: " + UsernameData + "\nPassword: " + PasswordData);
    
}

function ShowData() {
    /*
    var URLData = document.getElementById('NewURL').value;
    var UsernameData = document.getElementById('NewUsername').value;
    var PasswordData = document.getElementById('NewPassword').value;
    */ //temp placeholder to get variable values into procedure
    alert("" + URLData + "\nUsername: " + UsernameData + "\nPassword: " + PasswordData);
}