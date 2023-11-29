package com.allcows.allcows.Model;

import javax.persistence.*;

@Entity
@Table(name = "logindetails")
public class LoginModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId; // Use camelCase for variable names
    private String firstName; // Use camelCase for variable names

    // Constructors, getters, and setters (generated or manually implemented) go here

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}
