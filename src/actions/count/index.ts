import { createAction } from 'redux-act';
import { SET_COUNT, SET_COUNT_ACTION } from '../../constants/actions';
import { ISetCount, ISetCountAction } from './types';

export const setCount = createAction<ISetCount>(SET_COUNT);
export const setCountAction = createAction<ISetCountAction>(SET_COUNT_ACTION);
