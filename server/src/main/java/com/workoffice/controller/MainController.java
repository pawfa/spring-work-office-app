package com.workoffice.controller;

import com.workoffice.entity.News;
import com.workoffice.entity.Offer;
import com.workoffice.service.NewsService;
import com.workoffice.service.OffersService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
public class MainController {


    private final Log logger = LogFactory.getLog(getClass());
    private NewsService newsService;
    private OffersService offersService;

    @Autowired
    public MainController(NewsService newsService, OffersService offersService) {
        this.newsService = newsService;
        this.offersService = offersService;
    }

//    @RequestMapping("/")
//    public @ResponseBody String getUsers() {
//        return "{\"users\":[{\"firstname\":\"Richard\", \"lastname\":\"Feynman\"}," +
//                "{\"firstname\":\"Marie\",\"lastname\":\"Curie\"}]}";
//    }

    @GetMapping("/")
    public List<Object> getHomePageData() {
        List<Offer> offerList = offersService.findAll();
        List<News> newsList = newsService.findAll();
        List<Object> list  = new ArrayList<>();
        list.add(offerList);
        list.add(newsList);
        logger.info("Pobieram oferty i newsy");
        return list;
    }

//    @GetMapping("/get/")
//    public Map<String, Object> get(@RequestParam(value = "key") String key) {
//        Map<String, Object> model = new HashMap<String, Object>();
//        model.put("id", UUID.randomUUID().toString());
//        model.put("content", "Hello World");
//        model.put("key", key);
//        return model;
//    }
//
//    @GetMapping("/get/{id}")
//    public Map<String, Object> getId(@PathVariable(value = "id") String id) {
//        Map<String, Object> model = new HashMap<String, Object>();
//        model.put("id", id);
//        model.put("content", "Hello World");
//        return model;
//    }


}
