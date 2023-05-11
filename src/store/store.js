import { configureStore } from '@reduxjs/toolkit'
import keyboardReducer from '../components/keyboard/slice.js'

const initialState = {}
export const store = configureStore({
    reducer: {keyboardReducer},
})