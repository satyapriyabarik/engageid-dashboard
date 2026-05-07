import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,

  notifications: [
    {
            id: 1,
            title: 'Critical SLA Warning',
            description:
                'ABC Corp maintenance overdue',
        },
        {
            id: 2,
            title: 'AI Opportunity Detected',
            description:
                'Storage expansion recommendation',
        },
  ],
};

const notificationSlice = createSlice({
  name: 'notifications',

  initialState,

  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },

    addNotification: (state, action) => {
      state.notifications.unshift(
        action.payload
      );
    },
  },
});

export const {
  toggleDrawer,
  addNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;