import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should display correct summary with a single expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should display correct summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={114195}/>);
    expect(wrapper).toMatchSnapshot();
});