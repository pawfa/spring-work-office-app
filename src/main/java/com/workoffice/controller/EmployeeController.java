package com.workoffice.controller;

import com.workoffice.entity.Employee;
import com.workoffice.service.EmployeeService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
public class EmployeeController {

    private EmployeeService employeeService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @GetMapping("/all")
    public Iterable<Employee> getAllEmployees() {
        return employeeService.findAll();
    }

    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee emp) {
        return employeeService.save(emp);
    }

}
