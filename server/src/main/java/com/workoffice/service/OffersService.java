package com.workoffice.service;

import com.workoffice.entity.Offer;

import java.util.List;

public interface OffersService {
    List<Offer> findAll();
    <S extends Offer> S insert(S s);
    Offer findOfferById(String id);
}
