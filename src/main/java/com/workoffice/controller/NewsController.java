package com.workoffice.controller;

import com.workoffice.entity.News;
import com.workoffice.service.NewsService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class NewsController {

    private NewsService newsService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/get/news")
    public List<News> getNews() {
        List<News> lista = newsService.findAll();
        logger.info("Pobieram newsy");
        return lista;
    }

    @PostMapping("/put/news")
    public void putNews(@RequestBody News news) {
        newsService.save(news);
    }

}
