import EmployeeData from "../models/EmployeeDataModel.js";
import AttendanceData from "../models/DataAttendanceModel.js";
import { getEmployeeSalaryData } from "./TransactionController.js";
import { verifyUser } from "../middleware/AuthUser.js";

// Method for employee dashboard
export const employeeDashboard = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;

  const response = await EmployeeData.findOne({
    where: {
      id: userId
    },
    attributes: [
      'id', 'nik', 'employee_name',
      'gender', 'position', 'join_date',
      'status', 'photo', 'access_rights'
    ]
  });

  res.status(200).json(response);
};

// Method to view the salary of a single employee by month
export const viewSingleEmployeeSalaryByMonth = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;
  const user = await EmployeeData.findOne({
    where: {
      id: userId
    }
  });

  try {
    const employeeSalaryData = await getEmployeeSalaryData();

    const response = await AttendanceData.findOne({
      attributes: [
        'month'
      ],
      where: {
        month: req.params.month
      }
    });

    if (response) {
      const salaryDataByMonth = employeeSalaryData.filter((salaryData) => {
        return salaryData.id === user.id && salaryData.month === response.month;
      }).map((salaryData) => {
        return {
          month: response.month,
          year: salaryData.year,
          nik: user.nik,
          employee_name: user.employee_name,
          gender: user.gender,
          position: user.position,
          basic_salary: salaryData.basic_salary,
          transport_allowance: salaryData.transport_allowance,
          meal_allowance: salaryData.meal_allowance,
          deductions: salaryData.deductions,
          total_salary: salaryData.total,
        };
      });
      return res.json(salaryDataByMonth);
    }

    res.status(404).json({ msg: `Salary data for the month of ${req.params.month} not found for employee ${user.employee_name}` });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Method to view the salary of a single employee by year
export const viewSingleEmployeeSalaryByYear = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;
  const user = await EmployeeData.findOne({
    where: {
      id: userId
    }
  });

  try {
    const employeeSalaryData = await getEmployeeSalaryData();
    const { year } = req.params;

    const salaryDataByYear = employeeSalaryData.filter((salaryData) => {
      return salaryData.id === user.id && salaryData.year === parseInt(year);
    }).map((salaryData) => {
      return {
        year: salaryData.year,
        month: salaryData.month,
        nik: user.nik,
        employee_name: user.employee_name,
        gender: user.gender,
        position: user.position,
        basic_salary: salaryData.basic_salary,
        transport_allowance: salaryData.transport_allowance,
        meal_allowance: salaryData.meal_allowance,
        deductions: salaryData.deductions,
        total_salary: salaryData.total,
      };
    });

    if (salaryDataByYear.length === 0) {
      return res.status(404).json({ msg: `Data for the year ${year} not found` });
    }
    res.json(salaryDataByYear);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};