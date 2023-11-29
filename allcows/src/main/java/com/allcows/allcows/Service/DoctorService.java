package com.allcows.allcows.Service;

import com.allcows.allcows.Model.DiseaseModel;
import com.allcows.allcows.Model.DoctorModel;
import com.allcows.allcows.Repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<DoctorModel> getAll() {
        return (List<DoctorModel>) doctorRepository.findAll();
    }

    public DoctorModel save(DoctorModel doctorModel) {
        return doctorRepository.save(doctorModel);
    }

    public DoctorModel findById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        DoctorModel existDoctor = findById(id);
        if (existDoctor != null) {
            doctorRepository.deleteById(id);
        }
    }

}
