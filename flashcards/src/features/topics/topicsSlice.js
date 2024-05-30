import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: JSON.parse(localStorage.getItem('topics')) || {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: [],
      };
      localStorage.setItem('topics', JSON.stringify(state.topics))
    },
    deleteTopic: (state, action) => {
      const { id } = action.payload
      delete state.topics[id]
      localStorage.setItem('topics', JSON.stringify(state.topics))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase("quizzes/addQuiz", (state, action) => {
        const { id, topicId } = action.payload;
        state.topics[topicId].quizIds.push(id)
      })
  }
});

export const { addTopic, deleteTopic, addQuizIdForTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;