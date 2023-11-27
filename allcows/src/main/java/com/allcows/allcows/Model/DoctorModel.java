package com.allcows.allcows.Model;

import javax.persistence.*;

@Entity
@Table(name = "doctors")
public class DoctorModel {
    @Id
    @Column(nullable = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Name;
    private int age;
    private String Location;
    private String Experience;
    private String image;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getExperience() {
        return Experience;
    }

    public void setExperience(String experience) {
        Experience = experience;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
