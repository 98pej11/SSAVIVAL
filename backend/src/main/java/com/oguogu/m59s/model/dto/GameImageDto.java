package com.oguogu.m59s.model.dto;

import com.oguogu.m59s.entity.GameImage;
import lombok.*;

import javax.persistence.Column;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameImageDto {

    private long gameImageId;
    private int round;
    private String imageUrl;
    private long miniGameId;

    public GameImage toEntity() {
        GameImage gameImage = GameImage.builder()
                .gameImageId(gameImageId)
                .round(round)
                .imageUrl(imageUrl)
                .miniGameId(miniGameId)
                .build();
        return gameImage;
    }
}
