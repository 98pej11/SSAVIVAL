package com.oguogu.m59s.controller;

import com.oguogu.m59s.model.S3FileUploadService;
import com.oguogu.m59s.model.dto.*;
import com.oguogu.m59s.model.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "*")
public class GameRestController {

    @Autowired
    GameService gameService;
    @Autowired
    S3FileUploadService s3FileUploadService;

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

    @PostMapping("/done")
    public ResponseEntity<Map<String, Object>> gameInfoSave(@RequestPart(value="miniGame") MiniGameDto miniGameDto, @RequestParam(value = "gameImages") List<MultipartFile> multipartFiles) throws Exception{
//        public ResponseEntity<Map<String, Object>> gameInfoSave(@RequestBody MiniGameDto miniGameDto, @RequestPart(value = "profile",required = false) MultipartFile[] multipartFiles) throws Exception{
//        long miniGameId = miniGameDto.getMiniGameId();

        if(multipartFiles != null) {
            gameService.saveMiniGame(miniGameDto);
            long miniGameLastIndex = gameService.findMiniGameLastIndex();
            for(int i=0;i<multipartFiles.size();i++){
                GameImageDto gameImageDto = new GameImageDto();
                gameImageDto.setMiniGameId(miniGameLastIndex);
                gameImageDto.setImageUrl(s3FileUploadService.upload(multipartFiles.get(i)));
                gameService.saveGameImage(gameImageDto);
            }
//            miniGameDto
//            int len = multipartFiles.length;
//            for(int i=0;i<len;i++){
//                GameImageDto gameImageDto = new GameImageDto();
//                gameImageDto.setImageUrl(s3FileUploadService.upload(multipartFiles[i]));
//                gameImageDto.setRound(i+1);
//                setMiniGameId(miniGameDto.getMiniGameDetailId());
//            }

        }
        return null;
    }
}
