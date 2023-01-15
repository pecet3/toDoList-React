import {
    put,
    takeLatest,
} from "redux-saga/effects";
import { toggleBackgroundColor, toggleColor, toggleDarkTheme } from "./themeButtonSlice";

function* toggleDarkThemeHandler() {
    yield put(toggleBackgroundColor());
    yield put(toggleColor());
};

export function* themeButtonSaga() {
    yield takeLatest(toggleDarkTheme.type,toggleDarkThemeHandler);
};
