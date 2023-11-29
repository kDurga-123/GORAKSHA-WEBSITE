package com.allcows.allcows.Controller;

import com.allcows.allcows.Model.CowModel;
import com.allcows.allcows.Service.CowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cowmodel")
public class CowController {

    @Autowired
    private CowService cowService;

    @GetMapping
    public List<CowModel> getAll() {
        return cowService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CowModel> getById(@PathVariable Integer id) {
        CowModel cowModel = cowService.findById(id);
        if (cowModel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cowModel, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CowModel> create(@RequestBody CowModel cowModel) {
        if (cowModel.getName() == null || cowModel.getName().strip().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        CowModel savedCowModel = cowService.save(cowModel);
        return new ResponseEntity<>(savedCowModel, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        cowService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CowModel> update(@PathVariable Integer id, @RequestBody CowModel cowModel) {
        CowModel existingCowModel = cowService.findById(id);
        if (existingCowModel == null) {
            return ResponseEntity.notFound().build();
        }
        existingCowModel.setName(cowModel.getName());
        CowModel updatedCowModel = cowService.save(existingCowModel);
        return new ResponseEntity<>(updatedCowModel, HttpStatus.OK);
    }
}
