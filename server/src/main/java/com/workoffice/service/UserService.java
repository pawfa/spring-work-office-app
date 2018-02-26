package com.workoffice.service;

import com.workoffice.entity.User;
import com.workoffice.service.Exceptions.UserExistsException;

import java.util.List;


public interface UserService {

    List<User> findAll();
    <S extends User> S save(S s) throws UserExistsException;
    User findByEmail(String email);

    boolean existsByEmail(String email);
}
