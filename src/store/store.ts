import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modal';
import giftListReducer from '../reducers/giftList';
import selectedGiftReducer from '../reducers/selectedGift';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    giftList: giftListReducer,
    selectedGift: selectedGiftReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
