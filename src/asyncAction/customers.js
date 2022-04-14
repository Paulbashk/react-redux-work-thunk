import axios from 'axios';
import { addManyCustomerAction } from '../store/customerReducer';

const fetchCustomers = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => dispatch(addManyCustomerAction(response.data)));
};

export default fetchCustomers;
