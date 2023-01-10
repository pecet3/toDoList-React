import {
    takeLatest,
    takeEvery,
    call,
    put,
    delay,
    select
} from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));

    } catch (error) {
        yield call(alert, "coś poszło nie tak");
        yield call(console.error, error.message);
    }
};

function* saveTaskInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTaskInLocalStorageHandler);
};

