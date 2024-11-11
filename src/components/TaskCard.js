import React, { useState } from 'react';

const TaskCard = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEditTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <div className={`p-4 rounded-lg shadow-lg ${task.completed ? 'bg-green-100' : 'bg-yellow-100'}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
            ) : (
                <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                </h3>
            )}

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`px-2 py-1 text-sm font-medium rounded ${task.completed ? 'bg-gray-400 text-white' : 'bg-green-500 text-white'}`}
                >
                    {task.completed ? 'Mark as Pending' : 'Complete'}
                </button>

                {isEditing ? (
                    <button
                        onClick={handleSaveClick}
                        className="px-2 py-1 text-sm font-medium bg-blue-500 text-white rounded"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="px-2 py-1 text-sm font-medium bg-blue-500 text-white rounded"
                    >
                        Edit
                    </button>
                )}

                <button
                    onClick={() => onDeleteTask(task.id)}
                    className="px-2 py-1 text-sm font-medium bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
