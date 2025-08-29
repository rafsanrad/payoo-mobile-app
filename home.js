const validPin = 1234;
const transactionData=[];
// function to get input values 
function getInputValueNumber(id){
    const inputField=document.getElementById(id);
    const inputFieldValue=inputField.value;
    const inputFieldValueNumber=parseInt(inputFieldValue);
    return inputFieldValueNumber;
}
function getInputValue(id){
    const inputField=document.getElementById(id);
    const inputFieldValue=inputField.value;
    return inputFieldValue;
}
// function to get inner text 
function getInnerText(id){
    const element=document.getElementById(id);
    const elementValue=element.innerText;
    const elementValueNumber=parseInt(elementValue);
    return elementValueNumber;
}
// function to set inner text 
function setInnerText(value){
    const availableBalanceElement=document.getElementById("available-balance");
    availableBalanceElement.innerText=value; 
}
// function to handle toggle 
function handleToggle(id){
    const forms=document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display="none";
    }
    document.getElementById(id).style.display="block";
}
// function to toggle button 
function handleButtonToggle(id){
    const formBtns=document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300");
    }

    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
}
// add money features 

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    const bank=getInputValue("bank");
    const accountNumber=getInputValue("account-number");
    const amount=getInputValueNumber("add-amount");
    if(amount<=0){
        alert("Invalid amount");
        return;
    }
    const pin=getInputValueNumber("add-pin");

    const availableBalance =getInnerText("available-balance");

    if(accountNumber.length<11){
        alert("Please provide valid account number");
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin number");
        return;
    }
    const totalNewAvailableBalance=amount+availableBalance;
    setInnerText(totalNewAvailableBalance);

    const data={
        name:"Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

// cash out features 
document.getElementById("Withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
    const agentNumber=getInputValue("agent-number")
    const amount=getInputValueNumber("withdraw-amount");
    const availableBalance=getInnerText("available-balance");
    if(amount<=0 || amount>availableBalance){
        alert("Invalid amount");
        return
    }
    const pin=parseInt(document.getElementById("add-pin-number").value)
    if(agentNumber.length<11){
        alert("Please provide valid account number");
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin number");
        return;
    }
    const totalNewAvailableBalance=availableBalance-amount;
    setInnerText(totalNewAvailableBalance);

    const data={
        name:"Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

document.getElementById("transactions-button").addEventListener("click",function(){
    const transactionContainer=document.getElementById("transaction-container");
    transactionContainer.innerText="";
    for(const data of transactionData){
        const div=document.createElement("div");
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 mt-3 flex justify-between items-center"> 
                <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div> 
            </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div);
    }
})

// toggling features 
document.getElementById("add-button").addEventListener("click",function(){
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
})
document.getElementById("transfer-button").addEventListener("click",function(){
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");

})
document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("get-bonus-parent");
    handleButtonToggle("bonus-button");
})
document.getElementById("bill-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent");
    handleButtonToggle("bill-button");
})
document.getElementById("transactions-button").addEventListener("click",function(){
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-button");
})
