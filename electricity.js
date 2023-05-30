function Electricity() {
    let topup = 0;
    // do we want to go with this or array?
    let unitsAvailable = 0;
    let unitsBoughts = 0;
    let advanceUnits = 0;
    let appliances = {
       'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };
    

    function topUpElectricity(amount) {
        let units = 0;
        if(amount === 10){
            units = 7;
        }
        if (amount === 20) {
            units = 14;
        }
        if (amount === 50) {
            units = 35;
        }
        if (amount === 'advance' && advanceUnits == 0) {
            units = 21
            advanceUnits =+ 21;
        }
        if (amount ==! 'advance' && advanceTaken() && advanceUnits >= units) {
            advanceUnits -= units;
        } else if(amount ==! 'advance' && advanceTaken() && advanceUnits < units) {
            units -= advanceUnits
            advanceUnits = 0;
            unitsAvailable += units;
            unitsBoughts += units;                
        } else {
            unitsAvailable += units;
            unitsBoughts += units;    
        }
        topup += amount;


    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if (unitsAvailable >= appliances[appliance]) {
            unitsAvailable -= appliances[appliance]
            return true;
        } else {
            return false;
        }
    }

    function advanceTaken() {
        return advanceUnits > 0;
    }

    function totalAmountSpent() {
        return topup;
    }

    function totalUnitsBought(){
        return unitsBoughts;
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}