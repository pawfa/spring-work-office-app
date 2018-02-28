package com.workoffice.controller;

import com.workoffice.entity.Emp;
import com.workoffice.entity.User;
import com.workoffice.entity.Person;
import com.workoffice.service.Exceptions.UserExistsException;
import com.workoffice.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;


@CrossOrigin
@RestController
public class UsersController {

    private UserService userService;
    private final Log logger = LogFactory.getLog(getClass());

    @ExceptionHandler({ UserExistsException.class })
    public ResponseEntity<Object> handleAccessDeniedException(Exception ex, WebRequest request) {
        return new ResponseEntity<Object>(
                ex.getMessage(), new HttpHeaders(), HttpStatus.FORBIDDEN);
    }

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/all")
    public Iterable<User> getAllEmployees() {
        return userService.findAll();
    }

    @PostMapping("/add/person")
    public ResponseEntity addUser(@RequestBody Person person) throws UserExistsException {
        logger.info(person.getEmail());
        userService.save(person);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/add/emp")
    public ResponseEntity addEmployee(@RequestBody Emp emp) throws UserExistsException {
        logger.info(emp.getEmail());
        userService.save(emp);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/profile")
    public User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        logger.info(currentPrincipalName);
        User us = userService.findByEmail(authentication.getName());
        return us;
    }


}
