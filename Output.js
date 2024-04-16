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

var FileCount = 0;
function FileCountAdd() {
    FileCount++;
}

function StoreDetails() {
    var URLData = document.getElementById('NewURL').value;
    var UsernameData = document.getElementById('NewUsername').value;
    var PasswordData = document.getElementById('NewPassword').value;
    alert("Following details stored:\nURL: " + URLData +"\nUsername: " + UsernameData + "\nPassword: " + PasswordData);
    JSONOut(URLData, UsernameData, PasswordData);
}


function JSONOut(URL, Name, Pass) {
    const NewLogin = { // create new json object
        URL: URL,
        UserName: Name,
        Password: Pass
    };

    const jsonData = JSON.stringify(NewLogin, null, 2) //convert json object to json string
    FileCountAdd();
    localStorage.setItem(URL, jsonData);
}


function JSONIn() {
    const retrievedData = localStorage.getItem(FileCount);
        const parsedData = JSON.parse(retrievedData);
        var JSONurl = JSON.stringify(parsedData.URL);
        var JSONname = JSON.stringify(parsedData.UserName);
        var JSONpass = JSON.stringify(parsedData.Password);
        alert("Username: " + JSONname + "\nPassword: " + JSONpass);
}

/*
function JSONIn(RequestedURL) {
    
    var FilesSearched = 0;
    while (FilesSearched < FileCount) {
        const retrievedData = localStorage.getItem(FilesSearched);
        const parsedData = JSON.parse(retrievedData);
        var JSONurl = JSON.stringify(parsedData.URL);
        if (JSONurl == RequestedURL) {
            
            var JSONname = JSON.stringify(parsedData.UserName);
            var JSONpass = JSON.stringify(parsedData.Password);
            alert("Username: " + JSONname + "\nPassword: " + JSONpass);
           
            break;
        }
    }
   
    
    */


