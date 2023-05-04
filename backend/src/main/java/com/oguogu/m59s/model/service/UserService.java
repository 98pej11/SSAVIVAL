package com.oguogu.m59s.model.service;

import com.oguogu.m59s.model.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto detailUser(long userId);
    List<UserDto> listUser();
}
