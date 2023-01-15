import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import { themeSwitchSaga } from "./Navigation/ThemeSwitch/themeSwitchSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(), 
        themeSwitchSaga(),
    ]);
}