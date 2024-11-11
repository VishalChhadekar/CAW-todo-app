import React, { useEffect } from 'react';

const NotificationBanner = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`${type === 'success' ? 'bg-green-500' : 'bg-red-500'
                } text-white px-4 py-2 rounded-md fixed top-4 right-4 shadow-lg z-50`}
        >
            <div className="flex items-center justify-between">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-xl">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default NotificationBanner;
