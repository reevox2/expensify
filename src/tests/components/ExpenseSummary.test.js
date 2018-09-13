import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';



test('should render correctly with only one expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} expensesTotal={94.34} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render correctly with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenses} expensesTotal={94.34} />);
    expect(wrapper).toMatchSnapshot();
})