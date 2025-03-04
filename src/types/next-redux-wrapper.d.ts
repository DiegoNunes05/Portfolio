import { AnyAction } from '@reduxjs/toolkit';

declare module 'next-redux-wrapper' {
  export const HYDRATE: '__NEXT_REDUX_WRAPPER_HYDRATE__';
  
  export interface HydrateAction extends AnyAction {
    type: typeof HYDRATE;
    payload: unknown;
  }
}