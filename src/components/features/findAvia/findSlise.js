import { createSlice } from '@reduxjs/toolkit'
import fligthData from '../../../Json/flights.json'

const initialState = {
    flights: fligthData[0].result.flights,
}


export const flightsSlice = createSlice({
    name: 'flights',
    initialState,

    reducers: {
        sorted: (state, action) => {
            state.schedule = action.payload
        }
    },
})


export const { sorted } = flightsSlice.actions

export default flightsSlice.reducer