package com.allcows.allcows.Service;

import com.allcows.allcows.Model.DiseaseModel;
import com.allcows.allcows.Repository.DiseaseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//public class DiseaseService {
//
//        private final DiseaseRepository diseaseRepository;
//
//        public DiseaseService(DiseaseRepository diseaseRepository) {
//            this.diseaseRepository = diseaseRepository;
//        }
//
//        public List<DiseaseModel> getAll() {
//            return (List<DiseaseModel>) diseaseRepository.findAll();
//        }
//
//        public DiseaseModel save(DiseaseModel diseaseModel) {
//            return diseaseRepository.save(diseaseModel);
//        }
//
//        public DiseaseModel findById(Long id) {
//            return diseaseRepository.findById(id).orElse(null);
//        }
//
//        public void delete(Long id) {
//            DiseaseModel existDiseases = findById(id);
//            if (existDiseases != null) {
//                diseaseRepository.deleteById(id);
//            }
//        }
//
//        public List<DiseaseModel> SerachDiseaseByName(String diseaseName)
//        {
//            return diseaseRepository.getSearchDiseaseByName(diseaseName);
//        }
//
//
//
//
//}

//@Service
public class DiseaseService {

    private final DiseaseRepository diseaseRepository;

    public DiseaseService(DiseaseRepository diseaseRepository) {
        this.diseaseRepository = diseaseRepository;
    }

    public List<DiseaseModel> getAll() {
        return (List<DiseaseModel>) diseaseRepository.findAll();
    }

    public DiseaseModel save(DiseaseModel diseaseModel) {
        return diseaseRepository.save(diseaseModel);
    }

    public DiseaseModel findById(Long id) {
        return diseaseRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        DiseaseModel existDiseases = findById(id);
        if (existDiseases != null) {
            diseaseRepository.deleteById(id);
        }
    }

    public List<DiseaseModel> searchDiseaseByName(String diseaseName) {
        return diseaseRepository.getSearchDiseaseByName(diseaseName);
    }
}

