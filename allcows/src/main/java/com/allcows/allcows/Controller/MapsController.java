//package com.allcows.allcows.Controller;
////
////import org.springframework.stereotype.Controller;
////import org.springframework.web.bind.annotation.GetMapping;
////
////@Controller
////public class MapController {
////
////    @GetMapping("/sravani")
////    public String index() {
////        return "index";  // Assuming that Thymeleaf is used, and the template is in src/main/resources/templates
////    }
////}
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.client.RestTemplate;
//
//
//import com.allcows.allcows.Service.GoogleMapsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/maps")
//public class MapsController {
//
//    private final GoogleMapsService mapsService;
//
//    @Autowired
//    public MapsController(GoogleMapsService mapsService) {
//        this.mapsService = mapsService;
//    }
//
//    @GetMapping("/geocoding/{address}")
//    public String getGeocoding(@PathVariable String address) {
//        return mapsService.getGeocoding(address);
//    }
//}
