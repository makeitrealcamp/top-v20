const calculateButton = document.getElementById('calculate');

const totalPerPersonText = document.getElementById('total-per-person');
const tipAmountText = document.getElementById('tip-amount');

const billAmountInput = document.getElementById('bill-amount');
const numberOfPeopleText = document.getElementById('number-of-people');

calculateButton.addEventListener('click', () => {
    const originalBillAmount = Number(billAmountInput.value);
    const numberOfPeople = Number(numberOfPeopleText.value);

    const selectedRadioTip = document.querySelector('input[name="tip"]:checked')
    if(!selectedRadioTip) return;

    const tipPercentage = Number(selectedRadioTip.value.slice(0,-1))/100;
    const totalTip = Math.round(originalBillAmount * tipPercentage * 100) /100;
    const totalBill = totalTip + originalBillAmount;
    const perPerson = Math.round(totalBill/numberOfPeople * 100) / 100;

    totalPerPersonText.innerText = formatPrice(perPerson);
    tipAmountText.innerText = formatPrice(totalTip);
})

const formatPrice = (price) => {
    let retVal = price.toString();
    const parts = retVal.split('.');
    if(parts[0].length === 1) {
        retVal = "0" + retVal;
    }
    if(parts[1].length === 1){
        retVal += "0"
    }
    return retVal;
}