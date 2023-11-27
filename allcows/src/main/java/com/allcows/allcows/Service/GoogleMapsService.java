//package com.allcows.allcows.Service;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.client.RestTemplate;
//
//public class GoogleMapsService {
//    private final String apiKey;
//    private RestTemplate restTemplate = new RestTemplate();
//    public GoogleMapsService(String apiKey) {
//        this.apiKey = apiKey;
//        this.restTemplate = new RestTemplate();
//    }
//
//    public String getGeocoding(String address) {
//        String apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;
//        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
//        return response.getBody();
//    }
//}
