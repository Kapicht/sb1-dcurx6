import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Unusual energy spike detected', read: false },
    { id: 2, message: 'New energy-saving recommendation available', read: false },
  ]);

  const toggleNotifications = () => setIsOpen(!isOpen);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={toggleNotifications}
        className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`px-4 py-2 text-sm ${notif.read ? 'text-gray-700' : 'text-green-900 font-semibold'}`}
                  role="menuitem"
                  onClick={() => markAsRead(notif.id)}
                >
                  {notif.message}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-700">No new notifications</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;