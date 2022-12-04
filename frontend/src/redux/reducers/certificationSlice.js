import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const certificationSlice = createSlice({
	name: 'certifications',
	initialState: {
		certifications: [],
	},
	reducers: {
		newCertification: (state, action) => {
			axios
				.post('http://localhost:8080/api/v1/certifications', {
					...action.payload.certifications,
				})
				.then((result) => {
					console.log({ createCertification: result });
				});
		},
		updateCertification: (state, action) => {
			axios
				.put(
					`http://localhost:8080/api/v1/certifications/${action.payload.id}`,
					{
						...action.payload.certifications,
					},
				)
				.then((result) => {
					console.log({ updateCertification: result });
				});
		},
		deleteCertification: (state, action) => {
			axios
				.put(
					`http://localhost:8080/api/v1/certifications/${action.payload.id}`,
					{
						status: 'deleted',
					},
				)
				.then((result) => {
					console.log({ deleteCertification: result });
				});
		},
		fetchcertifications: (state, action) => {
			state.certifications = [];
			state.certifications = action.payload.certifications;
		},
	},
});

export const {
	newCertification,
	updateCertification,
	deleteCertification,
	fetchCertifications,
} = certificationSlice.actions;

export default certificationSlice.reducer;
