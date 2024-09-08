import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    data: [],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (!found) {
                state.data.push(action.payload);
                toast.success('Succefully added', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.warning('Already exists', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        },
        deleteCard: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
            toast.success('Succefully deleted', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        updateCount: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    i.count++
                }
            })
        },
        minusCount: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    if (i.count > 1) {
                        i.count--
                    } else {
                        state.data = state.data.filter(item => item.id !== action.payload.id);
                        toast.success('Succefully deleted', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                }
            })
        }
    },
})

export const { addCard, deleteCard, updateCount, minusCount } = cardSlice.actions

export default cardSlice.reducer