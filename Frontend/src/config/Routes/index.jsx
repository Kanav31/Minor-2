import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/molecules/NotFound';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';
import {
  FormAddJobData,
  FormEditJobData,
  FormAddAttendanceData,
  FormEditAttendanceData,
  FormAddEmployeeData,
  FormEditEmployeeData,
  FormAddDataDeduction,
  FormEditDataDeduction,
  PrintPdfSalaryReport,
  DetailSalaryData,
  PrintPdfSalarySlip,
  PrintPdfAbsenceReport,
  PrintPdfEmployeeSalaryData,
} from '../../components';
import {
  EmployeeData,
  PositionData,
  AttendanceData,
  SalaryData,
  SalaryReport,
  AttendanceReport,
  SalarySlip,
  ChangeAdminPassword,
  EmployeeSalaryData,
  ChangeEmployeePassword,
  DeductionData,
} from '../../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />

      {/* Admin Routes */}
      {/* Admin Master Data */}
      <Route path='/employee-data' element={<EmployeeData />} />
      <Route path='/employee-data/form-data-employee/add' element={<FormAddEmployeeData />} />
      <Route path='/employee-data/edit/:id' element={<FormEditEmployeeData />} />
      <Route path='/position-data' element={<PositionData />} />
      <Route path='/job-data/add' element={<FormAddJobData />} />
      <Route path='/job-data/edit/:id' element={<FormEditJobData />} />

      {/* Admin Transactions */}
      <Route path='/attendance-data' element={<AttendanceData />} />
      <Route path='/attendance-data/add' element={<FormAddAttendanceData />} />
      <Route path='/attendance-data/edit/:id' element={<FormEditAttendanceData />} />
      <Route path='/deduction-data' element={<DeductionData />} />
      <Route path='/deduction-data/add' element={<FormAddDataDeduction />} />
      <Route path='/deduction-data/edit/:id' element={<FormEditDataDeduction />} />
      <Route path='/salary-data' element={<SalaryData />} />
      <Route path='/salary-data/detail/:name' element={<DetailSalaryData />} />
      <Route path='/salary-data/print/salary-slip/:name' element={<PrintPdfSalarySlip />} />

      {/* Admin Reports */}
      <Route path='/report/salary' element={<SalaryReport />} />
      <Route path='/report/salary/print-page' element={<PrintPdfSalaryReport />} />
      <Route path='/report/attendance' element={<AttendanceReport />} />
      <Route path='/report/attendance/print-page' element={<PrintPdfAbsenceReport />} />
      <Route path='/report/salary-slip' element={<SalarySlip />} />
      <Route path='/report/salary-slip/print-page' element={<PrintPdfSalarySlip />} />

      {/* Admin Settings */}
      <Route path='/change-password' element={<ChangeAdminPassword />} />

      {/* Employee Routes */}
      {/* Employee Salary Dashboard */}
      <Route path='/employee-salary-data' element={<EmployeeSalaryData />} />
      <Route path='/employee-salary-data/print-page' element={<PrintPdfEmployeeSalaryData />} />
      <Route path='/change-employee-password' element={<ChangeEmployeePassword />} />

      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
