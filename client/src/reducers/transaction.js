import { Transaction_Fail,Transaction_Success } from '../Actions/types';

const initialState ={
    loading: true
};

export default function transactionReducer(state=initialState, action){
    const {type,payload} = action;

    switch(type){
        case Transaction_Success:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case Transaction_Fail:
            return {
                ...state,
                ...payload,
                loading: false
            };
        default:
            return state
    }
}