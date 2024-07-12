import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoCall from './components/VideoCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<VideoCall/>} />
      </Routes>
    </Router>
  );
}

export default App;
