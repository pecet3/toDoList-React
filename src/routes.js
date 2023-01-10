export const toTasks = () => "/zadania";
export const toAuthor = () => "/autor";

export const toTask = ({id} = { id: ":id" }) => `/zadania/${id}`;