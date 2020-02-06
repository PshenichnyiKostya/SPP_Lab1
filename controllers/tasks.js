import Task from '../models/Task';

module.exports = {
    getTasks: async (req, res) => {
        const {status} = req.query;
        let tasks;
        if (status) {
            tasks = await Task.find({status: status});
        } else {
            tasks = await Task.find({});
        }
        res.render('tasks', {tasks});
    },
    uploadTask: async (req, res) => {
        const {data, status, name} = req.body;
        const task = new Task({
            data,
            status,
            name
        });
        let tasks = await Task.find({});
        await task.save();
        tasks.push(task);
        res.redirect('tasks');
    },

};