import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const examSlice = createSlice({
	name: 'exams',
	initialState: {
		exams: [],
	},
	reducers: {
		newExam: async (state, action) => {
			const currentState = await axios
				.post('http://localhost:8080/api/v1/exams', {
					...action.payload.exams,
				})
				.then((result) => {
					return result;
				});
			console.log(currentState);
			state.exams.push(currentState);
		},
		updateExam: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/exams/${action.payload.id}`, {
					...action.payload.exams,
				})
				.then((result) => {
					console.log({ updateExam: result });
				});
		},
		deleteExam: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/exams/${action.payload.id}`, {
					status: 'deleted',
				})
				.then((result) => {
					console.log({ deleteExam: result });
				});
		},
		fetchexams: (state, action) => {
			state.exams = [];
			state.exams = action.payload.exams;
		},
	},
});

export const { newExam, updateExam, deleteExam, fetchExams } =
	examSlice.actions;

export default examSlice.reducer;
