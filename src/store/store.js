import { configureStore } from '@reduxjs/toolkit'
import flightsSlice from '../components/features/findAvia/findSlise'

export const store = configureStore({
    reducer: {
        flights: flightsSlice

    },
})