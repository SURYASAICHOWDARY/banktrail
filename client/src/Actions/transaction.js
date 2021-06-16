import axios from 'axios';
import { Transaction_Fail,Transaction_Success } from './types';

export const postTransaction = (formData) => async (dispatch) => {

    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('http://localhost:5000/transactions', formData, config);

        dispatch({
            type: Transaction_Success,
            payload:res.data
        });
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.ForEach(err => console.log(err.msg));
        }

        dispatch({
            type: Transaction_Fail, 
        });
    }
    
}