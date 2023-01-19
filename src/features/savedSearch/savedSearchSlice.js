import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'Apartments in SD',
        city: 'San Diego',
        state: 'California',
        paramaters: {},
    },
    {
        title: 'Condos in LA',
        city: 'Los Angeles',
        state: 'California',
        paramaters: {},
    },
    {
        title: 'Condos that allow pets',
        city: 'San Diego',
        state: 'California',
        paramaters: {},
    }
]

export const savedSearchSlice = createSlice({
    name: 'savedSearch',
    initialState,
    reducers: {
        removeSaved: (state, action) => {
           console.log('update saved', action.payload);
           state.splice(action.payload, 1)
        },

    }
})


export const { removeSaved, } = savedSearchSlice.actions

export default savedSearchSlice.reducer
