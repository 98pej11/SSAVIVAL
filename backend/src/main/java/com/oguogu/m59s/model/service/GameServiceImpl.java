package com.oguogu.m59s.model.service;

import com.oguogu.m59s.entity.Game;
import com.oguogu.m59s.entity.MiniGame;
import com.oguogu.m59s.entity.MiniGameDetail;
import com.oguogu.m59s.model.dto.GameDto;
import com.oguogu.m59s.model.dto.MiniGameDetailDto;
import com.oguogu.m59s.model.dto.MiniGameDto;
import com.oguogu.m59s.model.dto.MiniGameInfoDto;
import com.oguogu.m59s.repository.GameRepository;
import com.oguogu.m59s.repository.MiniGameDetailRepository;
import com.oguogu.m59s.repository.MiniGameRepository;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameServiceImpl implements GameService{

    @Autowired
    MiniGameRepository miniGameRepository;
    @Autowired
    MiniGameDetailRepository miniGameDetailRepository;
    @Autowired
    GameRepository gameRepository;

    @Override
    public List<MiniGameInfoDto> listMiniGame(long gameId) {
        List<MiniGame> miniGames = miniGameRepository.findAllByGameId(gameId);
        List<MiniGameInfoDto> miniGameInfoDtos = new ArrayList<>();
        for (MiniGame miniGame : miniGames) {
            MiniGameDto dto = miniGame.toDto();
            MiniGameDetailDto miniGameDetailDto = miniGameDetailRepository.findById(dto.getMiniGameDetailId()).get().toDto();
            MiniGameInfoDto miniGameInfoDto = new MiniGameInfoDto(dto.getMiniGameId(),dto.getClearTime(),dto.getScore(), miniGameDetailDto);
            miniGameInfoDtos.add(miniGameInfoDto);
        }
        return miniGameInfoDtos;
    }

    @Override
    public List<GameDto> listGame(long userId) {
        System.out.println("aaaaaaaaaaaa");
        List<Game> gameList = gameRepository.findAllByUserId(userId);
        for(int i=0;i<gameList.size();i++){
            System.out.println(i);
            System.out.println(gameList.get(i));
        }
        System.out.println("bbbbbbbbbbbb");
        List<GameDto> gameDtoList = new ArrayList<>();
        //정렬안됐음 정렬 sort로 안될둣 훅훅
        gameList.sort(null);
        for (Game game : gameList) {
            GameDto dto = game.toDto();
            gameDtoList.add(dto);
        }
        return gameDtoList;
    }

}
