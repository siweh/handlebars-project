var textInputElement = document.querySelector(".input-text");
var regNoDisplay = document.querySelector(".reg-message");
var btnAdd = document.querySelector(".btn-add");
var selectTown = document.querySelector(".town-select");
var btnReset = document.querySelector(".btn-reset");

var templateElem = document.querySelector(".regNumberTemplate").innerHTML;
var theTemplate = Handlebars.compile(templateElem);

var storeRegistrationNo = gettingRegNumberList();
const regNumbers = RegistrationNumbers(storeRegistrationNo);
displayRegNumbers(regNumbers.getRegistrationNumbers());

function clickedBtnAdd() {
    var getInputValue = textInputElement.value;
    regNumbers.addRegistrationNumber(getInputValue);
    var regNumberList = regNumbers.getRegistrationNumbers();
    console.log(regNumberList);
    var getErrorMsg = regNumbers.getErrorMessage();
    console.log(getErrorMsg);

   

    document.querySelector(".reg-message").innerHTML = theTemplate({regiNumbers: regNumberList});
    document.querySelector(".error-msg").innerHTML = theTemplate({regError: getErrorMsg});

    //Clear the value in the textBox after the add button is clicked
    textInputElement.value = "";
    displayRegNumbers(regNumberList);

    storingRegNumbers(regNumberList);
}

function createChip(regNumber) {
    //chip
    var chip = document.createElement('div');
    chip.className = 'chip';
    chip.appendChild(document.createTextNode(regNumber));

    return chip;
}

function displayRegNumbers(regNumberList = []) {

    if (regNumberList.length > 0) {
        regNoDisplay.innerHTML = '';
        for (let i = 0; i < regNumberList.length; i++) {
            var regNumberDisplay = regNumbers.formatRegistrationNumber(regNumberList[i]);
            //console.log(registrationNumberDisplay);
            regNoDisplay.append(createChip(regNumberDisplay));
        }
    }
}

function selectedTown() {
    var selectByTown = selectTown.value;
    console.log(selectByTown);
    var getSelectedTownRegNumber = regNumbers.getRegistrationNumbers(selectByTown);
    console.log(getSelectedTownRegNumber);
    var getFilteredTown = regNumbers.getFilteredRegistrationNumbers();
    console.log(getFilteredTown);

    
    document.querySelector(".reg-message").innerHTML = theTemplate({filterTown: getSelectedTownRegNumber});
    displayRegNumbers(getSelectedTownRegNumber);
    
}

function regNumberReset() {
    clearingStorage();
}


selectTown.addEventListener('change', selectedTown);
btnAdd.addEventListener('click', clickedBtnAdd);
btnReset.addEventListener('click', regNumberReset);