import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../theme.js"

const themeSwitchSlice = createSlice({
    name: "themeButton",
    initialState: {
        darkTheme: false,
    },
    reducers: {
        toggleDarkTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
        toggleBackgroundColor: (state) => {
            state.darkTheme ?
                document.body.style.backgroundColor = theme.colors.mineShaft :
                document.body.style.backgroundColor = theme.colors.lightGrey;
        },
        toggleColor: (state) => {
            state.darkTheme ?
                document.body.style.color = theme.colors.teal :
                document.body.style.color = "black";
        },
    }
});

export const {
    toggleDarkTheme,
    toggleBackgroundColor,
    toggleColor, } = themeSwitchSlice.actions;

export const selectDarkTheme = state => state.themeButton.darkTheme;

export default themeSwitchSlice.reducer;