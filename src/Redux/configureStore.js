import { createStore } from 'redux';
import { Reducer, initialState } from './Reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}