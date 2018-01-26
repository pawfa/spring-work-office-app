package com.workoffice.service;

import com.workoffice.entity.User;

import java.util.List;


public interface UserService {

    List<User> findAll();
    <S extends User> S save(S s);
    User findByEmail(String email);
}
