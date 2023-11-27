package com.allcows.allcows.Repository;


import com.allcows.allcows.Model.LoginModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginModel,Long> {
}
