package com.workoffice.service;

import com.workoffice.entity.User;
import com.workoffice.repository.UserRepository;
import com.workoffice.service.Exceptions.UserExistsException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final Log logger = LogFactory.getLog(getClass());
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public <S extends User> S save(S s) throws UserExistsException {
        if(existsByEmail(s.getEmail())){
            throw new UserExistsException("User already exists in database");
        }
        logger.info(s.getEmail());
        return userRepository.save(s);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }
}
