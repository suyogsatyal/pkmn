import React from 'react';
import './loading.css'; // Import CSS for styling

function Loading() {
  return (
    // Loading backdrop with a centered grid and a spinning pokeball animation
    <div className="loader-backdrop z-50 h-screen w-screen fixed top-0 left-0 grid place-items-center bg-gray-300">
      {/* Pokeball animation */}
      <div className="pokeball"></div>
    </div>
  );
}

export default Loading;