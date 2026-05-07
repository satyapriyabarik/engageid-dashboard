import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

type AiState = {
  insights: any[];
};

const initialState: AiState = {
  insights: [],
};

const aiSlice = createSlice({
  name: 'ai',

  initialState,

  reducers: {
    addInsight: (state, action: PayloadAction<any>) => {
      state.insights.unshift(
        action.payload
      );
    },
  },
});

export const {
  addInsight,
} = aiSlice.actions;

export default aiSlice.reducer;