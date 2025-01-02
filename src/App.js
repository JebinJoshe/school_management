import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import EnquiryForm from './components/enquiry/EnquiryForm';
import Login from './components/login/Login';
import AdminDashboard from './components/admin/AdminDashboard';


function App() {
  return (
    <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enquiry' element={<EnquiryForm />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
