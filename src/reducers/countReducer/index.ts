import { createReducer } from 'redux-act';
import * as actions from '../../actions';
import { ICountStore } from './types';

const initialState: ICountStore = {
  count: 0,
};

const reducer = createReducer<ICountStore>({}, initialState);
reducer.on(actions.setCount, (state, data) => ({
  ...state,
  count: Number(data),
}))

export default reducer;
