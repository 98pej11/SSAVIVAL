package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.dto.StatisticsDto;
import com.oguogu.m59s.model.service.KakaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/kakao")
@CrossOrigin(origins = "*")
public class KaKaoController {
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    KakaoService kakaoService;

    @PostMapping("/karlo")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<String, Object>> puzzleDetail(@RequestBody Map<String,String> thema) throws IOException {
        Map<String, Object> resultMap = new HashMap<>();

        String puzzelUrl = kakaoService.makeImage(thema.get("thema"));

        resultMap.put("result",SUCCESS);
        resultMap.put("puzzle",puzzelUrl);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
}
