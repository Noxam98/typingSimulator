import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    inputLanguage: 'en',
    keyboardPressed: [

    ]
}

export const keyboardSlice = createSlice({
    name: 'keyboardState',
    initialState,
    reducers: {
        keyPressed: (state, action) => {

            if (!state.keyboardPressed.includes(action.payload.key))
                state.keyboardPressed.push(action.payload.key)
        },
        keyUpped: (state, action) => {
            state.keyboardPressed = state.keyboardPressed.filter(key => key !== action.payload.key)
        },
        setInputLanguage(state, action){
            state.inputLanguage = action.payload.lang
        }
    },
})

export const { keyPressed, keyUpped, setInputLanguage } = keyboardSlice.actions

export default keyboardSlice.reducer