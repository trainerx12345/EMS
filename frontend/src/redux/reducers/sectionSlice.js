import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sectionSlice = createSlice({
	name: 'sections',
	initialState: {
		sections: [],
	},
	reducers: {
		newSection: (state, action) => {
			axios
				.post('http://localhost:8080/api/v1/sections', {
					...action.payload.sections,
				})
				.then((result) => {
					console.log({ createSection: result });
				});
		},
		updateSection: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/sections/${action.payload.id}`, {
					...action.payload.sections,
				})
				.then((result) => {
					console.log({ updateSection: result });
				});
		},
		deleteSection: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/sections/${action.payload.id}`, {
					status: 'deleted',
				})
				.then((result) => {
					console.log({ deleteSection: result });
				});
		},
		fetchsections: (state, action) => {
			state.sections = [];
			state.sections = action.payload.sections;
		},
	},
});

export const { newSection, updateSection, deleteSection, fetchSections } =
	sectionSlice.actions;

export default sectionSlice.reducer;
