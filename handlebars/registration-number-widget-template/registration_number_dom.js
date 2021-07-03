// var addBtn = document.createElement('button');
// document.body.appendChild(addBtn);
var addBtn = document.querySelector(".add-btn");
var resetBtn = document.querySelector(".reset-btn");
var inputElement = document.querySelector(".text-input");
var townSelect = document.querySelector(".town");
var regNumberDisplay = document.getElementById("message");
var errorMsgElement = document.querySelector(".error");
var dropDownBtn = document.querySelector("button");
var displayRegistration = document.createElement('regNo');

var storeRegNumbers = getRegistrationNumbersList();
const registrationNumbers = RegistrationNumbers(storeRegNumbers);
displayRegistrationNumbers(registrationNumbers.getRegistrationNumbers());

function addingRegNumbers() {
    var getTextValue = inputElement.value;
    registrationNumbers.addRegistrationNumber(getTextValue);
    var regNumbsrsList = registrationNumbers.getRegistrationNumbers();
    displayRegistrationNumbers(regNumbsrsList);

    //Clear the value in the textBox after the add button is clicked
    inputElement.value = "";

    errorMsgElement.innerHTML = registrationNumbers.getErrorMessage();
    storeRegistrationNumbers(registrationNumbers.getRegistrationNumbers());
}

function createChip(regNo) {
    //chip
    var chip = document.createElement('div');
    chip.className = 'chip';
    chip.appendChild(document.createTextNode(regNo));

    return chip;
}

function displayRegistrationNumbers(regNumbsrsList = []) {

    if (regNumbsrsList.length > 0) {
        regNumberDisplay.innerHTML = '';
        for (let i = 0; i < regNumbsrsList.length; i++) {
            var registrationNumberDisplay = registrationNumbers.formatRegistrationNumber(regNumbsrsList[i]);
            //console.log(registrationNumberDisplay);
            regNumberDisplay.append(createChip(registrationNumberDisplay));
        }
    }
}

function filterByTown() {
    var getTownSelected = townSelect.value;
    regNumberDisplay.innerHTML = '';
    
    var regNumbsrsList = registrationNumbers.getRegistrationNumbers(getTownSelected);
    //console.log(regNumbsrsList);
    displayRegistrationNumbers(regNumbsrsList);
}

function resetRegNumbers() {
    clearStorage();
}

townSelect.addEventListener('change', filterByTown);
addBtn.addEventListener('click', addingRegNumbers);
resetBtn.addEventListener('click', resetRegNumbers);