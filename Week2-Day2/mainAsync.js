import { addTask, deleteTask, listTasks } from './taskManagerAsync.js';

const manageTasks = async () => {
    try {
        let message;

        message = await addTask("Learn JavaScript");
        console.log(message);

        message = await addTask("Build Project");
        console.log(message);

        message = await listTasks();
        console.log(message);

        message = await deleteTask("Learn JavaScript");
        console.log(message);

        message = await listTasks();
        console.log(message);

    } catch (error) {
        console.log(error);
    }
};

manageTasks();
