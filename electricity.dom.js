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

let topup = 0;
let unitsBoughts = 0;
let unitsUsed = 0;
// DOM events here 
function topUpElectricit(){
    var checkedRadioBtnElem = document.querySelector("input[name='buyElectricity']:checked");
    if(checkedRadioBtnElem){
        var buyElectricityRadio = checkedRadioBtnElem.value
        if(buyElectricityRadio === "10"){
            topup += 10; 
            unitsBoughts += 7;
            
        }
        if (buyElectricityRadio === "20") {
            topup += 20;
            unitsBoughts += 14;

        }
        if (buyElectricityRadio === "50") {
            topup += 50;
            unitsBoughts += 35;
        }
        if (buyElectricityRadio === "advance") {
            topup += 30;
            unitsBoughts += 21;
        }
        
       
    }
    totalAmountSpentElem.innerHTML = topup;
    totalUnitsBoughtElem.innerHTML = unitsBoughts;
    totalUnitsAvailableEl.innerHTML = unitsBoughts;




}
buyBtnElem.addEventListener('click',topUpElectricit)

function usageButton(){
    var checkedUsageRadioBtnElem = document.querySelector("input[name='useElectricity']:checked");
   
    if (checkedUsageRadioBtnElem) {
        let useElectricity = checkedUsageRadioBtnElem.value;  
        if (useElectricity === "TV") {
            unitsBoughts -= 3;
        }
        if (useElectricity === "stove") {
            unitsBoughts -= 10;
        }
        if (useElectricity === "Fridge") {
            unitsBoughts -= 13;
        }
        if (useElectricity === "Kettle") {
            unitsBoughts -= 5;
        }
        if (!useElectricity) {
           totalUnitsBoughtElem.classList.remove();
        }
        

    }
    
    totalUnitsAvailableEl.innerHTML = unitsBoughts;
  
}
usageBtnElem.addEventListener('click',usageButton)