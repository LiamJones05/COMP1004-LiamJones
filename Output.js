const button = document.querySelector("input");



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



function JSONOut() {
    var URLData = document.getElementById('NewURL').value;
    var UsernameData = document.getElementById('NewUsername').value;
    var PasswordData = document.getElementById('NewPassword').value;
    alert("Following details stored:\nURL: " + URLData + "\nUsername: " + UsernameData + "\nPassword: " + PasswordData);
    const NewLogin = { // create new json object
        NewUserName: UsernameData,
        NewPassword: PasswordData
    };

    const jsonData = JSON.stringify(NewLogin, null, 2) //convert json object to json string
    localStorage.setItem(URLData, jsonData);
}



function SetURL() {
    var HTMLInputBox = document.getElementById("RetrieveURL");
    var SearchURL = HTMLInputBox.value;
    JSONIn(SearchURL);
}



async function JSONIn(URL) {
    try {
        
        const jsonData = localStorage.getItem(URL);
        const parsedString = JSON.parse(jsonData);

        alert(jsonData);

        var JSONname = jsonData.UsernameData;
        var JSONpass = jsonData.PasswordData;
        //alert("Username: " + JSONname + "\nPassword: " + JSONpass);
    }

    catch (error) {
        alert("That URL does not exist within the database")
    }
}




