import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* Шапка или навигация, если хочешь */}
      <Outlet />
    </div>
  );
};

export default App;
