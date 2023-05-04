package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.dto.UserDto;
import com.oguogu.m59s.model.service.KakaoService;
import com.oguogu.m59s.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserRestController {

    @Autowired
    UserService userService;
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    //유저 정보 출력
    @GetMapping("/main/{userId}")
    public ResponseEntity<Map<String, Object>> userDetail (@PathVariable long userId){
        Map<String, Object> resultMap = new HashMap<>();
        UserDto userDto = userService.detailUser(userId);
        resultMap.put("result",SUCCESS);
        resultMap.put("user",userDto);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @GetMapping("/main/ranking")
    public ResponseEntity<Map<String, Object>> userList(){
        List<UserDto> userDtoList = userService.listUser();
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("userList",userDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
}
