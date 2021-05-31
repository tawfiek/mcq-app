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

    answer: (state, action: {type: string, payload: {questionID: string, optionID: string}}) => {

      const qIndex = state.questions.findIndex((q: any) => q._id === action.payload.questionID);

      if (qIndex > -1 )  {
        (state.questions[qIndex] as any).userAnswerID = action.payload.optionID
      }
    },

    setScore: (state, action: {type: string, payload: any}) => {
      state.score = action.payload.score;
    }
  }
});

export const { startExam, answer, setScore} = counterSlice.actions ;

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
