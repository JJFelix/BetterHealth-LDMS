import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    isAuthenticated: false,
    userType: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) =>{
            state.accessToken = action.payload
            state.isAuthenticated = true
        },
        setUserType: (state, action) =>{
            state.userType = action.payload
        },
        logoutUser: (state) =>{
            state.isAuthenticated = false
            state.accessToken = null
        }
    }
})

export const { setToken, logoutUser, setUserType} = authSlice.actions

export default authSlice.reducer