package com.allcows.allcows.Repository;

import com.allcows.allcows.Model.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<DoctorModel,Long> {
}
