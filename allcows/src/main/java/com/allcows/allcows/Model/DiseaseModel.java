package com.allcows.allcows.Model;


import javax.persistence.*;


@Entity
@Table(name = "students")
public class DiseaseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disease_id")
    private int diseaseId;

    @Column(name = "disease_name")
    private String diseaseName;


    @Column(name = "image1")
    private String image1;

    @Column(name = "image2")
    private String image2;

    @Column(name = "image3")
    private String image3;

    @Column(name = "symptoms")
    private String symptoms;

    public String getSymptoms() {
        return symptoms;
    }


    @Column(length = 20000)
    private String howtocare;

    public String getHowtocare() {
        return howtocare;
    }

    public void setHowtocare(String howtocare) {
        this.howtocare = howtocare;
    }

    @Column(length = 16000)
    private String Basicmedicine;

    public String getBasicmedicine() {
        return Basicmedicine;
    }

    public void setBasicmedicine(String basicmedicine) {
        Basicmedicine = basicmedicine;
    }
    @Column(length = 16000)
    private String whydisease;

    public String getWhydisease() {
        return whydisease;
    }

    public void setWhydisease(String whydisease) {
        this.whydisease = whydisease;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }



    // Getters and Setters

    public int getDiseaseId() {
        return diseaseId;
    }

    public void setDiseaseId(int diseaseId) {
        this.diseaseId = diseaseId;
    }

    public String getDiseaseName() {
        return diseaseName;
    }

    public void setDiseaseName(String diseaseName) {
        this.diseaseName = diseaseName;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public String getImage3() {
        return image3;
    }

    public void setImage3(String image3) {
        this.image3 = image3;
    }


    @Column(name = "beforecare")
    private String beforecare;

    public String getBeforecare() {
        return beforecare;
    }

    public void setBeforecare(String beforecare) {
        this.beforecare = beforecare;
    }
    //    public String getImage4() {
//        return Image4;
//    }
//
//    public void setImage4(String image4) {
//        Image4 = image4;
//    }
}
