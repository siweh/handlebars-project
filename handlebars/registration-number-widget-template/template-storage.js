function storingRegNumbers(registrationNumbersList) {
    var listRegistrationNo = JSON.stringify(registrationNumbersList);

    localStorage.setItem('listRegistrationNo', listRegistrationNo);
};

function gettingRegNumberList() {
    var storeRegistrationNumber = localStorage.getItem('listRegistrationNo');
    return JSON.parse(storeRegistrationNumber);
};

function clearingStorage() {
    localStorage.removeItem('listRegistrationNo');
    location.reload();
}