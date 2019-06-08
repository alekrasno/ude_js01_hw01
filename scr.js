'use strict';
//console.log('Проверка');
var money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');
var appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        pay01: prompt('Введите обязательную статью расходов в этом месяце'),
        payment01: +prompt('Во сколько обойдется?'),
        pay02: prompt('Введите обязательную статью расходов в этом месяце'),
        payment02: +prompt('Во сколько обойдется?')
    },
    optionalExpences: '',
    income: [],
    savings: false
};
console.log(appData.expenses);
alert('Бюджет на день ' + (appData.moneyData / 30).toFixed(2) + " ₽");