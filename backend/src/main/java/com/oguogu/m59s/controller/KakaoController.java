package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.dto.UserDto;
import com.oguogu.m59s.model.service.KakaoLoginService;
import com.oguogu.m59s.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user/kakao")
@CrossOrigin(origins = "*")
public class KakaoController {

    @Autowired
    UserService userService;
    @Autowired
    KakaoLoginService kakaoLoginService;

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

//    @GetMapping ("/check")
//    public ResponseEntity<Map<String, Object>> registCheck(@RequestParam String code)  throws Throwable {
//        System.out.println(code);
//        String access_Token = kakaoLoginService.getAccessToken(code);
//        System.out.println("access_Token: " + access_Token);
//        Map<String, Object> userInfo   = kakaoLoginService.getUserInfo(access_Token);
//        System.out.println("###nickname#### : " + userInfo.get("nickname"));
//        System.out.println("###email#### : " + userInfo.get("email"));
//
//        UserDto userDto = userService.findUserByEmail((String) userInfo.get("email"));
//
//        Map<String, Object> resultMap = new HashMap<>();
//        resultMap.put("result", SUCCESS);
//        if(userDto == null) {
//            resultMap.put("exist",  false);
//        }
//        else resultMap.put("exist", true);
//
//        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
//    }

    @GetMapping ("/check")
    public ResponseEntity<Map<String, Object>> registCheck(@RequestParam String email)  throws Throwable {
        System.out.println("email : " + email);
//        String access_Token = kakaoLoginService.getAccessToken(code);
//        System.out.println("access_Token: " + access_Token);
//        Map<String, Object> userInfo   = kakaoLoginService.getUserInfo(access_Token);
//        System.out.println("###nickname#### : " + userInfo.get("nickname"));
//        System.out.println("###email#### : " + userInfo.get("email"));

        UserDto userDto = userService.findUserByEmail(email);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", SUCCESS);
        if(userDto == null) {
            resultMap.put("exist",  false);
        }
        else resultMap.put("exist", true);

        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

//    @PostMapping("/callback")
//    public ResponseEntity<Map<String, Object>> registKakao(@RequestBody Map<String,String> params){
//        String code= params.get("code");
//        int option=Integer.parseInt(params.get("option"));
//        String nickname=params.get("nickname");
//
//        System.out.println("code: " + code);
//
//        System.out.println("option: " + option);
//        System.out.println("nickname: " + nickname);
//        Map<String, Object> resultMap = null;
//
//
//
//        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
//    }

    @PostMapping("/regist")
    public ResponseEntity<Map<String, Object>> userRegist(@RequestBody UserDto userDto){
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        userService.registUser(userDto);

        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

}
