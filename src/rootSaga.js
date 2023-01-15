import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import { themeButtonSaga } from "./Navigation/themeButtonSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(), 
        themeButtonSaga(),
    ]);
}