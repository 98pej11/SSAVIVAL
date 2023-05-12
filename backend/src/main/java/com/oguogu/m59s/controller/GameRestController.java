package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.dto.GameDto;
import com.oguogu.m59s.model.dto.MiniGameInfoDto;
import com.oguogu.m59s.model.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "*")
public class GameRestController {

    @Autowired
    GameService gameService;

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @GetMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> MiniGameList(@PathVariable long userId){
        //해당 유저의 최고기록에 해당하는 gameId 가져오기(정렬이 되어있기 때문에 제일 위에꺼를 가져가면 최고점)
        GameDto gameDto = gameService.listGame(userId).get(0);

        //gameId를 기반으로 게임 정보 가져오기
        long gameId = gameDto.getGameId();

        List<MiniGameInfoDto> miniGameInfoDtoList = gameService.listMiniGame(gameId);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("miniGameInfoList",miniGameInfoDtoList);

        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
//    리스트로 post? ref 없기도 하고 일단 변동 가능성이 높아 보류
//    @PostMapping("/done")
//    public ResponseEntity<Map<String, Object>> addMiniGameList
}
