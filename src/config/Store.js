import { createStore, combineReducers } from 'redux';

import playerReducer from   '../components/features/player/Reducer';
import targetReducer from   '../components/features/target/Reducer';
import mapReducer from      '../components/features/map/Reducer';
import bulletsReducer from  '../components/features/bullets/Reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    target: targetReducer,
    map: mapReducer,
    bullets: bulletsReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;