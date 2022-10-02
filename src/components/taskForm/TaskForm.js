import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ tasks, create }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { id: tasks.length + 1, title, time, date }
        create(newTask)
        setTitle('')
        setDate(null)
        setTime(new Date())
    }

    return (
        <div className="ListForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                        type="time"
                        value={time}
                        placeholder="Enter title"
                        onChange={(e) => setTime(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Date</Form.Label>
                    <DatePicker
                        selected={date}
                        minDate={new Date()}
                        dateFormat='dd/MM/yyyy'
                        onChange={date => setDate(date)}
                    />
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default TaskForm