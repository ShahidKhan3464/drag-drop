import React, { useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move'

const Tasks = ({ tasks, setTasks, showTimer }) => {
    const [disable, setDisable] = useState({})

    const handleStart = (value) => {
        setDisable({ title: value })
        showTimer(value)
    }

    const SortableItem = SortableElement(({ value }) => {
        return (
            <div className='item'>
                <div>{value}</div>
                <button
                    onClick={() => handleStart(value)}
                    disabled={!disable.title ? false : disable.title !== value}
                    className={`${disable.title === value ? 'startBtn' : disable.title ? 'disableBtn' : 'startBtn'}`}
                >
                    {disable.title === value ? 'pending' : disable.title ? 'disable' : 'start'}
                </button>
            </div >
        )
    })

    const SortableList = SortableContainer(({ tasks }) => {
        return (
            <div className="list-items">
                {tasks.map((task, index) => (
                    <SortableItem key={task.id} index={index} value={task.title} />
                ))}
            </div>
        );
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const sorted = arrayMoveImmutable(tasks, oldIndex, newIndex)
        setTasks(sorted)
    };

    return (
        <div className='Task'>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>List Items:</h3>
            <SortableList tasks={tasks} onSortEnd={onSortEnd} />
        </div>
    )
}

export default Tasks