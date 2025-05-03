import React from "react";

const Header = ({ role, onLogout }) => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CUNY Career Link</h1>

      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Red dot or badge */}
          <span className="absolute top-0 right-0 block h-4 w-4 text-xs rounded-full bg-red-500 text-white text-center leading-tight">
            2
          </span>
        </div>

        {/* Avatar Circle */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 font-semibold">
          SR
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
