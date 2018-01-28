package com.workoffice.service;

import com.workoffice.entity.User;
import com.workoffice.repository.UserRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public <S extends User> S save(S s) {
        return userRepository.save(s);
    }

    @Override
    public User findByEmail(String email) {
        User us = userRepository.findByEmail(email);
        logger.info(us.getPassword());
        logger.info(email);
        return userRepository.findByEmail(email);
    }
}
