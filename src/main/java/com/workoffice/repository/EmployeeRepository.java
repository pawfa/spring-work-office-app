package com.workoffice.repository;

import com.workoffice.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

        Iterable<Employee> findAll();
        @Override
        <S extends Employee> S save(S s);
        Employee findByEmail(String email);
}
