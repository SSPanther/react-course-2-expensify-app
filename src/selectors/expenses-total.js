export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((amount, currentAmount) => amount + currentAmount, 0);
};