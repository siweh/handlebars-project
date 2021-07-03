function storeRegistrationNumbers(registrationNumbersList) {
    var listRegistrationNumbers = JSON.stringify(registrationNumbersList);

    localStorage.setItem('listRegistrationNumbers', listRegistrationNumbers);
};

function getRegistrationNumbersList() {
    var storeRegistrationNumber = localStorage.getItem('listRegistrationNumbers');
    return JSON.parse(storeRegistrationNumber);
};

function clearStorage() {
    localStorage.removeItem('listRegistrationNumbers');
    location.reload();
}