import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
