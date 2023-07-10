import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './features/counter/counterSlice';

const store = configureStore({
	reducer: {
		messages: messagesSlice.reducer,
	},
});

export default store;
