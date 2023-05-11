package com.oguogu.m59s.model.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class GameDoneDto {
    private long gameId;
    private List<GameInfoDto> gameInfoDtoList;
}
