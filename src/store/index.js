import { configureStore } from "@reduxjs/toolkit";
import { remerasSlice } from "./remerasSlice";
import { messageSlice } from "./messagesSlice";
import { cartSlice } from "./cartSlice";
import { authenticationSlice } from "./authenticationSlice";

export const store = configureStore({
    reducer: {remeras: remerasSlice.reducer, messages: messageSlice.reducer,
             cart: cartSlice.reducer, authentication: authenticationSlice.reducer}
});