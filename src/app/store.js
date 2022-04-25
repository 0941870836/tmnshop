
import userReducer from '../features/Auth/components/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {

    user: userReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;