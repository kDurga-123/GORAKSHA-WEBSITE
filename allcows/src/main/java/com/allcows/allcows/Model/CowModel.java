package com.allcows.allcows.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cowtable")
public class CowModel {
    @Id
    @Column(nullable = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    private String otherName;

    private String mainuse;

    private String track;

    private String characteristics;

    private String origin;

    private String colour;

    private String shapeandSize;

    private int weight;

    private String image;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getOtherName() {
        return otherName;
    }

    public String getMainuse() {
        return mainuse;
    }

    public String getTrack() {
        return track;
    }

    public String getCharacteristics() {
        return characteristics;
    }

    public String getOrigin() {
        return origin;
    }

    public String getColour() {
        return colour;
    }

    public String getShapeandSize() {
        return shapeandSize;
    }

    public int getWeight() {
        return weight;
    }

    public String getImage() {
        return image;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOtherName(String otherName) {
        this.otherName = otherName;
    }

    public void setMainuse(String mainuse) {
        this.mainuse = mainuse;
    }

    public void setTrack(String track) {
        this.track = track;
    }

    public void setCharacteristics(String characteristics) {
        this.characteristics = characteristics;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setShapeanother(String shapeandSize) {
        this.shapeandSize = shapeandSize;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
