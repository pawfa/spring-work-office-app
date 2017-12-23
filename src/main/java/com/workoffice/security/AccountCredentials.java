package com.workoffice.security;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountCredentials {

    @JsonProperty("_email")
    private String username;
    @JsonProperty("_password")
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
