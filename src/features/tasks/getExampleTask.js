export const getExampleTasks = async () => {
    const response = await fetch("/toDoList-React/exampleTasks.json");

    if (!response.ok) {
        throw new Error(response.text);
    }

    return await response.json();
};