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
        logger.info("Pobieram oferty");
        return lista;
    }

    @PostMapping("/put/offer")
    public void putOffer(@RequestBody Offer offer) {
        offersService.insert(offer);
    }

}
