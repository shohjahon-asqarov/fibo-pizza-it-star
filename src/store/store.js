import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cardSlice'
import likeSlice from './slices/likeSlice'
import modalSlice from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        card: cardSlice,
        like: likeSlice,
        modal: modalSlice
    },
})