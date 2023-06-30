import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import Home from './components/home'
import './index.css';
import './App.css'
function App() {
  return (
    <div className='text-white'>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
