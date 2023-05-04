package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.dto.StatisticsDto;
import com.oguogu.m59s.model.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/main/statictis")
@CrossOrigin(origins = "*")
public class StatisticsRestController {

    @Autowired
    StatisticsService statisticsService;

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @GetMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> statisticsDetail(@PathVariable long userId) {
        Map<String, Object> resultMap = new HashMap<>();
        StatisticsDto statisticsDto = statisticsService.detailStatistics(userId);
        resultMap.put("result",SUCCESS);
        resultMap.put("statistics",statisticsDto);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

}
