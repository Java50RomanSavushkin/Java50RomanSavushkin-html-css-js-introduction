function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, city, country, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel-Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "NY", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Viktor", 2003, 10000, "Arad", "Israel")
]

//HW-18
function getEmployee(employees, id) {
    return employees.find(function (empl) {
        return empl.id === id;
    })
}
//console.log(getEmployee(employees, 128));

function getEmployeesSalary(employees, salaryFrom, salaryTo) {
    const emplAr = [];
    employees.forEach(function (empl) {
        if (empl.salary >= salaryFrom && empl.salary <= salaryTo) {
            emplAr.push(empl);
        }
    });
    return emplAr;
}
//console.log(getEmployeesSalary(employees, 15000, 20000))

function getEmployeesByCity(employees, city) {
    const emplAr = [];
    employees.forEach(function (empl) {
        if (empl.address.city === city) {
            emplAr.push(empl);
        }
    })
    return emplAr;
}
//console.log(getEmployeesByCity(employees, "Lod"))

function getEmployeeNames(employees) {
    const emplAr = employees.map(function (empl) {
        return empl.name
    })
    return emplAr;
}
//console.log(getEmployeeNames(employees))

function sortEmployeesByAge(employees) {
    return employees.sort(function (a, b) {
        return b.birthYear - a.birthYear;
    })
}
//console.log(sortEmployeesByAge(employees))

function computeSalaryBudget(employees) {
    return employees.reduce(function (acc, cur) {
        return acc + cur.salary;
    }, 0)
}
//console.log(computeSalaryBudget(employees));