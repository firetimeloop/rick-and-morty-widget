import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from '../widgets/RickAndMortyWidget/reducers/widgetSlice';

export const store = configureStore({
  reducer: {
    rickAndMortyWidget: widgetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
