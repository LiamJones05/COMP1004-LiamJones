const button = document.querySelector("input");

button.addEventListener("click", outputDetails);

function outputStrength(){
    var paragraph = document.getElementById("StrengthOutput");
    paragraph.innerHTML = "Password Strength(0-10): 8"

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