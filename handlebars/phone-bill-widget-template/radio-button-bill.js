function CalculateRadioBill(){
    const callCost = 2.75;
    const smsCost = 0.75;
    const warningLevel = 30.00;
    const criticalLevel = 50.00;
    var totalCallCost = 0.00;
    var totalSmsCost = 0.00;
    
    function calculateBillTotal(checkedBill){

        if (checkedBill === 'call'){
            totalCallCost += callCost;
        }else {
            totalSmsCost += smsCost;
        }
    }

    function getTotalCall() {
        console.log(totalCallCost);
        return totalCallCost;
    }

    function getTotalSms() {
        return totalSmsCost;
    }

    function getTotalOverall() {
        return getTotalCall() + getTotalSms();
    }

    function getClassnameLevel(overallTotal) {
        if (overallTotal >= criticalLevel){
            return 'danger';
        }else if (overallTotal >= warningLevel){
            return 'warning';
        }else{
            return 'totalTwo';
        }
    }

    return {
        calculateBillTotal,
        getTotalCall,
        getTotalSms,
        getTotalOverall,
        getClassnameLevel
    }
}