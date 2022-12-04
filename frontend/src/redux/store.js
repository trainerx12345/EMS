//Import redux
import { configureStore } from '@reduxjs/toolkit';

//Import reducer
import examSlice from './reducers/examSlice.js';
import userSlice from './reducers/usersSlice.js';
import questionSlice from './reducers/questionSlice.js';
import typeSlice from './reducers/typeSlice';
import answerSlice from './reducers/answerSlice';
import certificationSlice from './reducers/certificationSlice';
import choiceSlice from './reducers/choiceSlice';
import sectionSlice from './reducers/sectionSlice';

const store = configureStore({
	reducer: {
		exam: examSlice,
		users: userSlice,
		questions: questionSlice,
		type: typeSlice,
		answer: answerSlice,
		certification: certificationSlice,
		choice: choiceSlice,
		section: sectionSlice,
	},
});

export default store;
