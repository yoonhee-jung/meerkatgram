import {createSlice} from '@reduxjs/toolkit';
import { postIndexThunk } from '../thunk/postIndexThunk';

const initialState = {
  //여러 개: list, data..
  list: null,
  page: 0,
}

const slice = createSlice({
  name: 'postIndex',
  initialState,
  reducers: {
    clearPostIndex(state) {
      state.list = null;
      state.page = 0;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(postIndexThunk.fulfilled, (state, action) => {
        //const {posts, page} = action.payload.data; 길면 구조분해 쓰면 됨

        //리스트가 비어있는지 체크
        if(state.list) {
          state.list = [...state.list, ...action.payload.data.posts];
        } else {
          state.list = action.payload.data.posts;
        }
        //action은 성공/실패 등 많은 정보 담겨있음..

        //현재 페이지 저장
        state.page = action.payload.data.page;

      })

  }, //일반적으로 extraReducer 쓸 때는 화살표 함수 씀

});

export const {
  clearPostIndex, 
} = slice.actions;

export default slice.reducer;