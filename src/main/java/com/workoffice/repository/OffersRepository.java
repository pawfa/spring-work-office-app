package com.workoffice.repository;

import com.workoffice.entity.Offer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffersRepository extends MongoRepository<Offer, String> {

    @Override
    List<Offer> findAll();

    @Override
    <S extends Offer> S save(S s);
}
