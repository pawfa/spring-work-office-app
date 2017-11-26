package com.workoffice.entity;

import javax.persistence.Id;


public class Offer {

    @Id
    private String id;

    private String title;
    private String description;
    private String category;

    public Offer() {
    }

    public Offer(String title, String description, String category) {
        this.title = title;
        this.description = description;
        this.category = category;
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

    public String getCategory() {
        return category;
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
