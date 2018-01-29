package com.workoffice.entity;

import javax.persistence.*;

@Entity
@DiscriminatorValue("emp")
public class Emp extends User {

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
