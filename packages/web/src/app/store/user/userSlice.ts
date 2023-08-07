import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit'
import {decodeJwt} from "../../services/auth";

export interface UserState {
  email: string | null
}

const initialState: UserState = {
  email: null
}

if(localStorage.getItem('GCP_JWT')) {
  initialState.email = decodeJwt(localStorage.getItem('GCP_JWT') as string).email
}

const reducers: SliceCaseReducers<UserState> = {
  setEmail: (state: UserState, newEmail: {payload: string}) => {
    state.email = newEmail.payload
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
})

// Action creators are generated for each case reducer function
export const { setEmail } = userSlice.actions

export const userReducer =  userSlice.reducer
