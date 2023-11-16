package com.allcows.allcows.Repository;

import com.allcows.allcows.Model.CowModel;

import java.util.Optional;

// import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CowRepository extends JpaRepository<CowModel,Integer> {

    Optional<CowModel> findById(Long id);

    void deleteAllById(Long id);
}
