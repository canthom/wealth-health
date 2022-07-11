import React, { useState, useEffect } from 'react';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import EmployeeList from './pages/employee-list/EmployeeList';
import Header from './components/header/Header';

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  // Enregistrer les changements du state dans le local storage
  useEffect(() => {
    if (employeeData.length > 0) {
      localStorage.setItem('table', JSON.stringify(employeeData));
    }
  }, [employeeData]);

  // Récupérer les informations dans le local storage
  useEffect(() => {
    if (localStorage.table) {
      setEmployeeData(JSON.parse(localStorage.getItem('table')));
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home updateData={setEmployeeData} />} />
        <Route
          path="/employee-list"
          element={<EmployeeList data={employeeData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
