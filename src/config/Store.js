import { createStore, combineReducers } from 'redux';

import playerReducer from '../components/features/player/Reducer';

const rootReducer = combineReducers({
    player: playerReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;