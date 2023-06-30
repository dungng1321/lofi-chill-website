import todoListReducer from './slice/todoListSlice';
import rainReducer from './slice/rainSlice';
import moodReducer from './slice/moodSlice';
import modeReducer from './slice/modeSlice';
import changgeVolumeReducer from './slice/changeVolumeSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    todoList: todoListReducer,
    rain: rainReducer,
    mood: moodReducer,
    mode: modeReducer,
    volume: changgeVolumeReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
