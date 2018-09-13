import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        <p>
            Viewing {props.expenses.length} expense{props.expenses.length === 1 ? '' : 's'} totaling {numeral(props.expensesTotal).format('$0,0.00')}.
        </p>
    </div>
);


const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(state.expenses)/100
})

export default connect(mapStateToProps)(ExpenseSummary);