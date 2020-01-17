import { combineReducers } from 'redux';
import countStore from '../reducers/countReducer';

const reducer: any = combineReducers({
  countStore,
});

export default reducer;
