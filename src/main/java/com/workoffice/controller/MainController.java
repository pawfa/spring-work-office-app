package com.workoffice.controller;
import com.workoffice.entity.Employee;
import com.workoffice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@CrossOrigin
@RestController
public class MainController {

    private EmployeeService employeeService;

    @Autowired
    public MainController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @RequestMapping("/")
    public Map<String,Object> home() {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

    @GetMapping("/get/")
    public Map<String,Object> get(@RequestParam(value = "key") String key) {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        model.put("key", key);
        return model;
    }

    @GetMapping("/get/{id}")
    public Map<String,Object> getId(@PathVariable(value = "id") String id) {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", id);
        model.put("content", "Hello World");
        return model;
    }

    @GetMapping("/all")
    public Iterable<Employee> getAll() {
        return employeeService.findAll();
    }

    @PostMapping("/add")
    public Employee add(@RequestBody Employee emp) {
        return employeeService.save(emp);
    }
}
