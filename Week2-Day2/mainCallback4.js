import { addTask, deleteTask, listTasks } from './taskManagerCallback.js';
addTask("Learn JavaScript", (msg) => {
    console.log(msg);
    addTask("Build Project", (msg) => {
        console.log(msg);
      listTasks((msg) => {
            console.log(msg);
             deleteTask("Learn JavaScript", (msg) => {
                console.log(msg);
               listTasks((msg) => {
                    console.log(msg);
                });
            });
        });
    });
});
