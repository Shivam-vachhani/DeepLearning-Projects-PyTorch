import { configureStore } from "@reduxjs/toolkit";
import { bookapi } from "./services/bookApi";

export const store = configureStore({
  reducer: {
    [bookapi.reducerPath]: bookapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookapi.middleware),
});
