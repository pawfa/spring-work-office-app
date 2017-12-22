package com.workoffice.service;

import com.workoffice.entity.Employee;


public interface EmployeeService {

    Iterable<Employee> findAll();
    <S extends Employee> S save(S s);
    Employee findByEmail(String email);
}
