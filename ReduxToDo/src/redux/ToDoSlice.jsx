import { createSlice } from '@reduxjs/toolkit';

const ToDoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn Redux", completed: true },
        { id: 3, title: "Learn React Router", completed: false },
        { id: 4, title: "Learn Redux Toolkit", completed: false },
        { id: 5, title: "Learn React Query", completed: true },
    ],

    reducers: {
        AddToDo: (state, action) => {
            const NewToDo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(NewToDo);
        }
    }
})

export const { AddToDo } = ToDoSlice.actions;

export default ToDoSlice.reducer