package com.workoffice.repository;

import com.workoffice.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

        List<User> findAll();
        @Override
        <S extends User> S save(S s);
        User findByEmail(String email);
}
