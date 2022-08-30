function shitCalc(num1, num2) {
    if (action1 === '+')
        return Number(num1) + Number(num2)
    else if (action1 === '-')
        return Number(num1) - Number(num2)
    else if (action1 === '*')
        return Number(num1) * Number(num2)
    else if (action1 === '/')
        return Number(num1) / Number(num2)
}

let num1 = prompt('What is your first number?')
let num2 = prompt('and your second?')
let action1 = prompt('Pick one: +, -, *, /.')
const total = [shitCalc(num1, num2)]
alert(shitCalc(num1, num2))
if (total.includes(69)) {
    alert('nice.💯')
} else if (total.includes(420)) {
    alert('blaze it🔥')
}