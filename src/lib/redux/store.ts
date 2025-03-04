import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import portfolioReducer from './slices/portfolioSlice';

export const makeStore = () => 
  configureStore({
    reducer: {
      portfolio: portfolioReducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['__NEXT_REDUX_WRAPPER_HYDRATE__'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);