package com.workoffice.entity;


import javax.persistence.*;

public class News {

    @Id
    private String id;
    private String header;
    private String paragraph;

    public News() {
    }

    public News(String header, String paragraph) {
        this.header = header;
        this.paragraph = paragraph;
    }

    public String getId() {
        return id;
    }

    public String getHeader() {
        return header;
    }

    public String getParagraph() {
        return paragraph;
    }

    @Override
    public String toString() {
        return "News{" +
                "id=" + id +
                ", header='" + header + '\'' +
                ", paragraph='" + paragraph + '\'' +
                '}';
    }
}
