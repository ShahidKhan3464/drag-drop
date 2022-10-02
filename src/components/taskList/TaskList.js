import React, { useState } from 'react'
import CountDown from '../countDown/CountDown'
import TaskForm from '../taskForm/TaskForm'
import Tasks from '../tasks/Tasks';
import './TaskList.css'

const getTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

const TasksList = () => {
    const [tasks, setTasks] = useState(getTasks)
    const [IsShowTimer, setIsShowTimer] = useState(false)
    const [targetTaskData, setTargetTaskData] = useState()

    if (tasks.length !== 0) localStorage.setItem("tasks", JSON.stringify(tasks));
    const create = (newTask) => setTasks([...tasks, newTask])

    const showTimer = (value) => {
        const target = tasks.filter(task => task.title === value)
        setTargetTaskData(target[0])
        setIsShowTimer(true)
    }

    return (
        <React.Fragment>
            <div className='TasksList'>
                <TaskForm tasks={tasks} create={create} />
                <Tasks tasks={tasks} setTasks={setTasks} showTimer={showTimer} />
            </div>
            {IsShowTimer && <CountDown targetTaskData={targetTaskData} />}
        </React.Fragment>
    )
}

export default TasksList