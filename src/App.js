import './App.css';
// External Libraries
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from 'react-router-dom';
// Pages
import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import ConsumerUnit from './pages/ConsumerUnit';
import UnitRegister from './pages/UnitRegister';
import MonthlyConsumption from './pages/MonthlyConsumption';
import UnitEdit from './pages/UnitEdit';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<Logon />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/consumer_unit" element={<ConsumerUnit />} />
      <Route path="/unit_register" element={<UnitRegister />} />
      <Route path="/consumer_unit/:id" element={<UnitEdit/>} />
      <Route path="/monthly_consumption" element={<MonthlyConsumption />} />
    </Routes>
    </>
  );
}

export default App;
