package com.oguogu.m59s.model.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class GameInfoDto {
    private MiniGameDto miniGameDto;
    private List<MultipartFile> gameImages;
}
