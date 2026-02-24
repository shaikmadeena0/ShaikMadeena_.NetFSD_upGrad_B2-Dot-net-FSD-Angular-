let tasks = [];
const addTask = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks.push(task);
            resolve(`Task "${task}" added successfully`);
        }, 1000);
    });
};
const deleteTask = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks = tasks.filter(t => t !== task);
            resolve(`Task "${task}" deleted successfully`);
        }, 1000);
    });
};
const listTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Current Tasks: ${tasks.join(", ")}`);
        }, 1000);
    });
};
export { addTask, deleteTask, listTasks };
