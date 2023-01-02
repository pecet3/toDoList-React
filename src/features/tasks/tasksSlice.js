import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: task}) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks[index].done = !tasks[index].done;
        },
        setAllTasksDone: ({ tasks }) => {
            tasks.forEach((task) => task.done = true);
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index,1);
        },
        removeAllTasks: ({ tasks }) => {
            tasks.splice(0,tasks.length);
        },
    }
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllTasksDone, removeTask, removeAllTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export const selectIsAllDone = state => selectTasks(state).tasks.every(({done}) => done);
export const selectTasksLenght = state => selectTasks(state).tasks.length;
export default tasksSlice.reducer;
