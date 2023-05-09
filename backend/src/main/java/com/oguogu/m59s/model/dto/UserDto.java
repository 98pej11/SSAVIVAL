package com.oguogu.m59s.model.dto;

import com.oguogu.m59s.entity.User;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private long userId;
    private String nickname;
    private int campus;
    private int mileage;
    private String email;


    public User toEntity() {
        User user = User.builder()
                .userId(userId)
                .nickname(nickname)
                .campus(campus)
                .mileage(mileage)
                .email(email)
                .build();
        return user;
    }
}
