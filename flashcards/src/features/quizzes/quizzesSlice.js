import { createSlice } from '@reduxjs/toolkit'

const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes: JSON.parse(localStorage.getItem('quizzes')) || {},
	},
	reducers: {
		addQuiz: (state, action) => {
			const { id } = action.payload
			state.quizzes[id] = action.payload
			localStorage.setItem('quizzes', JSON.stringify(state.quizzes));
		},
		deleteQuiz: (state, action) => {
			const { id } = action.payload
			const quizIndex = Object.values(state.quizzes).findIndex(quiz => quiz.id === id)
			if (quizIndex !== -1) delete state.quizzes[id]
			localStorage.setItem('quizzes', JSON.stringify(state.quizzes));
		}
	},
})

export const { addQuiz, deleteQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
