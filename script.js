// Login Button Event Handeler

const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'
    const transArea = document.getElementById('transaction-area')
    transArea.style.display = 'block'
})


function getInputText(id) {
    const amount = document.getElementById(id).value | 0
    const amountNumber = parseFloat(amount)
    return amountNumber
}


function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText
    const currentAmount = parseFloat(current)
    const totalAmount = currentAmount + addedNumber
    document.getElementById(id).innerText = totalAmount
}


// Deposit Button Event Handeler
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {

    const depositAmount = getInputText('depositAmount')

    if (depositAmount == 0 || depositAmount < 0) {
        alert('deposit amount can not be less than zero or blank')
    } else {
        updateSpanText('currentDeposit', depositAmount)
        updateSpanText('currentBalance', depositAmount)

    }


    document.getElementById('depositAmount').value = ""

})

// Withdraw Button Event Handeler

const withdrawBtn = document.getElementById('addwithDraw')
withdrawBtn.addEventListener('click', function () {

    const withdrawAmount = getInputText('withdrawAmount')

    if (withdrawAmount == 0 || withdrawAmount < 0) {
        alert('withdraw amount can not be less than zero or blank')
    } else {
        updateSpanText('currentWithdraw', withdrawAmount)
        updateSpanText('currentBalance', -1 * withdrawAmount)
    }


    document.getElementById('withdrawAmount').value = ""

})