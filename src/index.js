import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './GlobalStyle';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const addTask = content => ({
  type: "addTask",
  payload: content,
});

const selectTasks = ({ tasks }) => tasks;

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ]
      }
    default:
      return state;

  }

};

const store = configureStore({ reducer: taskReducer });
console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie1"));
console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie 2"));
console.log(selectTasks(store.getState()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
