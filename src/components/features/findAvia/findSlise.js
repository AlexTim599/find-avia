import { createSlice } from '@reduxjs/toolkit'
import aviaArr from '../../../Json/flights.json'

const initialState = {
    schedule: aviaArr,
}


export const aviaSlice = createSlice({
    name: 'findAvia',
    initialState,

    reducers: {
        sorted: (state, action) => {
            state.schedule = action.payload
        }
    },
})


export const { sorted } = aviaSlice.actions

export default aviaSlice.reducer