import { createAction } from 'redux-act';

export const setCount = createAction<number>('SET_COUNT');
export const setCountAction = createAction<number>('SET_COUNT_ACTION');
