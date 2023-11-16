package com.allcows.allcows.Controller;

//import com.allcows.allcows.Model.CowModel;
import com.allcows.allcows.Model.DiseaseModel;
//import com.allcows.allcows.Service.CowService;
import com.allcows.allcows.Service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/durga")
public class DiseaseController {
    @Autowired
    private DiseaseService diseaseService;

    @GetMapping
    public List<DiseaseModel> getAll() {
        return diseaseService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiseaseModel> getById(@PathVariable Long id) {
        DiseaseModel diseaseModel = diseaseService.findById(id);
        if (diseaseModel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(diseaseModel, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DiseaseModel> create(@RequestBody DiseaseModel diseaseModel) {
        if (diseaseModel.getDiseaseName() == null || diseaseModel.getDiseaseName().strip().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        DiseaseModel savedDiseaseModel = diseaseService.save(diseaseModel);
        return new ResponseEntity<>(savedDiseaseModel, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        diseaseService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DiseaseModel> update(@PathVariable Long id, @RequestBody DiseaseModel diseaseModel) {
        DiseaseModel existingDiseaseModel = diseaseService.findById(id);
        if (existingDiseaseModel == null) {
            return ResponseEntity.notFound().build();
        }
        existingDiseaseModel.setDiseaseName(diseaseModel.getDiseaseName());
        DiseaseModel updatedDiseaseModel = diseaseService.save(existingDiseaseModel);
        return new ResponseEntity<>(updatedDiseaseModel, HttpStatus.OK);
    }
    @GetMapping("/search/{diseaseName}")
    public List<DiseaseModel> searchDiseaseByName(@PathVariable("diseaseName") String diseaseName) {
        return diseaseService.searchDiseaseByName(diseaseName);
    }

}
