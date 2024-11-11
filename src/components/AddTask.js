import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            onAddTask(task.trim());
            setTask('');
        }
    };

    return (
        <div className="flex items-center gap-4 my-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleAddTask}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Add Task
            </button>
        </div>
    );
};

export default AddTask;
