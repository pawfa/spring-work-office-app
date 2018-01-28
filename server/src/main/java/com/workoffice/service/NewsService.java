package com.workoffice.service;

import com.workoffice.entity.News;

import java.util.List;

public interface NewsService {

    List<News> findAll();

    <S extends News> S save(S s);
}
