import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface chargeType {
  value: any;
}

export const getCharge = createAsyncThunk('charge/getData', async () => {
  const { data }: any = await axios.get(`http://localhost:3001/charge`);
  return data;
});

export const removeCharge = createAsyncThunk('charge/removeCharge', async (id: any) => {
  await axios.delete(`http://localhost:3001/charge/${id}`);
  return id;
});

// Define the initial state using that type
const initialState: chargeType = {
  value: [],
};

export const chargeSlice = createSlice({
  name: 'charge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharge.fulfilled, (state, action) => {
      return void (state.value = action.payload);
    });

    builder.addCase(removeCharge.fulfilled, (state, action) => {
      return void (state.value = state.value.filter((item: any) => item.id !== action.payload));
    });

    // builder.addCase(updateAstablishContract.fulfilled, (state, action) => {
    //   toast.success('ahihihi');
    //   return void (state.value = action.payload);
    // });
  },
});
// export const { changeContentContract } = chargeSlice.actions;
export default chargeSlice.reducer;
