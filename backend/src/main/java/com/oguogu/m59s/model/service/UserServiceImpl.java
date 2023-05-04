package com.oguogu.m59s.model.service;

import com.oguogu.m59s.entity.User;
import com.oguogu.m59s.model.dto.UserDto;
import com.oguogu.m59s.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    //사용자 정보 출력
    @Override
    public UserDto detailUser(long userId) {
        Optional<User> userWrapper = userRepository.findById(userId);
        UserDto userDto = null;
        if(userWrapper.isPresent()){
            User user = userWrapper.get();
            userDto = user.toDto();
        }
        return userDto;
    }
    
    //랭크 순서대로 리스트 출력
    public List<UserDto> listUser(){
        Sort sort = Sort.by(Sort.Direction.DESC, "mileage");
        List<User> rankList =userRepository.findAll(sort);
        List<UserDto> rankDtoList = new ArrayList<>();
        if (rankList==null || rankList.isEmpty()){
            System.out.println("비었읍니다");
        }
        else{
            for (User user : rankList) {
                UserDto dto = user.toDto();
                rankDtoList.add(dto);
            }
        }
        return rankDtoList;
    }

}
