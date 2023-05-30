// DOM element(s) references
let topUpElectElem = document.querySelector(".topup");
let buyBtnElem = document.querySelector(".btn");
let advanceRadioBtnE = document.querySelector(".advance");
let unitsAvailableEle = document.querySelector(".unitsAvailable");
let totalAmountSpentElem = document.querySelector(".totalAmount");
//use button and appliance radio button
let usageBtnElem = document.querySelector(".useNow");
let usageRadioElemt = document.querySelector(".usage");
let totalUnitsBoughtElem = document.querySelector(".totalUnits");
//units available 
let totalUnitsAvailableEl = document.querySelector(".unitsAvailable")


// Factory Function instance 
const electricity =  Electricity();
// electricity.totalUnitsBought(50);
// electricity.totalAmountSpent(100);


// let topup = 0;
// let unitsBoughts = 0;
// let unitsUsed = 0;
// DOM events here 
function topUpElectricit(){
    var checkedRadioBtnElem = document.querySelector("input[name='buyElectricity']:checked");
    
        var buyElectricityRadio = checkedRadioBtnElem.value;
        if (buyElectricityRadio === "advance") {
            
            electricity.topUpElectricity(buyElectricityRadio);

        } else {
            electricity.topUpElectricity(Number(buyElectricityRadio));
        }
    totalAmountSpentElem.innerHTML = electricity.totalAmountSpent();
    totalUnitsBoughtElem.innerHTML = electricity.totalUnitsBought();
    totalUnitsAvailableEl.innerHTML = electricity.getUnitsAvailable();




}
buyBtnElem.addEventListener('click',topUpElectricit)

function usageButton(){
    var checkedUsageRadioBtnElem = document.querySelector("input[name='useElectricity']:checked");
    let useElectricity = checkedUsageRadioBtnElem.value;
   
    electricity.useAppliance(useElectricity);
    
    totalUnitsAvailableEl.innerHTML = electricity.getUnitsAvailable();
  
}
usageBtnElem.addEventListener('click',usageButton)