import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;

// 异步请求

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://127.0.0.1:5600");
    dispatch(setChannels(res.data));
    console.log(res);
  };
};

export { fetchChannelList };

const reducer = channelStore.reducer;
export default reducer;
