import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const questionSlice = createSlice({
	name: 'questions',
	initialState: {
		questions: [],
	},
	reducers: {
		newQuestion: (state, action) => {
			axios
				.post('http://localhost:8080/api/v1/questions', {
					...action.payload.questions,
				})
				.then((result) => {
					console.log({ createQuestion: result });
				});
		},
		updateQuestion: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/questions/${action.payload.id}`, {
					...action.payload.questions,
				})
				.then((result) => {
					console.log({ updateQuestion: result });
				});
		},
		deleteQuestion: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/questions/${action.payload.id}`, {
					status: 'deleted',
				})
				.then((result) => {
					console.log({ deleteQuestion: result });
				});
		},
		fetchQuestions: (state, action) => {
			state.questions = [];
			state.questions = action.payload.questions;
		},
	},
});

export const { newQuestion, updateQuestion, deleteQuestion, fetchQuestions } =
	questionSlice.actions;

export default questionSlice.reducer;
