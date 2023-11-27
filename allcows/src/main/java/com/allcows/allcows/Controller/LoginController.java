package com.allcows.allcows.Controller;//package com.allcows.allcows.Controller;
//
//import com.allcows.allcows.Model.DoctorModel;
//import com.allcows.allcows.Model.LoginModel;
//import com.allcows.allcows.Service.DoctorService;
//import com.allcows.allcows.Service.LoginService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/login")
//public class LoginController {
//    @Autowired
//    private LoginService loginService;
//
//    @GetMapping
//    public List<LoginModel> getAll() {
//        return loginService.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<LoginModel> getById(@PathVariable Long id) {
//        LoginModel loginModel = loginService.findById(id);
//        if (loginModel == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(loginModel, HttpStatus.OK);
//    }
//
//    @PostMapping
//    public ResponseEntity<LoginModel> create(@RequestBody LoginModel loginModel) {
//        if (loginModel.getFirstName() == null || loginModel.getFirstName().strip().isEmpty()) {
//            return ResponseEntity.badRequest().build();
//        }
//        LoginModel savedLoginModel = loginService.save(loginModel);
//        return new ResponseEntity<>(savedLoginModel, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable Long id) {
//        loginService.delete(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//}



import com.allcows.allcows.Model.LoginModel;
import com.allcows.allcows.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;

@RestController
@RequestMapping("/login")
@Validated
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping
    public List<LoginModel> getAll() {
        return loginService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoginModel> getById(@PathVariable Long id) {
        LoginModel loginModel = loginService.findById(id);
        if (loginModel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(loginModel, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<LoginModel> create(@RequestBody LoginModel loginModel) {
        if (loginModel.getFirstName() == null || loginModel.getFirstName().strip().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        LoginModel savedLoginModel = loginService.save(loginModel);
        return new ResponseEntity<>(savedLoginModel, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        loginService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        // Log the exception details
        ex.printStackTrace();

        return new ResponseEntity<>("Validation Error: " + ex.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
    }

}

