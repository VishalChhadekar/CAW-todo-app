import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }) => {
  return (
    <ul className="my-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.text}
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => {
              const newText = prompt("Edit task:", task.text);
              if (newText) onEditTask(task.id, newText);
            }} className="text-blue-500 hover:underline">
              Edit
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:underline">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
