import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import APIService from "../../utils/APIServices";
import { url } from "../../utils/endpoints";
import { getSimplifiedError } from "../../utils";
export interface AuthState {
  loading: boolean;
  token: string;
  error?: boolean;
  success: boolean;
  searchResult: any;
  allMessages: any;
 
  

}

const initialState: AuthState = {
  loading: false,
  token: "",
  error: false,
  success: false,
  searchResult: {},
  allMessages: [],
 

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    restoreDefault: (state) => {
      state.loading = false;
        state.token = ""
    },
    resetAll: (state) => {
      state.loading = false;
 
      
    },
    resetQues: (state) => {
      state.searchResult = {}
    }
   
  },
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload?.token
      
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = ""
       
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload?.token
      
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = ""
       
      })
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResult = payload?.prompt
      
      })
      .addCase(sendMessage.rejected, (state, { payload }) => {
        state.loading = false;
        state.searchResult = {}
       
      })
      .addCase(getAllMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMessages.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allMessages = payload?.prompt
      
      })
      .addCase(getAllMessages.rejected, (state, { payload }) => {
        state.loading = false;
        state.allMessages = [];
       
      })
      
      
      ;
    // end of session
  },
});

export const loginUser = createAsyncThunk(
  "loginUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.login}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const registerUser = createAsyncThunk(
  "registerUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.register}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const sendMessage = createAsyncThunk(
  "sendMessage",
  async (payload: any, { rejectWithValue, getState }) => {
    const { auth }: any = getState();

    try {
      const { data } = await APIService.post(`${url.message}`, payload, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      return data;
    } catch (error: any) {
      let newError = getSimplifiedError(error);
      return rejectWithValue(newError);
    }
  }
);
export const getAllMessages = createAsyncThunk(
  "getAllMessage",
  async (_, { rejectWithValue, getState }) => {
    const { auth }: any = getState();

    try {
      const { data } = await APIService.get(`${url.message}`,  {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      return data;
    } catch (error: any) {
      let newError = getSimplifiedError(error);
      return rejectWithValue(newError);
    }
  }
);


export const authSelector = (state: any) => state.auth;

export const { restoreDefault, resetAll, resetQues } = authSlice.actions;
export default authSlice.reducer;
