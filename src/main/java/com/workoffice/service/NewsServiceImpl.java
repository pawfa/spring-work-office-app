package com.workoffice.service;

import com.workoffice.entity.News;
import com.workoffice.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    private NewsRepository newsRepository;

    @Autowired
    public NewsServiceImpl(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public List<News> findAll() {
        return newsRepository.findAll(new Sort(Sort.Direction.DESC, "_id"));
    }

    @Override
    public <S extends News> S save(S s) {
        return newsRepository.save(s);
    }
}
