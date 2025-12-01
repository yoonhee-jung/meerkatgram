import { configureStore } from "@reduxjs/toolkit";
import postIndexSlice from "./slices/postIndexSlice.js";


export default configureStore({
  reducer: {
    postIndex: postIndexSlice
  }
});