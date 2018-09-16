import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

//ASYNC DATABASE CREATE + send to redux reducer
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (expense) => {
  return dispatch => {
    return database.ref(`/expenses/${expense.id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(expense))
      })
      .catch(e => console.log(e));
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    // populate expenses
    return database.ref('expenses').once('value').then(snapshot => {
      const expenses = [];
      snapshot.forEach(expenseSnapshot => {
        expenses.push({
          id: expenseSnapshot.key,
          ...expenseSnapshot.val()
        });
      })
      dispatch(setExpenses(expenses));
    })
  }
};
