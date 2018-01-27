package com.workoffice.entity;

import org.hibernate.validator.constraints.Email;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type")
public abstract class User {

        @Id
        @GeneratedValue(strategy= GenerationType.AUTO)
        private int id;

        @Column(name = "email")
        @Email
        private String email;
        @Column(name = "password")
        private String password;

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String getEmail() {
                return email;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public String getPassword() {
                return password;
        }

        public void setPassword(String password) {
                this.password = password;
        }
}
