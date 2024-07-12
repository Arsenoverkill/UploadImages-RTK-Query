import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { uploadApi } from './upload';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		[uploadApi.reducerPath]: uploadApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware, uploadApi.middleware)
});
