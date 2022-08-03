import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  dynamicTotal: 0,
  isLoading: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearData: (state) => {
      state.total = 0;
    },
    addData: (state, action) => {
      //   console.log("add 1: " + action);
      state.total += 1;
    },
    removeData: (state, action) => {
      //   console.log("remove 1: " + action);
      state.total = state.total - 1;
    },
    dynamicAdd: (state, action) => {
      //   console.log("dynamic add: " + action.payload);
      state.dynamicTotal += action.payload;
    },
    dynamicRemove: (state, action) => {
      //   console.log("dynamic remove: " + action.payload);
      state.dynamicTotal -= action.payload;
    },
    dynamicClear: (state) => {
      state.dynamicTotal = 0;
    },
  },
});

// console.log(counterSlice);

export const {
  clearData,
  addData,
  removeData,
  dynamicAdd,
  dynamicRemove,
  dynamicClear,
} = counterSlice.actions;
export default counterSlice.reducer;
