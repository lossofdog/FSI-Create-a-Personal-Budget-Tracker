let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

console.log(weeklyExpenseQuestions)

//this will let user input values to the questions being asked
for (let i = 0; i< weeklyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(weeklyExpenseQuestions[i]))
    //parseInt changes the input string response into a number...without this it will
    //add all these inputs as strings together
    weeklyExpenses = weeklyExpenses + response
    //console.log(weeklyExpenses)
}
for (let i = 0; i< monthlyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + response
}

for (let i = 0; i< annualExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + response
}