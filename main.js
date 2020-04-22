
let money = prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    moneyData: money, 
    timeData: time,
    expenses: {
        "expenseItem" : "expenseAmount"
    },
    optionalExpenses: {},
    income: [],
    saving: false
};
 

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", '');
    expenseAmount = prompt("Во сколько обойдется", '');
    expenses = {};
    expenses[expenseItem] = expenseAmount;
    console.log(expenses);
 
let dailyExpenseAmount = money / 30;
alert(dailyExpenseAmount);