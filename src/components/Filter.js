import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 my-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-md ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`px-4 py-2 rounded-md ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
