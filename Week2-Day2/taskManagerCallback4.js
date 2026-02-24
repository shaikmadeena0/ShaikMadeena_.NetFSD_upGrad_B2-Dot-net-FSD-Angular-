let tasks = [];
const addTask = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback(`Task "${task}" added successfully`);
    }, 1000);
};
const deleteTask = (task, callback) => {
    setTimeout(() => {
        tasks = tasks.filter(t => t !== task);
        callback(`Task "${task}" deleted successfully`);
    }, 1000);
};
const listTasks = (callback) => {
    setTimeout(() => {
        callback(`Current Tasks: ${tasks.join(", ")}`);
    }, 1000);
};
export { addTask, deleteTask, listTasks };
