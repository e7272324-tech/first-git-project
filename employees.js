const employees = [
  { id: 101, name: "Amine", department: "IT", role: "Software Engineer", salary: 75000, isActive: true },
  { id: 102, name: "Sarah", department: "HR", role: "HR Manager", salary: 60000, isActive: true },
  { id: 103, name: "Youssef", department: "Sales", role: "Sales Executive", salary: 55000, isActive: false },
  { id: 104, name: "Fatima", department: "IT", role: "Data Analyst", salary: 68000, isActive: true },
  { id: 105, name: "Karim", department: "Marketing", role: "Marketing Director", salary: 85000, isActive: true }
];
const itEmployees = employees.filter(employee => employee.department === "IT")
console.log("Employees in the IT departement:");
console.log(itEmployees);
// Practice idea: Create an array of just the names of the employees in the IT department