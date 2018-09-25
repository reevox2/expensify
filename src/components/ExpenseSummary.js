import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expensesTotal, hiddenExpensesCount, hiddenExpensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenseWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const formattedHiddenExpenseTotal = numeral(hiddenExpensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpenseTotal}</span></h1>
                {(hiddenExpensesCount > 0) && <h2 className="page-header__subtitle">Hiding <span>{hiddenExpensesCount}</span> {hiddenExpenseWord} totaling <span>{formattedHiddenExpenseTotal}</span></h2>}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>

        </div>
    )
};


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    const hiddenExpenses = state.expenses.filter(hiddenExpense => !visibleExpenses.find(visibleExpense => visibleExpense === hiddenExpense))
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpensesCount: hiddenExpenses.length,
        hiddenExpensesTotal: selectExpensesTotal(hiddenExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);