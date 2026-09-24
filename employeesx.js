const employees = [
  { id: 101, name: "Amine", department: "IT", role: "Software Engineer", salary: 75000, isActive: true },
  { id: 102, name: "Sarah", department: "HR", role: "HR Manager", salary: 60000, isActive: true },
  { id: 103, name: "Youssef", department: "Sales", role: "Sales Executive", salary: 55000, isActive: false },
  { id: 104, name: "Fatima", department: "IT", role: "Data Analyst", salary: 68000, isActive: true },
  { id: 105, name: "Karim", department: "Marketing", role: "Marketing Director", salary: 85000, isActive: true }
];
const averageSalary = employees.reduce((sum, employees) => sum + employees.salary, 0)
console.log("average salary of all emplpyees:", averageSalary / employees.length);
// Practice idea: Create an array of just the names of the employees in the IT department