package com.workoffice.security;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountCredentials {

    //name of user field in angular client
    @JsonProperty("email")
    private String username;
    //name of user field in angular client
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
