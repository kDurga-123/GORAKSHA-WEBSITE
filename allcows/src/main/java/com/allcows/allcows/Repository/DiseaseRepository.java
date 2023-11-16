package com.allcows.allcows.Repository;


import com.allcows.allcows.Model.DiseaseModel;
// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DiseaseRepository extends CrudRepository<DiseaseModel,Long> {
    @Query("SELECT d FROM DiseaseModel d WHERE d.diseaseName LIKE %?1%")
    List<DiseaseModel> getSearchDiseaseByName(String diseaseName);
}
