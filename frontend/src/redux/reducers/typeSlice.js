import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const typeSlice = createSlice({
	name: 'types',
	initialState: {
		types: [],
	},
	reducers: {
		newType: (state, action) => {
			axios
				.post('http://localhost:8080/api/v1/types', {
					...action.payload.types,
				})
				.then((result) => {
					console.log({ createType: result });
				});
		},
		updateType: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/types/${action.payload.id}`, {
					...action.payload.types,
				})
				.then((result) => {
					console.log({ updateType: result });
				});
		},
		deleteType: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/types/${action.payload.id}`, {
					status: 'deleted',
				})
				.then((result) => {
					console.log({ deleteType: result });
				});
		},
		fetchtypes: (state, action) => {
			state.types = [];
			state.types = action.payload.types;
		},
	},
});

export const { newType, updateType, deleteType, fetchTypes } =
	typeSlice.actions;

export default typeSlice.reducer;
