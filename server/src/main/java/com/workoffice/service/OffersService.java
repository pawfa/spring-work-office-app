package com.workoffice.service;

import com.workoffice.entity.Offer;

import java.util.List;

public interface OffersService {
    List<Offer> findAll();
    <S extends Offer> S insert(S s);
    Offer findOfferById(String id);
    List<Offer> searchOffer(String category,String searchTerm);
    List<Offer> findTwoNewest();
    void deleteOffer(String id);

    List<Offer> findOfferByUserId(int id);
}
