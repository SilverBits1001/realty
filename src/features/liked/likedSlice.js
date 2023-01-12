import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const likedSlice = createSlice({

    name: 'liked',
    initialState,
    reducers: {
        updateLiked: (state, action) => {
            const payloadString = JSON.stringify(action.payload)

            if (!state.includes(payloadString)) {
                state.push(payloadString)
            } else {
                const indexToRemove = state.findIndex(item => item === payloadString)
                if (indexToRemove > -1) {
                    state.splice(indexToRemove, 1)

                }
            }
        },

    }
})

export const { updateLiked, removeFromLiked } = likedSlice.actions
export default likedSlice.reducer