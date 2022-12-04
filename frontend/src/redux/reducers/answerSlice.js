import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const answerSlice = createSlice({
	name: 'answers',
	initialState: {
		answers: [],
	},
	reducers: {
		newAnswer: (state, action) => {
			axios
				.post('http://localhost:8080/api/v1/answers', {
					...action.payload.answers,
				})
				.then((result) => {
					console.log({ createAnswer: result });
				});
		},
		updateAnswer: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/answers/${action.payload.id}`, {
					...action.payload.answers,
				})
				.then((result) => {
					console.log({ updateAnswer: result });
				});
		},
		deleteAnswer: (state, action) => {
			axios
				.put(`http://localhost:8080/api/v1/answers/${action.payload.id}`, {
					status: 'deleted',
				})
				.then((result) => {
					console.log({ deleteAnswer: result });
				});
		},
		fetchanswers: (state, action) => {
			state.answers = [];
			state.answers = action.payload.answers;
		},
	},
});

export const { newAnswer, updateAnswer, deleteAnswer, fetchAnswers } =
	answerSlice.actions;

export default answerSlice.reducer;
