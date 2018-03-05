package com.workoffice.entity;

import javax.persistence.Id;


public class Offer {

    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private int userId;

    public Offer() {
    }

    public Offer(String title, String description, String category, int userId) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.userId = userId;
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

    public int getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", userId=" + userId +
                '}';
    }
}
