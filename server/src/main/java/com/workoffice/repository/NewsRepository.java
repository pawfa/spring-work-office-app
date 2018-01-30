package com.workoffice.repository;

import com.workoffice.entity.News;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends MongoRepository<News, String> {

    @Override
    List<News> findAll(Sort sort);

    @Override
    <S extends News> S save(S s);

    News findNewsById(String id);
}
