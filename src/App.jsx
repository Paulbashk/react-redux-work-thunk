/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCustomers from './asyncAction/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.bank.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (num) => {
    dispatch({ type: 'ADD_CASH', payload: num });
  };

  const getCash = (num) => {
    dispatch({ type: 'GET_CASH', payload: num });
  };

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name
    };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div className="cash">
        Деньги:
        {' '}
        {cash}
      </div>
      <div className="buttons">
        <button type="button" className="btn" onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button type="button" className="btn" onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button type="button" className="btn" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button type="button" className="btn" onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
        <button type="button" className="btn" onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      <h2>Клиенты:</h2>
      {customers.length > 0
        ? (
          <div className="items">
            {customers.map((customer) => (
              <div
                key={Math.random()}
                className="items__item"
                onClick={() => removeCustomer(customer)}
                aria-hidden="true"
              >
                {customer.name}
              </div>
            ))}
          </div>
        )
        : (
          <div className="items__no">
            Клиенты отсутствуют
          </div>
        )}
    </div>
  );
}

export default App;
