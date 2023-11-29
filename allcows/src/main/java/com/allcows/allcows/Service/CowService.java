// package com.allcows.allcows.Service;

// import com.allcows.allcows.Model.CowModel;
// import com.allcows.allcows.Repository.CowRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class CowService {
//     @Autowired
//     private static CowRepository cowRepository;
//     public List<CowModel> getAll() {
//         return cowRepository.findAll();
//     }

//     public static CowModel save(CowModel cowModel) { // Use the correct type for the parameter
//         return cowRepository.save(cowModel);
//     }
//     public static CowModel findById(Long id)
//     {
//         return cowRepository.findById(id).orElse(null);
//     }
//     public void delete(Long id)
//     {
//         CowModel existCow = findById(id);
//         if(existCow != null)
//         {
//             cowRepository.deleteById(id);
//         }
//     }

// }


package com.allcows.allcows.Service;

import com.allcows.allcows.Model.CowModel;
import com.allcows.allcows.Repository.CowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CowService {
    @Autowired
    private final CowRepository cowRepository;

    public CowService(CowRepository cowRepository) {
        this.cowRepository = cowRepository;
    }

    public List<CowModel> getAll() {
        return cowRepository.findAll();
    }

    public CowModel save(CowModel cowModel) {
        return cowRepository.save(cowModel);
    }

    public CowModel findById(Integer id) {
        return cowRepository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        CowModel existCow = findById(id);
        if (existCow != null) {
            cowRepository.deleteById(id);
        }
    }
    
}

