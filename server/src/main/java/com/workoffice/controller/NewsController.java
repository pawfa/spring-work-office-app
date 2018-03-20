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
@RequestMapping("/news")
public class NewsController {

    private NewsService newsService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/all")
    public List<News> getNews() {
        List<News> lista = newsService.findAll();
        logger.info("Pobieram newsy");
        return lista;
    }

    @PostMapping("/save")
    public void putNews(@RequestBody News news) {
        System.out.println("Otrzymalem newsa "+ news.getParagraph());
        System.out.println("Otrzymalem newsa o id "+ news.getId());
        newsService.save(news);
    }


    @GetMapping("/{id}")
    public News getNewsFromId(@PathVariable(value = "id") String id) {
        News news = newsService.findNewsById(id);
        logger.info("Zwracam oferte o id "+id);
        return news;
    }

    @DeleteMapping("/{id}")
    public void deleteNews(@PathVariable(value = "id") String id) {
        logger.info("usuwam news "+id);
        newsService.deleteNews(id);
    }

}
