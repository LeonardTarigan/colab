import { PayloadAction } from './../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    username: string;
    imageUrl: string;
}

const initialState: UserState = {
    email: '',
    username: 'Username',
    imageUrl:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.imageUrl = action.payload.imageUrl;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
