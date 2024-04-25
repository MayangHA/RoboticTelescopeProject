import React from 'react';
import { createBrowserRouter, BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Router from './Router/Index'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;