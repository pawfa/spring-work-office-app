package com.workoffice.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Offer {

    @Id
    private String id;

    private String title;
    private String description;

    public Offer() {
    }

    public Offer(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
