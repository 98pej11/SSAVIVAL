package com.oguogu.m59s.model.service;

import com.oguogu.m59s.entity.GameImage;
import com.oguogu.m59s.entity.MiniGame;
import com.oguogu.m59s.entity.MiniGameDetail;
import com.oguogu.m59s.model.dto.*;

import java.util.List;

public interface GameService {
    List<MiniGameInfoDto> listMiniGame(long gameId);
    List<GameDto> listGame(long userId);
    long findGameLastIndex();
    long findMiniGameLastIndex();
    void saveGameImage(GameImageDto gameImageDto);
    void saveMiniGame(MiniGameDto miniGameDto);
}
