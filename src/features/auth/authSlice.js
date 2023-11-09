import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: userExist ? userExist : null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state, action)=>{
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:false,
                message:"",
            }
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(registerUser.pending, (state, action)=>{
            state.isLoading=true;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
            state.message = "";
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.user=null;
            state.message=action.payload;
        })
        .addCase(logoutUser.fulfilled, (state, action)=>{
            state.user=null;
            state.isSuccess=false;
        })

        .addCase(loginUser.pending, (state, action)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
            state.message = "";

        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.user=null;
            state.message=action.payload;
        })
    },
})

export const {reset}=authSlice.actions;
export default authSlice.reducer;

export const registerUser = createAsyncThunk("REGISTER/USER", async(formData, thunkAPI)=>{
    try {
        return await authService.register(formData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
});

export const logoutUser = createAsyncThunk("LOGOUT/USER", async()=>{
    localStorage.removeItem("user");
});

export const loginUser = createAsyncThunk("LOGIN/USER", async(formData2, thunkAPI)=>{
    try {
        return await authService.login(formData2);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
});
