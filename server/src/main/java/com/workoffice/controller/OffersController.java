package com.workoffice.controller;

import com.workoffice.entity.Offer;
import com.workoffice.service.OffersService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class OffersController {

    private OffersService offersService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public OffersController(OffersService offersService) {
        this.offersService = offersService;
    }

    @GetMapping("/get/offers")
    public List<Offer> getOffers() {
        List<Offer> lista = offersService.findAll();
        logger.info("Retrieving all offers from database");
        return lista;
    }

    @GetMapping("/get/newestOffers")
    public List<Offer> getNewestOffers() {
        List<Offer> lista = offersService.findTwoNewest();
        logger.info("Retrieving two newest offers from database");
        return lista;
    }

    @GetMapping("/get/offer/{id}")
    public Offer getOfferFromId(@PathVariable(value = "id") String id) {
        Offer offer = offersService.findOfferById(id);
        return offer;
    }

    @PostMapping("/put/offer")
    public void putOffer(@RequestBody Offer offer) {
        offersService.insert(offer);
    }

    @DeleteMapping("/delete/offer/{id}")
    public void deleteOffer(@PathVariable(value = "id") String id) {
        logger.info(id);
        offersService.deleteOffer(id);
    }


    @GetMapping(value = "/search", params = {"searchTerm","category"})
    public List<Offer> getOfferFromSearchTerm(@RequestParam(value = "searchTerm") String searchTerm, @RequestParam(value = "category") String category) {
        List<Offer> offers = offersService.searchOffer(category,searchTerm);
        logger.info("Search term: "+searchTerm);
        return offers;
    }

}
