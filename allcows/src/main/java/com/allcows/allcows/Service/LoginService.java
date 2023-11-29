package com.allcows.allcows.Service;

import com.allcows.allcows.Model.DoctorModel;
import com.allcows.allcows.Model.LoginModel;
import com.allcows.allcows.Repository.DoctorRepository;
import com.allcows.allcows.Repository.LoginRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public List<LoginModel> getAll() {
        return (List<LoginModel>) loginRepository.findAll();
    }

    public LoginModel save(LoginModel loginModel) {
        return loginRepository.save(loginModel);

    }

    public LoginModel findById(Long id) {
        return loginRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        LoginModel existLogin = findById(id);
        if (existLogin != null) {
            loginRepository.deleteById(id);
        }
    }


}
