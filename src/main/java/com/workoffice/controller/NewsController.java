package com.workoffice.controller;

import com.workoffice.entity.News;
import com.workoffice.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class NewsController {

    private NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/get/news")
    public List<News> getNews() {
        List<News> lista = newsService.findAll();
        return lista;
    }

    @PostMapping("/put/news")
    public void putNews(@RequestBody News news) {
        newsService.save(news);
    }

}
