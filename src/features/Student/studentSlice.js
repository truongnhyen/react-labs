import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';

//vi getRTKStudentList la 1 ham async khong the viet truc tiep vao reducer ben duoi
//nen phai dung ham createAsyncThunk
export const getRTKStudentList = createAsyncThunk(
  'studentSlice/getRTKStudentList',
  async (payload) => {
    const response = await studentApi.getAll(payload);
    return response;
  }
);

const studentSlice = createSlice({
  name: 'rtkStudents',
  initialState: {
    list: [],
  },
  reducer: {
    resetStudentList(state) {
      state.list = [];
    },
  },
  extraReducers: {
    //[getRTKStudentList.fulfilled] chi la 1 chuoi ma thunk da dinh nghia san voi 'fulfilled'
    [getRTKStudentList.fulfilled]: (state, action) => {
      state.list = action.payload.data || [];
    },
  },
});

const { reducer, actions } = studentSlice;
export const { resetStudentList } = actions;
export default reducer;
