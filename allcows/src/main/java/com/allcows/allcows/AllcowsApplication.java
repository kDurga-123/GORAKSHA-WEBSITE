//package com.allcows.allcows;
//
//import com.allcows.allcows.Service.GoogleMapsService;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//@SpringBootApplication
//public class AllcowsApplication {
//
//	public static void main(String[] args, String apiKey1) {
//		if (args.length != 1) {
//			System.err.println("Please provide the API key as a command-line argument.");
//			System.exit(1);
//		}
//
//		String apiKey = args[0];
//		SpringApplication.run(AllcowsApplication.class, args);
//        apiKey = "AIzaSyCQFvrd-KrOs5AtqAFAtwpKo5iX2o3wdXA\n";
//		GoogleMapsService mapsService = new GoogleMapsService(apiKey, apiKey1);
//
//		// Example: Get geocoding information for an address
//		String address = "1600 Amphitheatre Parkway, Mountain View, CA";
//		String geocodingResponse = mapsService.getGeocoding(address);
//
//		System.out.println(geocodingResponse);
//	}
//
//}
package com.allcows.allcows;

//import com.allcows.allcows.Service.GoogleMapsService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AllcowsApplication {

	public static void main(String[] args) {
//		if (args.length != 1) {
//			System.err.println("Please provide the API key as a command-line argument.");
//			System.exit(1);
//		}
//
//		String apiKey = args[0];
		SpringApplication.run(AllcowsApplication.class, args);
//
//		GoogleMapsService mapsService = new GoogleMapsService(apiKey);
//
//		// Example: Get geocoding information for an address
//		String address = "1600 Amphitheatre Parkway, Mountain View, CA";
//		String geocodingResponse = mapsService.getGeocoding(address);

		System.out.println("durga");
	}
}
