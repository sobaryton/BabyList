import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SelectedGiftState = {
  selectedGift?: GiftType;
};

export enum GiftStatus {
  TO_OFFER = 'TO_OFFER',
  OFFERED = 'OFFERED',
  PARTLY_FUNDED = 'PARTLY_FUNDED',
}

export enum TransactionType {
  ORDER,
  PARTICIPATE,
}

export type Transaction = {
  id: string;
  giftId: string;
  type: TransactionType;
  name: string;
  email: string;
  message: string;
  amount: number;
  currency: string;
  anonymous?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  canceledAt?: Date;
  giftVersion: string;
};

export type GiftType = {
  id: string;
  wishlistId: string;
  url: string;
  image: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  remainingAmount: number;
  currency: string;
  alreadyBought: boolean;
  store: string;
  status: GiftStatus;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  version: number;
  transactions?: Transaction[];
};

const selectedGiftSlice = createSlice({
  name: 'selectedGift',
  initialState: {
    selectedGift: undefined,
  } as SelectedGiftState,
  reducers: {
    selectGift: (state, action: PayloadAction<GiftType>) => {
      state.selectedGift = action.payload;
    },
  },
});

export const { selectGift } = selectedGiftSlice.actions;

export default selectedGiftSlice.reducer;
