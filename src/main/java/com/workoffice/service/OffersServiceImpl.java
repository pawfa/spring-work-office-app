package com.workoffice.service;

import com.workoffice.entity.Offer;
import com.workoffice.repository.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

        return offersRepository.findAll();
    }

    @Override
    public <S extends Offer> S save(S s) {
        return offersRepository.save(s);
    }
}
