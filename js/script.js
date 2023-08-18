const incomeInput = document.getElementById("income-input");
const foodAmount = document.getElementById("food-amount");
const rentAmount = document.getElementById("rent-amount");
const clothAmount = document.getElementById("cloth-amount");
const calcBtn = document.getElementById("calculate-btn");
const totalExpenses = document.getElementById("total-expense");
const totalBalance = document.getElementById("total-balance");
const saveInput = document.getElementById("save-input");
const saveBtn = document.getElementById("save-btn");
const saveAmount = document.getElementById("save-amount");
const remainingBalance = document.getElementById("remaining-balance");

calcBtn.addEventListener("click", function(){
    const income = incomeInput.value;
    const food = foodAmount.value;
    const rent = rentAmount.value;
    const cloth = clothAmount.value;
    
    if (income === "" || food === "" || rent === "" || cloth === "" ){
        alert("Please fill up all the fields");
        return;
    }
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)){
        alert("Please enter a valid number");
        return;
    }
    
    const totalExpense = (parseFloat(food) + parseFloat(rent) + parseFloat(cloth)).toFixed(1);
    totalExpenses.innerText = totalExpense + " taka";
    const totalBal = (parseFloat(income) - parseFloat(totalExpense)).toFixed(1);
    totalBalance.innerText = totalBal + " taka";

    if (totalBal < 0){
        alert("You have no money left");
        totalExpenses.innerText = '';
        totalBalance.innerText = "";
    }
    
    incomeInput.value = "";
    foodAmount.value = "";
    rentAmount.value = "";
    clothAmount.value = "";

    saveBtn.addEventListener("click", function(){
        const save = saveInput.value;
       
        // updated total balance get from above
        const totalBal = parseFloat(totalBalance.innerText);
        //  saveBalance calculate in %
        const percentage = parseFloat(save) / 100;
        const saveBalance = (totalBal * percentage).toFixed(1);
        saveAmount.innerText = saveBalance + " taka";
        const remainingBal = (parseFloat(totalBal) - parseFloat(saveBalance)).toFixed(1);
        remainingBalance.innerText = remainingBal + " taka";
        if (save === "" || isNaN(save)){
            alert("Please enter a valid number");
            return;
        }
        if (remainingBal < 0){
            alert("You have no money left for your percentage.");
            saveAmount.innerText = '';
            remainingBalance.innerText = "";
        }
        saveInput.value = "";
    })
})