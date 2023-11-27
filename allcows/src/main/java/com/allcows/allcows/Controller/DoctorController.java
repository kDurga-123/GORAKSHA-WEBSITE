package com.allcows.allcows.Controller;

import com.allcows.allcows.Model.DoctorModel;
import com.allcows.allcows.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<DoctorModel> getAll() {
        return doctorService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorModel> getById(@PathVariable Long id) {
        DoctorModel doctorModel = doctorService.findById(id);
        if (doctorModel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(doctorModel, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DoctorModel> create(@RequestBody DoctorModel doctorModel) {
        if (doctorModel.getName() == null || doctorModel.getName().strip().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        DoctorModel savedDoctorModel = doctorService.save(doctorModel);
        return new ResponseEntity<>(savedDoctorModel, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        doctorService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
