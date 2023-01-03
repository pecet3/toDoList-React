import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));

    } catch (error) {
        yield call(alert, "coś poszło nie tak");
        yield call(console.error, error.message);
    }
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};

