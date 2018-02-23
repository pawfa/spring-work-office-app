package com.workoffice.security;

import com.workoffice.entity.User;
import com.workoffice.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    UserService userService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        //checking if user is in database
        User user;
        try {
            user = userService.findByEmail(s);
            authorities.add(new SimpleGrantedAuthority(user.getUserType()));
            return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
        } catch (Exception e) {
            throw new UsernameNotFoundException("User not found");
        }
    }
}
