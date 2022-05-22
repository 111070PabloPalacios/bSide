import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'remeras',
    initialState: {
        notifications: new Object()
    },
    reducers:{
        receiveMessage(state, actions) {
                state.notifications={
                    text: actions.payload.text
                };
                //console.log(state.notifications);
        },
    }
});

export const messageActions = messageSlice.actions;