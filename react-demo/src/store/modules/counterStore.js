import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    inscrement(state, action) {
      state.count = action.payload;
    },
    decrement(state, action) {
      state.count = action.payload;
    },
  },
});

const { inscrement, decrement } = counterStore.actions;

const reducer = counterStore.reducer;

export { inscrement, decrement };

export default reducer;
