import { addTask, deleteTask, listTasks } from './taskManagerPromise4-2.js';

addTask("Learn JavaScript")
    .then(msg => {
        console.log(msg);
        return addTask("Build Project");
    })
    .then(msg => {
        console.log(msg);
        return listTasks();
    })
    .then(msg => {
        console.log(msg);
        return deleteTask("Learn JavaScript");
    })
    .then(msg => {
        console.log(msg);
        return listTasks();
    })
    .then(msg => console.log(msg))
    .catch(error => console.log(error));
