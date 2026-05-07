import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

export interface Opportunity {
  id: number;
  title: string;
  customer: string;
  score: number;
  urgency: string;
  revenue: number;
}

interface OpportunityState {
  opportunities: Opportunity[];
  loading: boolean;
}

const initialState: OpportunityState = {
  opportunities: [],
  loading: false,
};

const opportunitySlice = createSlice({
  name: 'opportunities',

  initialState,

  reducers: {
    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading =
        action.payload;
    },

    setOpportunities: (
      state,
      action: PayloadAction<
        Opportunity[]
      >
    ) => {
      state.opportunities =
        action.payload;
    },

    addOpportunity: (
      state,
      action: PayloadAction<Opportunity>
    ) => {
      state.opportunities.unshift(
        action.payload
      );
    },

    removeOpportunity: (
      state,
      action: PayloadAction<number>
    ) => {
      state.opportunities =
        state.opportunities.filter(
          (item) =>
            item.id !== action.payload
        );
    },
  },
});

export const {
  setLoading,
  setOpportunities,
  addOpportunity,
  removeOpportunity,
} = opportunitySlice.actions;

export default opportunitySlice.reducer;