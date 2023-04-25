import User from "../models/userModel.js";
import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const {userID, taskName, taskDescription} = req.body;
    const taskToAdd = new Task({
      taskName,
      taskDescription
    })

    const updatedUser = await User.findByIdAndUpdate(userID, {$push: {taskIds: taskToAdd._id}});
    const addedTask = await taskToAdd.save().then();

    res.status(201).json(addedTask);

  } catch (err) {
    console.log('ERROR ADDING USER TASK: ', err);
    res.status(500).json({msg: err});
  }
}

export const updateTaskData = async (req, res) => {
  try {
    const {taskID, updatedTaskTime} = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskID, {totalTaskTime: updatedTaskTime});

    res.status(201).json(updatedTask);

  } catch (err) {
    console.log('ERROR UPDATING USER TASK: ', err);
    res.status(500).json({msg: err});
  }
}

export const getTaskData = async (req, res) => {
  try {

  } catch (err) {
    console.log('ERROR GETTING TASK DATA: ', err);
    res.status(500).json({msg: err});
  }
}

export const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.taskId;
    const deletedTask = await Task.findByIdAndDelete(taskID);

    res.status(201).json(deletedTask);

  } catch (err) {
    console.log('ERROR DELETING TASK DATA: ', err);
    res.status(500).json({msg: err});
  }
}