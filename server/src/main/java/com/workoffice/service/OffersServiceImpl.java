package com.workoffice.service;

import com.workoffice.entity.Offer;
import com.workoffice.repository.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OffersServiceImpl implements OffersService {

    private OffersRepository offersRepository;

    @Autowired
    public OffersServiceImpl(OffersRepository offersRepository) {
        this.offersRepository = offersRepository;
    }

    @Override
    public List<Offer> findAll() {
        return offersRepository.findAll(new Sort(Sort.Direction.DESC, "_id"));
    }

    @Override
    public <S extends Offer> S insert(S s) {
        return offersRepository.save(s);
    }

    @Override
    public Offer findOfferById(String id) {
        return offersRepository.findOfferById(id);
    }

    @Override
    public List<Offer> searchOffer( String category,String searchTerm) {
        if(category.equals("All")){
            return offersRepository.findAll();
        }
        return offersRepository.findOfferByCategoryAndDescriptionOrTitleContaining(category,searchTerm);
    }

    @Override
    public List<Offer> findTwoNewest() {
        return offersRepository.findFirst2ByOrderByIdDesc();
    }

    @Override
    public void deleteOffer(String id) {
        offersRepository.deleteOfferById(id);
    }
}
