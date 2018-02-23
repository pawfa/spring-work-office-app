package com.workoffice.repository;

import com.workoffice.entity.Offer;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffersRepository extends MongoRepository<Offer, String> {

    @Override
    List<Offer> findAll(Sort sort);
    @Override
    <S extends Offer> S save(S s);
    Offer findOfferById(String id);
    List<Offer> findFirst2ByOrderByIdDesc();

    @Query("{'$and':[{'category' : ?0}, {'$or':[ {'description' : {$regex : '.*?1.*', $options: 'i'}}, {'title' : {$regex : '.*?1.*', $options: 'i'}}]}]}")
    List<Offer> findOfferByCategoryAndDescriptionOrTitleContaining(String category, String searchTerm);
}
