import { configureStore } from '@reduxjs/toolkit'
import aviaSlice from '../components/features/findAvia/findSlise'

export const store = configureStore({
    reducer: {
        findAvia: aviaSlice

    },
})