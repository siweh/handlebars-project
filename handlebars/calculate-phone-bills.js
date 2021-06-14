var addButtonBill = document.querySelector(".addToBillBtn");
var addRadioButton = document.querySelector(".radioBillAddBtn");
var typeBillElement = document.querySelector(".billTypeText"); 
var ovarallTotalElement = document.querySelector(".totalOne");
var overallTotalRadioElement = document.querySelector(".totalTwo");

const calculateTextBill = CalculateBillCost();
const calculateBills = CalculateRadioBill();

var templateElement = document.querySelector(".txt-input-bill").innerHTML;

var template = Handlebars.compile(templateElement);
function clickedAddBtn(){
    calculateTextBill.calculateEnteredBillTotal(typeBillElement.value);

    var callTotal = calculateTextBill.getCallTotal().toFixed(2);
    var smsTotal = calculateTextBill.getSmsTotal().toFixed(2);
    var overallTotal = calculateTextBill.getOverallTotal().toFixed(2);

    var classnameLevel = calculateTextBill.getClassnameLevel(overallTotal);

    document.querySelector(".callTotalOne").innerHTML = template({callCostTotal: callTotal});
    document.querySelector(".smsTotalOne").innerHTML = template({smsCostTotal: smsTotal});
    document.querySelector(".totalOne").innerHTML = template({overallTotal: overallTotal});

    ovarallTotalElement.classList.add(classnameLevel);
}

function clickedRadioBtn() {

    var checkedRadioBtnBill = document.querySelector("input[name='billItemType']:checked");
    console.log(checkedRadioBtnBill.value);

    calculateBills.calculateBillTotal(checkedRadioBtnBill.value);

    var totalCallRadio = calculateBills.getTotalCall().toFixed(2);
    var totalSmsRadio = calculateBills.getTotalSms().toFixed(2);
    var totalOverall = calculateBills.getTotalOverall().toFixed(2);
    console.log(totalCallRadio);
    console.log(totalSmsRadio);
    console.log(totalOverall);

    var levelClassname = calculateBills.getClassnameLevel(totalOverall);

    document.querySelector(".callTotalTwo").innerHTML = template({callCostTotalRadio: totalCallRadio});
    document.querySelector(".smsTotalTwo").innerHTML = template({smsCostTotalRadio: totalSmsRadio});
    document.querySelector(".totalTwo").innerHTML = template({overallTotalRadio: totalOverall});

    overallTotalRadioElement.classList.add(levelClassname);
}

addButtonBill.addEventListener('click', clickedAddBtn);
addRadioButton.addEventListener('click', clickedRadioBtn);