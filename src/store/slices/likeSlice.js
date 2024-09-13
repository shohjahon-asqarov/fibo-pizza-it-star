import { createSlice } from '@reduxjs/toolkit'

// localStorage dan initialState olish
const getInitialState = () => {
    const savedData = localStorage.getItem('likeData');
    return savedData ? JSON.parse(savedData) : [];
}

const initialState = {
    data: getInitialState(),
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (found) {
                state.data = state.data.filter(i => i.id !== action.payload.id)
            } else {
                state.data.push(action.payload);
            }
            localStorage.setItem('likeData', JSON.stringify(state.data));
        },
    },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer
