import { combineReducers } from 'redux';
import NameReducer from './name_reducer';
import AddressReducer from './address_reducer';
import TeamReducer from './team_reducer';

const RootReducer = combineReducers({
  name: NameReducer,
  address: AddressReducer,
  team: TeamReducer
});

export default RootReducer;
