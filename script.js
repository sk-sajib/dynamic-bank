

// Login button event listener
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"
    const dasArea = document.getElementById("dashboard-area")
        dasArea.style.display = "block"
})


// Deposite button event listener

const depositeBtn = document.getElementById("addDeposite")
depositeBtn.addEventListener("click",function(){

    const depositeNumber = getInputNumber('addAmount')
    
    // const addDepositeAmount = document.getElementById("addAmount").value
    // const depositeNumber = parseFloat(addDepositeAmount)

    // const currentDeposite = document.getElementById("currentDeposite").innerText
    // const currentDepositeNumber = parseFloat(currentDeposite)
    // const totalAmount = depositeNumber + currentDepositeNumber
    // document.getElementById("currentDeposite").innerText = totalAmount

   

    updateSpanText("currentBalance", depositeNumber)
    updateSpanText("currentDeposite", depositeNumber)
 
    document.getElementById("addAmount").value = " "
})

// Withdraw button event listener

const withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click', function(){
    
    const WithdrawNumber = getInputNumber('withdrawAmount')

    updateSpanText ('currentWithdraw', WithdrawNumber)
    updateSpanText("currentBalance", -1* WithdrawNumber)

    document.getElementById("withdrawAmount").value = " "
    
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount)
    return amountNumber

}



function updateSpanText(id,addedNumber){
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = currentNumber + addedNumber
    document.getElementById(id).innerText = totalAmount
}

