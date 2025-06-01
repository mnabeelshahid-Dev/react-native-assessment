import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
    id: number;
    score: number;
}

interface QuestionState {
    answers: Answer[];
}

const initialState: QuestionState = {
    answers: [],
};

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        submitAnswers: (state, action: PayloadAction<Answer[]>) => {
            state.answers = action.payload;
        },
           resetSelectedAnswers: (state) => {
           state.answers = [];
       },
    },
});

export const { submitAnswers, resetSelectedAnswers } = questionSlice.actions;
export default questionSlice.reducer;
