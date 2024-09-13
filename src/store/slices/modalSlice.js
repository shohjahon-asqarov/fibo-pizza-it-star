import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: {},
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.data = action.payload;
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
})

export const { toggleModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
