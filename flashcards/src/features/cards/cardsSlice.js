import { createSlice } from '@reduxjs/toolkit'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: JSON.parse(localStorage.getItem('cards')) || {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload
      state.cards[id] = action.payload
      localStorage.setItem('cards', JSON.stringify(state.cards))
    }
  }
})

export const { addCard } = cardsSlice.actions;
export const selectCardById = (id) => (state) => state.cards.cards[id];
export default cardsSlice.reducer;