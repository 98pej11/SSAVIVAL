package com.oguogu.m59s.entity;

import com.oguogu.m59s.model.dto.MiniGameDetailDto;
import com.oguogu.m59s.model.dto.MiniGameDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MiniGame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long miniGameId;

    @Column(length = 20)
    private String clearTime;
    @Column(nullable = false)
    private int score;
    @Column(nullable = false)
    private long gameId;
    @Column(nullable = false)
    private long miniGameDetailId;

    public MiniGameDto toDto() {
        MiniGameDto miniGameDto = MiniGameDto.builder()
                .miniGameId(miniGameId)
                .clearTime(clearTime)
                .score(score)
                .gameId(gameId)
                .miniGameDetailId(miniGameDetailId)
                .build();
        return miniGameDto;
    }
}
