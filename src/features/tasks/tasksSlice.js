import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: task }) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks[index].done = !tasks[index].done;
        },
        setAllTasksDone: ({ tasks }) => {
            tasks.forEach((task) => task.done = true);
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        removeAllTasks: ({ tasks }) => {
            tasks.splice(0, tasks.length);
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
            state.loading = "Ładowanie...";
        },
        fetchExampleTasksSuccess: (state) => {
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.error = true;
            state.error = "Ups... Wystąpił Błąd🤔"
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    }
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    setAllTasksDone,
    removeTask,
    removeAllTasks,
    fetchExampleTasks,
    setTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsAllDone = state => selectTasksState(state).tasks.every(({ done }) => done);
export const selectTasksStateLenght = state => selectTasksState(state).tasks.length;
export const selectFetchLoading = state => state.tasks.loading;
export const selectFetchError = state => state.tasks.error;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === '') {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};



export default tasksSlice.reducer;
