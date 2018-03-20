package com.workoffice.controller;

import com.workoffice.entity.Offer;
import com.workoffice.entity.User;
import com.workoffice.service.Exceptions.UserExistsException;
import com.workoffice.service.OffersService;
import com.workoffice.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/offers")
public class OffersController {

    private OffersService offersService;
    private UserService userService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public OffersController(OffersService offersService, UserService userService) {
        this.offersService = offersService;
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<Offer> getOffers() {
        List<Offer> lista = offersService.findAll();
        logger.info("Retrieving all offers from database");
        return lista;
    }

    @GetMapping("/newest")
    public List<Offer> getNewestOffers() {
        List<Offer> lista = offersService.findTwoNewest();
        logger.info("Retrieving two newest offers from database");
        return lista;
    }

    @GetMapping("/{id}")
    public Offer getOfferFromId(@PathVariable(value = "id") String id) {
        Offer offer = offersService.findOfferById(id);
        return offer;
    }

    @GetMapping(value = "/search", params = {"searchTerm","category"})
    public List<Offer> getOfferFromSearchTerm(@RequestParam(value = "searchTerm") String searchTerm, @RequestParam(value = "category") String category) {
        List<Offer> offers = offersService.searchOffer(category,searchTerm);
        logger.info("Search term: "+searchTerm);
        return offers;
    }

    @GetMapping("/profile")
    public List<Offer> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        logger.info(currentPrincipalName);
        int userId = 0;
        try {
            userId = userService.findByEmail(authentication.getName()).getId();
            logger.info(userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return offersService.findOfferByUserId(userId);
    }

    @PostMapping("/")
    public void putOffer(@RequestBody Offer offer) {
        offersService.insert(offer);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable(value = "id") String id) {
        logger.info(id);
        offersService.deleteOffer(id);
    }

}
