import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'exam',
  initialState: {
    exam: {},
    questions: [],
    score: undefined
  },
  reducers: {
    startExam: (state, action: {type: string, payload: any}) => {
        state.exam = action.payload.exam;
        state.questions =  action.payload.questions;
    },
  }
});

export const { startExam } = counterSlice.actions ;

export const store = configureStore({
  reducer: counterSlice.reducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
