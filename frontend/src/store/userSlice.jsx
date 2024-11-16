import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const userLogin = createAsyncThunk(
    'user/login',
    async (data) => {
        const axios = useAxiosPublic();
        const request = await axios.post("/login-user", data);
        const response = request.data; // `request.data` holds the actual response
        console.log('Login response:', response);
        localStorage.setItem('user', JSON.stringify(response)); // Save user data in localStorage
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload; // The user data from the action
            state.error = null;
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.user = null;

            if (action.error.message === 'Request failed with status code 500') {
                state.error = 'Access Denied';
            } else {
                state.error = action.error.message;
            }
        });
    },
});

export default userSlice.reducer;
